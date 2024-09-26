import { useEffect, useRef } from "react";
import { useGamepadHandler } from "../gamepad/useGamepadHandler";
import { $zoomLevel } from "../state/camera";

export function GamepadController() {
  const { axis, zoomLevel, updateAxisFromPointer } = useGamepadHandler();
  const containerRef = useRef<HTMLDivElement>(null);
  const zoomerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isPointerDown = false;
    const handlePointerDown = (e: PointerEvent) => {
      isPointerDown = true;
      handlePointerMove(e);
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isPointerDown) return;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      updateAxisFromPointer(x * 2 - 1, y * 2 - 1);
    };

    const handlePointerUp = () => {
      isPointerDown = false;
      updateAxisFromPointer(0, 0);
    };
    container.addEventListener("pointerdown", handlePointerDown);
    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("pointerup", handlePointerUp);
    container.addEventListener("pointerleave", handlePointerUp);

    return () => {
      container.removeEventListener("pointerdown", handlePointerDown);
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerup", handlePointerUp);
      container.removeEventListener("pointerleave", handlePointerUp);
    };
  }, [updateAxisFromPointer]);

  useEffect(() => {
    const zoomer = zoomerRef.current;
    if (!zoomer) return;

    let isZoomerDown = false;

    const handleZoomerDown = (e: PointerEvent) => {
      isZoomerDown = true;
      handleZoomerMove(e);
    };

    const handleZoomerMove = (e: PointerEvent) => {
      if (!isZoomerDown) return;
      const rect = zoomer.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const newZoomLevel = 100 + x * 300;
      $zoomLevel.set(Math.max(100, Math.min(400, newZoomLevel)));
    };

    const handleZoomerUp = () => {
      isZoomerDown = false;
    };

    zoomer.addEventListener("pointerdown", handleZoomerDown);
    zoomer.addEventListener("pointermove", handleZoomerMove);
    zoomer.addEventListener("pointerup", handleZoomerUp);
    zoomer.addEventListener("pointerleave", handleZoomerUp);

    return () => {
      zoomer.removeEventListener("pointerdown", handleZoomerDown);
      zoomer.removeEventListener("pointermove", handleZoomerMove);
      zoomer.removeEventListener("pointerup", handleZoomerUp);
      zoomer.removeEventListener("pointerleave", handleZoomerUp);
    };
  }, []);

  return (
    <section className={"space-y-2 px-4 py-2"}>
      <h2 className={"font-extrabold text-center"}>Controller</h2>
      <div
        ref={containerRef}
        className="bg-green-950 w-48 h-48 rounded-xl relative overflow-hidden rounded-full"
      >
        {/*Y-axis*/}
        <div className="h-48 w-0.5 bg-green-300/10 absolute left-1/4"></div>
        <div className="h-48 w-0.5 bg-green-300/30 absolute left-1/2 z-10"></div>
        <div className="h-48 w-0.5 bg-green-300/10 absolute left-3/4"></div>
        {/*X-axis*/}
        <div className="w-48 h-0.5 bg-green-300/10 absolute top-1/4"></div>
        <div className="w-48 h-0.5 bg-green-300/30 absolute top-1/2 z-10"></div>
        <div className="w-48 h-0.5 bg-green-300/10 absolute top-3/4"></div>

        {/*Dot*/}
        <div
          className="w-4 h-4 bg-red-400 rounded-full absolute z-20"
          style={{
            top: (6 - 0.4 + axis[1] * 6) * 16,
            left: (6 - 0.4 + axis[0] * 6) * 16,
          }}
        ></div>
      </div>
      <div className={"w-48"}>
        <div
          className={"h-4 bg-gray-200 rounded-md overflow-hidden"}
          ref={zoomerRef}
        >
          <div
            className={"h-4 bg-blue-500"}
            style={{
              width: `${(((zoomLevel - 100) * 100) / 300).toFixed(2)}%`,
            }}
          ></div>
        </div>
        <div className={"flex justify-between px-2 font-bold text-sm"}>
          <span>S</span>
          <span>L</span>
        </div>
      </div>
    </section>
  );
}
