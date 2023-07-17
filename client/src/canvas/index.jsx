import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";

const CanvasModel = () => {
  return (
    // Everything will come inside this tag
    // Camera properties inside the Canvas to make shirt bigger
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      {/* this will have affect on whole screen */}
      <Environment preset="city" />
      {/* To work properly, these components should return Threejs instead of normal divs */}
      {/* We willpoint cameraRig close to shirt to maximize its size */}
      {/* We are passing some children components in CameraRig */}
      <CameraRig>
        {/* <Backdrop /> */}
        {/* This will place shirt in the center of the screen */}
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
