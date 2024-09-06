import { useGamepadHandler } from "../gamepad/useGamepadHandler";

export function GamepadController() {
  const { axis, zoomLevel } = useGamepadHandler();

  return (
    <section className={"space-y-2 px-4 py-2"}>
      <h2 className={"font-extrabold text-center"}>Controller</h2>
      <div className="bg-green-950 w-48 h-48 rounded-xl relative overflow-hidden rounded-full">
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
        <div className={"h-4 bg-gray-200 rounded-md overflow-hidden"}>
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
