import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.inner);

document.body.appendChild(renderer.domElement);

