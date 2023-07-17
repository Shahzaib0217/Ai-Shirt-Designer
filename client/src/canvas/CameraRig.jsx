import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";

import state from "../store";
// passing children components as props
const CameraRig = ({ children }) => {
  // We gonna use this ref to update the state
  const group = useRef();
  const snap = useSnapshot(state);

  // UseFrame Allows to execute code on every rendered frame
  useFrame((state, delta) => {
    // setting breakpoints
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;
    // set initial positions of the model for all the screen sizes
    let targetPosition = [-0.4, 0, 2];
    if (snap.intro) {
      if (isBreakpoint) targetPosition = [0, 0, 2];
      if (isMobile) targetPosition = [0, 0.2, 2.5];
    } else {
      if (isMobile) targetPosition = [0, 0, 2.5];
      else targetPosition = [0, 0, 2];
    }
    // set modal camera position (makes shirt size a bit bigger)
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);
    // set the model rotation smoothly (moving shirt)
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
