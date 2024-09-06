import { map } from "nanostores";
import { useEffect, useState } from "react";
import { $zoomLevel, contributePanTiltSpeed } from "../state/camera";

interface GamepadValue {}

export const gamepadAtom = map<Record<string, GamepadValue>>({});

export const useGamepadHandler = () => {
  // state only used for monitoring
  const [axis, setAxis] = useState<[number, number]>([0, 0]);
  const [zoomLevel, setZoomLevel] = useState(100);

  useEffect(() => {
    // let loopId: number | undefined = undefined
    let cameraMoving: boolean = false;
    let zoomSpeed = 0;
    let innerZoomLevel = 100;

    function onGamepadLoop() {
      const gamepads = navigator.getGamepads();
      const gamepad = gamepads[0];

      if (gamepad) {
        const buttons = Array.from(gamepad.buttons.entries());

        const leftBackPedal = buttons[6][1];
        const rightBackPedal = buttons[7][1];

        // stick left x = -1, stick right x = 1, stick up y = -1, stick down y = 1
        let [leftX, leftY, rightX, rightY] = gamepad.axes;

        const preprocess = (value: number) => {
          const deadZone = 0.1;
          if (Math.abs(value) < deadZone) {
            return 0;
          }
          const sign = Math.sign(value);
          let magnitude = Math.abs(value);
          magnitude = (magnitude - deadZone) / (1 - deadZone);
          magnitude = magnitude ** 2;
          return sign * magnitude;
        };
        leftX = preprocess(leftX);
        leftY = preprocess(leftY);

        // if analog stick left is moved outside of deadzone
        if (Math.abs(leftX) > 0 || Math.abs(leftY) > 0) {
          // const maxSpeedX = 100
          const maxSpeedX = 30;
          const maxSpeedY = 20;

          // send camera movement speed based on position
          const speedX = Math.round(leftX * maxSpeedX);
          const speedY = Math.round(leftY * maxSpeedY);

          cameraMoving = true;
          contributePanTiltSpeed("gamepad", speedX, speedY);
        } else {
          // if analog stick left is in deadzone, stop camera movement
          if (cameraMoving) {
            contributePanTiltSpeed("gamepad", 0, 0);
            cameraMoving = false;
          }
        }

        // calculate zoom based on speed
        const minZoomLevel = 100;
        const maxZoomLevel = 400;

        const acceleration = 1;

        if (leftBackPedal.pressed && !rightBackPedal.pressed) {
          zoomSpeed = Math.max(zoomSpeed - acceleration, -40);
        } else if (rightBackPedal.pressed && !leftBackPedal.pressed) {
          zoomSpeed = Math.min(zoomSpeed + acceleration, 40);
        } else if (!leftBackPedal.pressed && !rightBackPedal.pressed) {
          zoomSpeed = 0;
        }

        innerZoomLevel = Math.min(
          Math.max(innerZoomLevel + zoomSpeed, minZoomLevel),
          maxZoomLevel
        );

        $zoomLevel.set(innerZoomLevel);

        setAxis([leftX, leftY]);
        setZoomLevel(innerZoomLevel);
      }
    }

    let interval = setInterval(() => {
      onGamepadLoop();
    }, 16);

    return () => {
      clearInterval(interval);
    };

    // if (loopId === undefined)
    //   loopId = requestAnimationFrame(onGamepadLoop)
  }, []);

  return {
    axis,
    zoomLevel,
  };
};
