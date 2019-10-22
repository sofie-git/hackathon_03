import "./css/style.css";

{
  const init = () => {
    console.log(`START`);
    const canvas = document.querySelector("#c");
    const renderer = new THREE.WebGLRenderer({ canvas });
    const fov = 75;
    const aspect = 2; // the canvas default
    const near = 0.1;
    const far = 5;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2;
    const scene = new THREE.Scene();
    //
    // earth
    const radius = 0.5;
    const geometry = new THREE.DodecahedronBufferGeometry(radius);
    const earths = [makeInstance(geometry, 0x935d2b, 0)];
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

    {
      const color = 0xffffff;
      const intensity = 1;
      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(-1, 2, 4);
      scene.add(light);
    }
    //
    function makeInstance(geometry, color, x) {
      const material = new THREE.MeshPhongMaterial({ color });

      const shape = new THREE.Mesh(geometry, material);
      scene.add(shape);

      shape.position.x = x;

      return shape;
    }
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
    //
  };
  init();
}
