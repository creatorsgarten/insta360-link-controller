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
    return { x, y };
  }
);

export const $throttledPanTiltSpeed = atom($panTiltSpeed.get());

onMount($throttledPanTiltSpeed, () => {
  const interval = setInterval(() => {
    $throttledPanTiltSpeed.set($panTiltSpeed.get());
  }, 50);
  return () => clearInterval(interval);
});

export function contributePanTiltSpeed(id: string, x: number, y: number) {
  $panTiltSpeedContributions.set({
    ...$panTiltSpeedContributions.get(),
    [id]: { x, y },
  });
}
