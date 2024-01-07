"use client";

import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Cup = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const canvas = document.querySelector("#cup") as HTMLCanvasElement;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });

    const camera = new THREE.PerspectiveCamera(
      30,
      canvas.width / canvas.height
    );
    camera.position.set(0, 0, 5);

    scene.background = new THREE.Color("#e1effe");

    const light = new THREE.DirectionalLight("#bbf7d0", 4);
    light.position.set(-10, 20, 10);
    scene.add(light);

    const loader = new GLTFLoader();
    loader.load("/cup/scene.gltf", (gltf) => {
      scene.add(gltf.scene);
      renderer.render(scene, camera);

      gltf.scene.rotation.z += 0.15;
      const animate = () => {
        requestAnimationFrame(animate);
        gltf.scene.rotation.y += 0.015;
        renderer.render(scene, camera);
      };
      animate();
    });
  }, []);

  return <canvas id="cup" />;
};

export default Cup;
