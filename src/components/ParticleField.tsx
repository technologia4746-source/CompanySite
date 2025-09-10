import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FloatingTech } from "@/components/FloatingTech";

interface ParticleFieldProps {
  className?: string;
  particleCount?: number;
  color?: number;
}

export const ParticleField = ({ 
  className = '', 
  particleCount = 200,
  color = 0x3b82f6 
}: ParticleFieldProps) => {
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

    camera.position.z = 50;

    // Create particle system
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      // Position
      positions[i] = (Math.random() - 0.5) * 200;     // x
      positions[i + 1] = (Math.random() - 0.5) * 200; // y
      positions[i + 2] = (Math.random() - 0.5) * 200; // z
      
      // Velocity
      velocities[i] = (Math.random() - 0.5) * 0.02;     // vx
      velocities[i + 1] = (Math.random() - 0.5) * 0.02; // vy
      velocities[i + 2] = (Math.random() - 0.5) * 0.02; // vz
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Create custom shader material for glowing particles
    const particlesMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0.0 },
        color: { value: new THREE.Color(color) }
      },
      vertexShader: `
        attribute float scale;
        uniform float time;
        
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = 3.0 * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 color;
        
        void main() {
          float distanceToCenter = length(gl_PointCoord - vec2(0.5));
          float alpha = 1.0 - smoothstep(0.0, 0.5, distanceToCenter);
          
          // Add pulsing effect
          float pulse = sin(time * 2.0) * 0.3 + 0.7;
          alpha *= pulse;
          
          gl_FragColor = vec4(color, alpha * 0.8);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Create connecting lines between nearby particles
    const linesGeometry = new THREE.BufferGeometry();
    const linesMaterial = new THREE.LineBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.1
    });

    const updateConnections = () => {
      const positionsAttr = particlesGeometry.getAttribute('position');
      const linePositions: number[] = [];

      for (let i = 0; i < particleCount; i++) {
        const x1 = positionsAttr.getX(i);
        const y1 = positionsAttr.getY(i);
        const z1 = positionsAttr.getZ(i);

        for (let j = i + 1; j < particleCount; j++) {
          const x2 = positionsAttr.getX(j);
          const y2 = positionsAttr.getY(j);
          const z2 = positionsAttr.getZ(j);

          const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2);

          if (distance < 15) {
            linePositions.push(x1, y1, z1, x2, y2, z2);
          }
        }
      }

      linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    };

    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(linesMesh);

    // Animation loop
    let time = 0;
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      time += 0.01;

      // Update particle material time uniform
      particlesMaterial.uniforms.time.value = time;

      // Update particle positions
      const positionsAttr = particlesGeometry.getAttribute('position');
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Get current position
        let x = positionsAttr.getX(i);
        let y = positionsAttr.getY(i);
        let z = positionsAttr.getZ(i);
        
        // Add some movement
        x += velocities[i3] + Math.sin(time + i * 0.1) * 0.005;
        y += velocities[i3 + 1] + Math.cos(time + i * 0.1) * 0.005;
        z += velocities[i3 + 2];
        
        // Wrap around edges
        if (x > 100) x = -100;
        if (x < -100) x = 100;
        if (y > 100) y = -100;
        if (y < -100) y = 100;
        if (z > 100) z = -100;
        if (z < -100) z = 100;
        
        positionsAttr.setXYZ(i, x, y, z);
      }
      
      positionsAttr.needsUpdate = true;
      
      // Update connections every few frames for performance
      if (Math.floor(time * 60) % 10 === 0) {
        updateConnections();
      }

      // Rotate the entire particle system slowly
      particlesMesh.rotation.y += 0.0005;
      particlesMesh.rotation.x += 0.0002;

      renderer.render(scene, camera);
    };

    // Initial connections
    updateConnections();
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
  }, [particleCount, color]);

  return (
    <>
      <FloatingTech />
      <div 
        ref={containerRef} 
        className={`fixed inset-0 pointer-events-none ${className}`}
        style={{ zIndex: -1 }}
      />
    </>
  );
};