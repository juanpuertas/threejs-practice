import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const Scene = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const currentMount = mountRef.current;
        if (!currentMount) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(25, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        currentMount.appendChild(renderer.domElement);
        // Controls
        const controls = new OrbitControls(camera, renderer.domElement)
        const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
        cube.position.set(0,0,1)
        scene.add(cube);

        camera.position.z = 5; // Ajusta la posición de la cámara según sea necesario

        // Añadir una luz
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        
        const animate = () => {
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        animate();

        // Limpieza
        return () => {
            renderer.dispose();
            currentMount.removeChild(renderer.domElement);
        };
    }, []);
    return (
        <div className="Contenedor3D" ref={mountRef} style={{width:'100%', height:'100vh'}}>
            
        </div>
    )
}

export default Scene