import React from "react";
import pic from "../../img/cat_idle.gif";

const GameCanvas = () => {
  return (
    <div>
      <div className="game-canvas-parent" style={{ zIndex: "-1" }}>
        <div className="game-canvas-child"></div>
        <img
          src={pic}
          style={{
            zIndex: "100",
            position: "absolute",
            left: "45%",
            bottom: "18%",
            width: "300px",
            height: "300px",
            marginTop: "-150px",
            marginLeft: "-150px",
          }}
        />
      </div>
    </div>
  );
};

export default GameCanvas;
