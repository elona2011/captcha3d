const canvas = document.querySelector('#c');
let down = false
let x = 0,
    xStart = 0
canvas.addEventListener('mousedown', e => {
    down = true
    xStart = e.x
})
canvas.addEventListener('mouseup', e => {
    down = false
})
canvas.addEventListener('mousemove', e => {
    if (down) {
        x = (e.x - xStart) / 10
        console.log(x)
    }
})
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(100, 2, 1, 10000);
camera.position.set(10, 10, 20)
camera.lookAt(0, 0, 0)

var renderer = new THREE.WebGLRenderer({
    canvas
});
renderer.setSize(300, 200);
document.body.appendChild(renderer.domElement);

// let controls = new THREE.OrbitControls(camera, renderer.domElement)
// controls.minDistance = 500
// controls.maxDistance = 1500
// controls.addEventListener('change', renderer)

let materialArray = []
let texture_ft = new THREE.TextureLoader().load('a.jpg')
materialArray.push(new THREE.MeshBasicMaterial({
    map: texture_ft
}))
materialArray.push(new THREE.MeshBasicMaterial({
    map: texture_ft
}))
materialArray.push(new THREE.MeshBasicMaterial({
    map: texture_ft
}))
materialArray.push(new THREE.MeshBasicMaterial({
    map: texture_ft
}))
materialArray.push(new THREE.MeshBasicMaterial({
    map: texture_ft
}))
materialArray.push(new THREE.MeshBasicMaterial({
    map: texture_ft
}))

for (let i = 0; i < 6; i++) {
    materialArray[i].side = THREE.BackSide
}
// var geometry = new THREE.BoxGeometry(10000, 10000, 10000);
// var cube = new THREE.Mesh(geometry, materialArray);
// scene.add(cube);

var geometry2 = new THREE.CircleBufferGeometry(10, 10, 1);
var material2 = new THREE.MeshBasicMaterial({
    color: 0x00ff00
});
var cube2 = new THREE.Mesh(geometry2, material2);
cube2.position.set(2, 0, 0)
scene.add(cube2);

var geometry3 = new THREE.PlaneBufferGeometry(50, 50, 1);
var material3 = new THREE.MeshBasicMaterial({
    color: 0x043a00
});
var cube3 = new THREE.Mesh(geometry3, material3);
cube3.position.set(0, 0, -5)
scene.add(cube3);

// {
//     const planeSize = 40;

//     const loader = new THREE.TextureLoader();
//     const texture = loader.load('https://threejsfundamentals.org/threejs/resources/images/checker.png');
//     texture.wrapS = THREE.RepeatWrapping;
//     texture.wrapT = THREE.RepeatWrapping;
//     texture.magFilter = THREE.NearestFilter;
//     const repeats = planeSize / 2;
//     texture.repeat.set(repeats, repeats);

//     const planeGeo = new THREE.PlaneBufferGeometry(planeSize, planeSize);
//     const planeMat = new THREE.MeshPhongMaterial({
//         map: texture,
//         side: THREE.DoubleSide,
//     });
//     const mesh = new THREE.Mesh(planeGeo, planeMat);
//     // mesh.rotation.x = Math.PI * -.5;
//     mesh.rotation.y = -Math.PI /6;
//     scene.add(mesh);
// }

// {
//     const color = 0xFFFFFF;
//     const intensity = 1;
//     const light = new THREE.DirectionalLight(color, intensity);
//     light.position.set(0, 10, 0);
//     light.target.position.set(-5, 0, 0);
//     scene.add(light);
//     scene.add(light.target);
// }

function animate() {
    cube2.position.x = x;
    // cube2.rotation.y += 0.01;
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();