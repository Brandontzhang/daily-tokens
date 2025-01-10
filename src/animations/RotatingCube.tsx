import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

const RotatingCube = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const height = container.clientHeight;
    const width = container.clientWidth;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    camera.position.set(0, 5, 10);
    controls.update();

    // Create cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate cube for animation
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      // Render the scene with the camera
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on unmount
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className='h-full w-full bg-yellow-50' ref={containerRef}>
      hello?
    </div>
  )
};

export default RotatingCube;
