import { useEffect, useRef } from "react";
import * as THREE from 'three';

const BouncingShapes = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const setupScene = () => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    return scene;
  };

  const setupCamera = (height: number, width: number) => {
    const camera = new THREE.OrthographicCamera(-width / 2, width / 2, height / 2, -height / 2, 0.1, 2000);
    // Top down view (isometric)
    camera.position.set(500, 500, 500);

    // 45 degree angle
    camera.rotation.x = -Math.PI / 4;
    camera.rotation.y = Math.PI / 4;

    camera.lookAt(new THREE.Vector3(0, 0, 0));

    return camera
  }

  const setupRenderer = (height: number, width: number) => {
    const renderer = new THREE.WebGLRenderer();
    renderer.shadowMap.enabled = true;
    renderer.setSize(width, height);

    return renderer;
  }

  const createFloor = () => {
    const floorGeometry = new THREE.PlaneGeometry(500, 500);
    const floorMaterial = new THREE.LineBasicMaterial({ color: "gray", opacity: 0.5, });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);

    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -500;
    floor.receiveShadow = true;

    return floor;
  }

  const createWalls = () => {
    const wallGeometry = new THREE.PlaneGeometry(50, 50);
    const wallMaterial = new THREE.LineBasicMaterial({ opacity: 0.5 });
    const leftWall = new THREE.Mesh(wallGeometry, wallMaterial);
    const rightWall = new THREE.Mesh(wallGeometry, wallMaterial);

    leftWall.position.set(-25, 25, 0);
    rightWall.position.set(25, 25, 0);
    leftWall.rotation.y = Math.PI / 2;
    rightWall.rotation.y = Math.PI / 2;

    leftWall.receiveShadow = true;
    rightWall.receiveShadow = true;

    return [leftWall, rightWall];
  }

  type polygonShapes = 'cube' | 'sphere' | 'cone' | 'cylinder';
  const createPolygon = (shape: polygonShapes, color: string) => {
    let geometry: THREE.BufferGeometry;

    switch (shape) {
      case 'cube':
        geometry = new THREE.BoxGeometry(50, 50, 50);
        break;
      case 'cone':
        geometry = new THREE.ConeGeometry();
        break;
      case 'cylinder':
        geometry = new THREE.CylinderGeometry();
        break;
      default:
        console.error('Unsupported shape type:', shape);
        geometry = new THREE.SphereGeometry(25);
        break;
    }
    // Create the edges geometry to avoid internal lines (cross)
    const edges = new THREE.EdgesGeometry(geometry);

    // Create a material for wireframe
    const material = new THREE.LineBasicMaterial({
      color: color,
      linewidth: 2,
    });

    const polygon = new THREE.LineSegments(edges, material);
    polygon.castShadow = true;

    return polygon;
  }

  const createLightSource = () => {
    const lightSource = new THREE.DirectionalLight(0xffffff, 1);
    lightSource.position.set(10, 10, 10);  // Adjust light position
    lightSource.castShadow = true;  // Enable shadow casting

    // Set shadow quality
    lightSource.shadow.mapSize.width = 1024;
    lightSource.shadow.mapSize.height = 1024;
    lightSource.shadow.camera.near = 0.1;
    lightSource.shadow.camera.far = 200;
    lightSource.shadow.camera.left = -200;
    lightSource.shadow.camera.right = 200;
    lightSource.shadow.camera.top = 200;
    lightSource.shadow.camera.bottom = -200;

    return lightSource;
  }

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const { clientHeight: height, clientWidth: width } = container;

    const scene = setupScene();
    const camera = setupCamera(height, width);
    const renderer = setupRenderer(height, width);

    const sphere = createPolygon('sphere', 'blue');
    const floor = createFloor();
    const walls = createWalls();
    const lightSource = createLightSource();

    const polygons = [sphere];
    scene.add(...polygons, floor, ...walls, lightSource);

    polygons.forEach(p => {
      p.position.set(10, 50, 0);
    });

    const animate = () => {
      requestAnimationFrame(animate);

      polygons.forEach(p => {
        if (p.position.y > -height / 2) {
          p.position.y -= 5;
        }
      });

      // Render the scene with the camera
      renderer.render(scene, camera);
    };
    animate();

    container.appendChild(renderer.domElement);

    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      className="h-full w-full"
      ref={containerRef}
    />
  )
};

export default BouncingShapes;
