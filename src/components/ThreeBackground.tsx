import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeBackgroundProps {
  className?: string;
}

export const ThreeBackground = ({ className = '' }: ThreeBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Camera position
    camera.position.z = 30;

    // Create floating tech objects
    const objects: THREE.Object3D[] = [];

    // Create geometric tech shapes
    const createTechObjects = () => {
      // Dodecahedron (AI Brain representation)
      const dodecahedronGeometry = new THREE.DodecahedronGeometry(1.5);
      const dodecahedronMaterial = new THREE.MeshBasicMaterial({
        color: 0x3b82f6,
        wireframe: true,
        transparent: true,
        opacity: 0.6
      });
      const dodecahedron = new THREE.Mesh(dodecahedronGeometry, dodecahedronMaterial);
      dodecahedron.position.set(-15, 10, -10);
      scene.add(dodecahedron);
      objects.push(dodecahedron);

      // Octahedron (Data representation)
      const octahedronGeometry = new THREE.OctahedronGeometry(2);
      const octahedronMaterial = new THREE.MeshBasicMaterial({
        color: 0x10b981,
        wireframe: true,
        transparent: true,
        opacity: 0.4
      });
      const octahedron = new THREE.Mesh(octahedronGeometry, octahedronMaterial);
      octahedron.position.set(15, -8, -15);
      scene.add(octahedron);
      objects.push(octahedron);

      // Icosahedron (Network nodes)
      const icosahedronGeometry = new THREE.IcosahedronGeometry(1.8);
      const icosahedronMaterial = new THREE.MeshBasicMaterial({
        color: 0x8b5cf6,
        wireframe: true,
        transparent: true,
        opacity: 0.5
      });
      const icosahedron = new THREE.Mesh(icosahedronGeometry, icosahedronMaterial);
      icosahedron.position.set(0, 15, -20);
      scene.add(icosahedron);
      objects.push(icosahedron);

      // Torus (Connectivity rings)
      const torusGeometry = new THREE.TorusGeometry(2, 0.5, 8, 16);
      const torusMaterial = new THREE.MeshBasicMaterial({
        color: 0xf59e0b,
        wireframe: true,
        transparent: true,
        opacity: 0.3
      });
      const torus = new THREE.Mesh(torusGeometry, torusMaterial);
      torus.position.set(-8, -12, -8);
      scene.add(torus);
      objects.push(torus);

      // Multiple smaller cubes (Data blocks)
      for (let i = 0; i < 12; i++) {
        const cubeGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
        const cubeMaterial = new THREE.MeshBasicMaterial({
          color: Math.random() > 0.5 ? 0x3b82f6 : 0x10b981,
          wireframe: true,
          transparent: true,
          opacity: 0.2
        });
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.set(
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 30
        );
        scene.add(cube);
        objects.push(cube);
      }

      // Floating particles
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 100;
      const posArray = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 100;
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      
      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.01,
        color: 0x3b82f6,
        transparent: true,
        opacity: 0.8
      });

      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);
      objects.push(particlesMesh);
    };

    createTechObjects();

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      // Rotate and animate objects
      objects.forEach((object, index) => {
        if (object instanceof THREE.Mesh) {
          object.rotation.x += 0.005 * (index % 2 === 0 ? 1 : -1);
          object.rotation.y += 0.008 * (index % 3 === 0 ? 1 : -1);
          object.rotation.z += 0.003 * (index % 4 === 0 ? 1 : -1);
          
          // Floating motion
          object.position.y += Math.sin(Date.now() * 0.001 + index) * 0.02;
          object.position.x += Math.cos(Date.now() * 0.0008 + index) * 0.01;
        }
        
        if (object instanceof THREE.Points) {
          object.rotation.x += 0.0005;
          object.rotation.y += 0.001;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!rendererRef.current) return;
      
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{ zIndex: -1 }}
    />
  );
};