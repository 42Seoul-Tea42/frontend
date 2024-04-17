import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Cup: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const canvas = canvasRef.current;

    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true
    });

    const camera = new THREE.PerspectiveCamera(35, canvas.width / canvas.height, 0.1, 1000);
    camera.position.set(0, 0, 6);

    scene.background = new THREE.Color('white');
    const light = new THREE.DirectionalLight('white', 4);
    light.position.set(3, 5, 8);
    scene.add(light);

    const loader = new GLTFLoader();

    const addModelToScene = (gltf: GLTF, xOffset: number) => {
      const model = gltf.scene;
      model.position.x = xOffset;
      scene.add(model);
      return model;
    };

    const animateFollowMouse = (model: THREE.Object3D) => {
      const followMouse = (event: MouseEvent) => {
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1 || 0;
        const mouseY = (event.clientY / window.innerHeight) * 2 - 1 || 0;
        const targetRotationX = (mouseY / 3) * Math.PI;
        const targetRotationY = (mouseX / 3) * Math.PI;

        model.rotation.x += 0.2 * (targetRotationX - model.rotation.x);
        model.rotation.y += 0.2 * (targetRotationY - model.rotation.y);

        renderer.render(scene, camera);
      };

      document.addEventListener('mousemove', followMouse);

      return () => {
        document.removeEventListener('mousemove', followMouse);
      };
    };

    loader.load('/cup/scene.gltf', gltf => {
      const cup = addModelToScene(gltf, 0);
      cup.rotation.z -= 0.3;
      animateFollowMouse(cup);
      renderer.render(scene, camera);
    });

    return () => {};
  }, []);

  return (
    <div className="h-full w-full flex justify-center items-start">
      <canvas className="w-[400px] h-[200px]" ref={canvasRef} id="cup" />
    </div>
  );
};

export default Cup;
