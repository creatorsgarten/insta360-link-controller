import { atom, computed, onMount } from "nanostores";

export const $zoomLevel = atom<number>(100);

export const $panTiltSpeedContributions = atom<
  Record<string, { x: number; y: number }>
>({});

export const $panTiltSpeed = computed(
  $panTiltSpeedContributions,
  (contributions) => {
    let x = 0;
    let y = 0;
    for (const { x: dx, y: dy } of Object.values(contributions)) {
      x += dx;
      y += dy;
    }
    return { x: Math.round(x), y: Math.round(y) };
  }
);

export const $throttledPanTiltSpeed = atom($panTiltSpeed.get());

onMount($throttledPanTiltSpeed, () => {
  const interval = setInterval(() => {
    const current = $throttledPanTiltSpeed.get();
    const target = $panTiltSpeed.get();
    if (JSON.stringify(target) === JSON.stringify(current)) return;
    $throttledPanTiltSpeed.set(target);
  }, 50);
  return () => clearInterval(interval);
});

export function contributePanTiltSpeed(id: string, x: number, y: number) {
  $panTiltSpeedContributions.set({
    ...$panTiltSpeedContributions.get(),
    [id]: { x, y },
  });
}
