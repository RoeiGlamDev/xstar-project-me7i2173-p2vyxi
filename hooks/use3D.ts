import { useEffect } from 'react';
import * as THREE from 'three';

/
 * Custom hook to manage 3D interactions for luxury LRP cosmetics
 * This hook leverages three.js to create an immersive experience
 * fitting the luxury cosmetics brand aesthetic.
 * 
 * @returns {Object} - Contains methods to initialize and animate 3D scene.
 */
export const use3D = () => {
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let animationFrameId: number;

    /
     * Initializes the 3D scene with luxury LRP cosmetics branding.
     */
    const initScene = () => {
        // Creating a new scene
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff); // White background

        // Setting up camera
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Setting up renderer
        renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Adding ambient light for a luxurious feel
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        // Adding a directional light
        const directionalLight = new THREE.DirectionalLight(0xffa500, 1); // Orange light
        directionalLight.position.set(5, 5, 5).normalize();
        scene.add(directionalLight);

        // Adding 3D objects specific to luxury LRP cosmetics
        addCosmeticsProducts();
    };

    /
     * Adds 3D cosmetic products to the scene.
     */
    const addCosmeticsProducts = () => {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshPhongMaterial({ color: 0xffa500 }); // Orange color for luxury feel
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
    };

    /
     * Starts the animation loop for the 3D scene.
     */
    const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };

    /
     * Resizes the 3D scene on window resize.
     */
    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };

    useEffect(() => {
        initScene();
        animate();

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
        };
    }, []);

    return { scene, camera, renderer };
};