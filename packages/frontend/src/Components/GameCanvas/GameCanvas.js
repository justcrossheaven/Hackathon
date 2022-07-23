import React, { Suspense, useEffect, useState } from "react";
import pic from "../../img/gameCanvas.jpeg";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Html } from "@react-three/drei";
import { Button } from "@mui/material";
import catIdle from "../../img/cat_sit.gif";
import catEat from "../../img/cat_eat.gif";
import catNap from "../../img/cat_nap.gif";

function Image() {
  const texture = useLoader(TextureLoader, pic);
  return (
    <mesh position={[0, 0, 3.2]}>
      <planeBufferGeometry attach="geometry" args={[3, 3]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
}

const buttonStyle = {
  borderRadius: "5px",
  padding: "18px",
  margin: "0",
  fontSize: "2rem",
  width: "160px",
};

const GameCanvas = () => {
  const [catStatus, setCatStatus] = useState(catIdle);
  const [catAge, setCatAge] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCatStatus(catNap);
    }, 10000);
  }, []);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Canvas colorManagement>
        <Suspense fallback={null}>
          <Image />
        </Suspense>
        <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
          <Html center distanceFactor={3} position={[-1.1, 0, 0]}>
            <div style={{ position: "absolute" }}>
              <img
                src={catStatus}
                style={{
                  width: "500px",
                  height: "500px",
                }}
              />
            </div>
          </Html>
        </group>
        <Html center distanceFactor={3} position={[-1, 0, 0]}>
          <div>
            <Button
              variant="contained"
              sx={buttonStyle}
              onClick={() => {
                setCatStatus(catEat);
                setTimeout(() => {
                  setCatStatus(catIdle);
                }, 4000);
              }}
              disableElevation
              disabled={catAge > 0 ? false : true}
            >
              Feed
            </Button>
          </div>
        </Html>
        <Html center distanceFactor={3} position={[0, 1, 0]}>
          <div>
            <Button
              variant="contained"
              sx={buttonStyle}
              disableElevation
              disabled={catAge > 1 ? false : true}
            >
              Litter
            </Button>
          </div>
        </Html>
        <Html center distanceFactor={3} position={[1, 0, 0]}>
          <div>
            <Button
              variant="contained"
              sx={buttonStyle}
              disableElevation
              disabled={catAge > 2 ? false : true}
            >
              Water
            </Button>
          </div>
        </Html>
      </Canvas>
    </div>
  );
};

export default GameCanvas;
