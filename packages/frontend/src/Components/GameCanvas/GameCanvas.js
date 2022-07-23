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
import catPat from "../../img/cat_pat.gif";
import catPlay from "../../img/cat_play.gif";
import food from "../../img/food.png";
import hand from "../../img/hand.png";

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
  margin: "0",
  background: "none",
  width: "200px",
  height: "200px",
};

const GameCanvas = (props) => {
  const [catStatus, setCatStatus] = useState(catIdle);
  const [catAge, setCatAge] = useState(-1);
  const [engaged, setEngaged] = useState(false);

  console.log(catAge);
  useEffect(() => {
    if (props.wordCount % 10 === 0) {
      setCatAge(catAge + 1);
    }
  }, [props.wordCount]);

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
                if (engaged) return;
                setEngaged(true);
                setCatStatus(catEat);
                setTimeout(() => {
                  setCatStatus(catIdle);
                  setTimeout(() => {
                    setCatStatus(catNap);
                    setEngaged(false);
                  }, 1000);
                }, 4000);
              }}
              disableElevation
              disabled={catAge > 0 ? false : true}
            >
              <img src={food} style={{ width: "200px", height: "200px" }} />
            </Button>
          </div>
        </Html>
        <Html center distanceFactor={3} position={[0, 1, 0]}>
          <div>
            <Button
              variant="contained"
              sx={buttonStyle}
              disableElevation
              onClick={() => {
                if (engaged) return;
                setEngaged(true);
                setCatStatus(catPat);
                setTimeout(() => {
                  setCatStatus(catIdle);
                  setTimeout(() => {
                    setCatStatus(catNap);
                    setEngaged(false);
                  }, 1000);
                }, 5000);
              }}
              disabled={catAge > 1 ? false : true}
            >
              <img src={hand} style={{ width: "100px", height: "100px" }} />
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
              onClick={() => {
                if (engaged) return;
                setEngaged(true);
                setCatStatus(catPlay);
                setTimeout(() => {
                  setCatStatus(catIdle);
                  setTimeout(() => {
                    setCatStatus(catNap);
                    setEngaged(false);
                  }, 1000);
                }, 6000);
              }}
            >
              Play
            </Button>
          </div>
        </Html>
      </Canvas>
    </div>
  );
};

export default GameCanvas;
