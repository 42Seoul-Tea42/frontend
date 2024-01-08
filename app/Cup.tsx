// components/Cup.tsx

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Cup: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const canvas = canvasRef.current;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas as HTMLCanvasElement,
      antialias: true,
    });

    const camera = new THREE.PerspectiveCamera(
      35,
      canvas?.width! / canvas?.height!
    );
    camera.position.set(0, 0, 5);

    scene.background = new THREE.Color("#e1effe");

    const light = new THREE.DirectionalLight("#e1effe", 4);
    light.position.set(3, 5, 8);
    scene.add(light);

    const loader = new GLTFLoader();
    loader.load("/cup/scene.gltf", (gltf) => {
      const cup = gltf.scene;

      // 컵의 초기 회전값 (모델 초기값이 치우쳐져 있음)
      cup.rotation.z = -0.3;
      cup.rotation.y = -0.3;

      scene.add(cup);
      renderer.render(scene, camera);

      const animate = (event: MouseEvent) => {
        const update = (time: number) => {
          requestAnimationFrame(update);
        };
        requestAnimationFrame(update);

        // 마우스의 현재 위치를 이용한 카메라의 회전
        const mouseX = (event?.clientX / window.innerWidth) * 2 - 1 || 0;
        const mouseY = (event?.clientY / window.innerHeight) * 2 - 1 || 0;
        const targetRotationX = mouseY * Math.PI;
        const targetRotationY = mouseX * Math.PI;

        // 부드러운 회전을 위해 현재 회전값을 부드럽게 업데이트
        cup.rotation.x += 0.015 * (targetRotationX - cup.rotation.x);
        cup.rotation.y += 0.015 * (targetRotationY - cup.rotation.y);

        renderer.render(scene, camera);
      };

      // 마우스 이벤트 리스너 등록
      document.addEventListener("mousemove", animate);
    });
  }, []);

  return <canvas style={{ height: "150px" }} ref={canvasRef} id="cup" />;
};

export default Cup;
