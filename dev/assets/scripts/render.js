var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.domElement.id = "header-canvas";

$("body").prepend( renderer.domElement );

var render = function () {
	requestAnimationFrame( render );
	updateCircles();
	renderer.render(scene, camera);
};

render();