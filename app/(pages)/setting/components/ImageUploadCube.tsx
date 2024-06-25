'use client';

import { handleImageChange } from '@/(pages)/forms/ImageUploadForm';
import { addAccountPhotos, removeAccountPhotos } from '@/redux/slices/account/accountSlice';
import { RootState } from '@/redux/store';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const cubeIndexPictureMapper = (index: number) => {
  switch (index) {
    case 0:
      return 1;
    case 1:
      return 3;
    case 2:
      return 4;
    case 3:
      return 5;
    case 4:
      return 0;
    case 5:
      return 2;
    default:
      return 0;
  }
};

function ImageUploadCube() {
  const dispatch = useDispatch();
  const pictures = useSelector((state: RootState) => state.accountSlice.user.pictures);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const camera = useRef<THREE.PerspectiveCamera | null>(null);
  const renderer = useRef<THREE.WebGLRenderer | null>(null);
  const controls = useRef<OrbitControls | null>(null);
  const scene = useRef<THREE.Scene | null>(null);
  const cube = useRef<THREE.Mesh | null>(null);
  const raycaster = useRef<THREE.Raycaster | null>(null);
  const mouse = useRef(new THREE.Vector2(0, 0));
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const geometry = new THREE.BoxGeometry(1, 1, 1);

  // 큐브 생성 함수
  const createCube = (geometry: any) => {
    const loader = new THREE.TextureLoader();
    const defaultTexture = loader.load('/cloud.png'); // 기본 이미지를 로드
    const materials: THREE.MeshBasicMaterial[] = [];

    for (let i = 0; i < 6; i++) {
      const pictureIndex = cubeIndexPictureMapper(i);
      const texture = pictures[pictureIndex];
      const material = texture
        ? new THREE.MeshBasicMaterial({ map: loader.load(texture) }) // 유저 이미지
        : new THREE.MeshBasicMaterial({ map: defaultTexture }); // 기본 이미지
      materials.push(material);
    }

    return new THREE.Mesh(geometry, materials);
  };

  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);
    if (controls.current) controls.current.update();
    if (renderer.current && scene.current && camera.current) {
      renderer.current.render(scene.current, camera.current);
    }
  };

  const onClick = (event: MouseEvent) => {
    if (!canvasRef.current || !raycaster.current || !camera.current || !cube.current) {
      return;
    }

    // Calculate mouse position in normalized device coordinates
    const rect = canvasRef.current.getBoundingClientRect();
    mouse.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    // Update the raycaster with the camera and mouse position
    raycaster.current.setFromCamera(mouse.current, camera.current);

    // Calculate objects intersecting the ray
    const intersects = raycaster.current.intersectObject(cube.current);

    if (intersects.length > 0) {
      const intersect = intersects[0];
      const faceIndex = Math.floor(intersect.faceIndex! / 2); // Each face is made of two triangles
      const pictureIndex = cubeIndexPictureMapper(faceIndex);
      if (pictures[pictureIndex]) {
        dispatch(removeAccountPhotos(pictureIndex));
      } else {
        if (fileInputRef.current) {
          fileInputRef.current.click();
        }
      }
    }
  };

  useLayoutEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    // 씬 초기화
    scene.current = new THREE.Scene();

    scene.current.background = new THREE.Color('#F3FAF7'); // 색상, 포그 시작 거리, 포그 끝 거리

    // 카메라 초기화
    camera.current = new THREE.PerspectiveCamera(
      10,
      canvasRef.current.clientWidth / canvasRef.current.clientHeight,
      0.1,
      2000
    );
    camera.current.position.set(0, 0, 10); // 카메라를 z축에서 떨어진 곳에 배치

    // 렌더러 초기화
    renderer.current = new THREE.WebGLRenderer({ canvas: canvasRef.current! });
    renderer.current.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);

    // 컨트롤 초기화
    controls.current = new OrbitControls(camera.current, renderer.current.domElement);

    // 레이캐스터 초기화
    raycaster.current = new THREE.Raycaster();

    // 텍스처 로드 및 큐브 생성
    cube.current = createCube(geometry);
    scene.current.add(cube.current);

    return () => {
      if (scene.current && cube.current) {
        scene.current.remove(cube.current);
        cube.current.geometry.dispose();
        cube.current.material.forEach((material: THREE.Material) => material.dispose());
      }
    };
  }, []);

  useLayoutEffect(() => {
    const mesh = createCube(geometry);
    scene.current?.add(mesh);

    if (canvasRef.current) {
      canvasRef.current.addEventListener('click', onClick);
    }

    animate();

    return () => {
      if (canvasRef.current) {
        canvasRef.current.removeEventListener('click', onClick);
      }
    };
  }, [pictures]);

  return (
    <div>
      <canvas ref={canvasRef} className="w-full h-[400px]" />
      <input
        ref={fileInputRef}
        className="hidden"
        type="file"
        multiple={true}
        onChange={e => handleImageChange(e, photo => dispatch(addAccountPhotos(photo)))}
        accept="image/jpeg, image/jpg, image/png"
      />
    </div>
  );
}

export default ImageUploadCube;
