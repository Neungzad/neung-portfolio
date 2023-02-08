import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import LogoVoxel from "./Logo-Voxel";

function App() {
  return (
    <div className="App">
      <div>
        <LogoVoxel></LogoVoxel>
      </div>
      <h1>Vite + React</h1>
    </div>
  );
}

export default App;
