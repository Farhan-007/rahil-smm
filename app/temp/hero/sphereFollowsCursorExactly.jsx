'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { createNoise3D } from 'simplex-noise';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

export default function Hero() {
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
      1.5,
      0.4,
      0.2
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

    // Raycaster and mouse tracking
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Invisible plane for raycasting reference
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -2);
    const intersectionPoint = new THREE.Vector3();

    const onMouseMove = (event) => {
      mouse.x = (event.clientX / container.clientWidth) * 2 - 1;
      mouse.y = -(event.clientY / container.clientHeight) * 2 + 1;
    };

    container.addEventListener('mousemove', onMouseMove);

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

      // Raycast to 3D plane
      raycaster.setFromCamera(mouse, camera);
      raycaster.ray.intersectPlane(plane, intersectionPoint);

      // Smoothly move sphere toward pointer
      sphere.position.lerp(intersectionPoint, 0.1);

      composer.render();
      requestAnimationFrame(animate);
    };

    animate();

    // GSAP intro
    gsap.from(sphere.scale, { x: 0, y: 0, z: 0, duration: 1.5, ease: 'power2.out' });

    // Cleanup
    return () => {
      container.removeChild(renderer.domElement);
      container.removeEventListener('mousemove', onMouseMove);
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden">
      <div ref={containerRef} className="absolute top-0 left-0 w-full h-full" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center pointer-events-none">
         <h1 className="text-5xl font-bold">Next-Level Marketing</h1>
        <p className="mt-4 text-xl max-w-lg">Cutting-edge strategies. Stunning design. Maximum impact.</p>
        <button className="mt-6 px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-800 transition">Let’s Talk</button>
      
      </div>
    </section>
  );
}
