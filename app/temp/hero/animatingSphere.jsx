'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { createNoise3D } from 'simplex-noise';

// Postprocessing imports
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

export default function AnimatingSphere() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Postprocessing
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(container.clientWidth, container.clientHeight),
      1.5, // strength
      0.4, // radius
      0.2  // threshold
    );
    composer.addPass(bloomPass);

    // Sphere with wireframe + emissive glow
    const geometry = new THREE.SphereGeometry(1.5, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xaa00ff,
      wireframe: true,
      metalness: 0.6,
      roughness: 0.4,
      transparent: true,
      opacity: 0.9,
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const position = geometry.attributes.position;
    const vertexCount = position.count;
    const originalPositions = new Float32Array(position.array);
    const noise = createNoise3D();

    // Lights
    const pinkLight = new THREE.PointLight(0xff00ff, 2.5, 20);
    pinkLight.position.set(4, 3, 4);
    scene.add(pinkLight);

    const blueLight = new THREE.PointLight(0x3399ff, 2.5, 20);
    blueLight.position.set(-4, 3, 4);
    scene.add(blueLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // Animation loop
    const animate = () => {
      const time = performance.now() * 0.0005;

      for (let i = 0; i < vertexCount; i++) {
        const ix = i * 3;
        const ox = originalPositions[ix];
        const oy = originalPositions[ix + 1];
        const oz = originalPositions[ix + 2];

        const nx = noise(ox + time, oy, oz);
        const ny = noise(ox, oy + time, oz);
        const nz = noise(ox, oy, oz + time);

        position.array[ix] = ox + nx * 0.15;
        position.array[ix + 1] = oy + ny * 0.15;
        position.array[ix + 2] = oz + nz * 0.15;
      }

      position.needsUpdate = true;

      sphere.rotation.y += 0.002;
      composer.render();
      requestAnimationFrame(animate);
    };

    animate();

    // GSAP intro rotation
    gsap.from(sphere.rotation, { y: Math.PI * 2, duration: 2, ease: 'power2.out' });

    // Cleanup
    return () => {
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden">
      <div ref={containerRef} className="absolute top-0 left-0 w-full h-full" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-5xl font-bold">DIGITAL MARKETING</h1>
        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:scale-105 transition-all">
          GET STARTED
        </button>
      </div>
    </section>
  );
} 