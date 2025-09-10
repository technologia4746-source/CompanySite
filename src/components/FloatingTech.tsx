import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface FloatingTechProps {
  className?: string;
}

export const FloatingTech = ({ className = '' }: FloatingTechProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Camera position for section view
    camera.position.set(0, 0, 20);

    // Create section-specific tech objects
    const objects: THREE.Object3D[] = [];

    // DNA Helix-like structure (AI/ML representation)
    const createDNAHelix = () => {
      const helixGroup = new THREE.Group();
      
      for (let i = 0; i < 50; i++) {
        const angle = (i / 50) * Math.PI * 4;
        const y = (i - 25) * 0.4;
        
        // Create spheres for DNA structure
        const sphereGeometry = new THREE.SphereGeometry(0.1, 8, 6);
        const sphereMaterial = new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0x3b82f6 : 0x10b981,
          transparent: true,
          opacity: 0.7
        });
        
        const sphere1 = new THREE.Mesh(sphereGeometry, sphereMaterial);
        const sphere2 = new THREE.Mesh(sphereGeometry, sphereMaterial);
        
        sphere1.position.set(Math.cos(angle) * 3, y, Math.sin(angle) * 3);
        sphere2.position.set(Math.cos(angle + Math.PI) * 3, y, Math.sin(angle + Math.PI) * 3);
        
        helixGroup.add(sphere1);
        helixGroup.add(sphere2);
        
        // Connect with lines
        if (i % 5 === 0) {
          const lineGeometry = new THREE.BufferGeometry().setFromPoints([
            sphere1.position,
            sphere2.position
          ]);
          const lineMaterial = new THREE.LineBasicMaterial({
            color: 0x8b5cf6,
            transparent: true,
            opacity: 0.3
          });
          const line = new THREE.Line(lineGeometry, lineMaterial);
          helixGroup.add(line);
        }
      }
      
      helixGroup.position.set(15, 0, -10);
      scene.add(helixGroup);
      objects.push(helixGroup);
    };

    // Network nodes and connections
    const createNetworkNodes = () => {
      const networkGroup = new THREE.Group();
      const nodePositions: THREE.Vector3[] = [];
      
      // Create nodes
      for (let i = 0; i < 15; i++) {
        const nodeGeometry = new THREE.SphereGeometry(0.2, 8, 6);
        const nodeMaterial = new THREE.MeshBasicMaterial({
          color: 0x3b82f6,
          transparent: true,
          opacity: 0.8
        });
        
        const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
        const position = new THREE.Vector3(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10
        );
        
        node.position.copy(position);
        nodePositions.push(position);
        networkGroup.add(node);
      }
      
      // Create connections
      for (let i = 0; i < nodePositions.length; i++) {
        for (let j = i + 1; j < nodePositions.length; j++) {
          if (nodePositions[i].distanceTo(nodePositions[j]) < 8) {
            const lineGeometry = new THREE.BufferGeometry().setFromPoints([
              nodePositions[i],
              nodePositions[j]
            ]);
            const lineMaterial = new THREE.LineBasicMaterial({
              color: 0x10b981,
              transparent: true,
              opacity: 0.2
            });
            const line = new THREE.Line(lineGeometry, lineMaterial);
            networkGroup.add(line);
          }
        }
      }
      
      networkGroup.position.set(-15, 5, -5);
      scene.add(networkGroup);
      objects.push(networkGroup);
    };

    // Floating data cubes
    const createDataCubes = () => {
      for (let i = 0; i < 20; i++) {
        const size = Math.random() * 0.5 + 0.2;
        const cubeGeometry = new THREE.BoxGeometry(size, size, size);
        const cubeMaterial = new THREE.MeshBasicMaterial({
          color: Math.random() > 0.5 ? 0xf59e0b : 0x8b5cf6,
          wireframe: true,
          transparent: true,
          opacity: 0.4
        });
        
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.set(
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 15
        );
        
        scene.add(cube);
        objects.push(cube);
      }
    };

    createDNAHelix();
    createNetworkNodes();
    createDataCubes();

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      // Animate objects
      objects.forEach((object, index) => {
        if (object instanceof THREE.Group) {
          object.rotation.y += 0.005;
          object.rotation.z += 0.002;
        } else if (object instanceof THREE.Mesh) {
          object.rotation.x += 0.01 * (index % 2 === 0 ? 1 : -1);
          object.rotation.y += 0.015 * (index % 3 === 0 ? 1 : -1);
          
          // Floating motion
          object.position.y += Math.sin(Date.now() * 0.001 + index * 0.5) * 0.03;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!rendererRef.current || !containerRef.current) return;
      
      const width = containerRef.current.offsetWidth;
      const height = containerRef.current.offsetHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
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
      className={`absolute inset-0 pointer-events-none ${className}`}
    />
  );
};