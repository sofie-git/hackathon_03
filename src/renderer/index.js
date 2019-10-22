import "./css/style.css";

{
  //setup van uw canvas en camera
  const canvas = document.querySelector("#c");
  const renderer = new THREE.WebGLRenderer({ canvas });
  const fov = 75;
  const aspect = 2; // canvas default
  const near = 0.1;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2;
  const scene = new THREE.Scene();
  // texture loader
  const loader = new THREE.TextureLoader();
  //
  {
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
  }
  //
  let x, y;
  let earths = [];
  //
  const drawOnCanvas = () => {
    // element aarde
    const earthMaterial = new THREE.MeshBasicMaterial({
      // photo inladen for texture usache
      map: loader.load("./assets/img/bak.jpg")
    });
    const radius = 0.5;
    const geometry = new THREE.DodecahedronBufferGeometry(radius);
    earths = [makeInstance(geometry, earthMaterial, 0, 0)];
    //
    function makeInstance(geometry, material, x, y) {
      const shape = new THREE.Mesh(geometry, material);
      scene.add(shape);

      shape.position.x = x;
      shape.position.y = y;
      return shape;
    }

    //updaten van de x en y van earth hetzelfde is als de muis x en y
    canvas.addEventListener("mousemove", e => {
      // x = e.clientX;
      // y = e.clientY;
      // earths.forEach(earth => {
      //   earth.position.x = x;
      //   earth.position.y = y;
      // });
      // earths = [makeInstance(geometry, earthMaterial, e.clientX, e.clientY)];
      // makeInstance(geometry, earthMaterial, e.clientX, e.clientY);
      console.log(e.clientX, e.clientY);
    });
    //
    function render(time) {
      time *= 0.001; // convert time to seconds

      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }

      earths.forEach((earth, ndx) => {
        const speed = 1 + ndx * 0.1;
        const rot = time * speed;
        earth.rotation.x = rot;
        earth.rotation.y = rot;
      });

      renderer.render(scene, camera);

      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
    //
    function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement;
      const pixelRatio = window.devicePixelRatio;
      const width = (canvas.clientWidth * pixelRatio) | 0;
      const height = (canvas.clientHeight * pixelRatio) | 0;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }
  };
  //
  const init = () => {
    console.log(`START`);
    drawOnCanvas();
    console.log();
  };
  //
  init();
}
