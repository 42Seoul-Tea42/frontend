import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Cup: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const canvas = canvasRef.current;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas as HTMLCanvasElement,
      antialias: true
    });

    const camera = new THREE.PerspectiveCamera(35, canvas?.width! / canvas?.height!);
    camera.position.set(0, 0, 5);

    scene.background = new THREE.Color('white');
    const light = new THREE.DirectionalLight('white', 4);

    light.position.set(3, 5, 8);
    scene.add(light);

    const loader = new GLTFLoader();
    loader.load('/cup/scene.gltf', gltf => {
      const cup = gltf.scene;

      // 컵의 초기 회전값 조정
      cup.rotation.z = -0.3;
      cup.rotation.y = -0.3;

      scene.add(cup);
      renderer.render(scene, camera);

      const animate = (event: MouseEvent) => {
        const update = () => {
          const mouseX = (event?.clientX / window.innerWidth) * 2 - 1 || 0;
          const mouseY = (event?.clientY / window.innerHeight) * 2 - 1 || 0;
          const targetRotationX = (mouseY / 3) * Math.PI;
          const targetRotationY = (mouseX / 3) * Math.PI;

          // 부드러운 회전을 위해 현재 회전값을 부드럽게 업데이트
          cup.rotation.x += 0.2 * (targetRotationX - cup.rotation.x);
          cup.rotation.y += 0.2 * (targetRotationY - cup.rotation.y);

          renderer.render(scene, camera);
        };

        requestAnimationFrame(update);
      };

      document.addEventListener('mousemove', animate);

      return () => {
        document.removeEventListener('mousemove', animate);
      };
    });
  }, []);

  return (
    <div className="h-full w-full flex justify-center items-start">
      <canvas className="w-[400px] h-[200px]" ref={canvasRef} id="cup" />
    </div>
  );
};

export default Cup;
