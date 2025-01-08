import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';



const Cube = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    camera.position.set(0, 5, 10);
    controls.update();

    const geometry1 = new THREE.BoxGeometry();
    const material1 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry1, material1);
    scene.add(cube);

    renderer.setSize(window.innerWidth, window.innerHeight);
    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

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

  useEffect(() => {

  }, []);


  return (
    <div ref={containerRef}>
    </div>
  )
};

export default Cube;
