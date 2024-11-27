import React, { useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas, useThree } from '@react-three/fiber';

const Model = () => {
  const { scene } = useThree();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      '/models/butterfly.glb',
      (gltf) => {
        scene.add(gltf.scene);
      },
      undefined,
      (error) => console.error('Error loading model:', error)
    );
  }, [scene]);

  return null;
};

const butterfly = () => (
  <Canvas>
    <ambientLight intensity={0.5} />
    <directionalLight position={[10, 10, 10]} />
    <Model />
  </Canvas>
);

export default butterfly;
