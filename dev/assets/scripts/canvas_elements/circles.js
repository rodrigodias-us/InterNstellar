var circleSize = 0;
var circleOpacity = 0;
var circle1 = make_circle(circleSize, 0x008EF4, circleOpacity);
var circle2 = make_circle(circleSize + 0.4, 0x008EF4, circleOpacity - 0.1);
var circle3 = make_circle(circleSize + 0.8, 0x008EF4, circleOpacity - 0.2);
scene.add( circle1 );
scene.add( circle2 );
scene.add( circle3 );

function make_circle(radius, color, circleOpacity){
	var obj_resolution = 360;
	var obj = new THREE.Line( new THREE.Geometry(), new THREE.LineBasicMaterial({color:color, transparent: true, opacity: circleOpacity}));

	for (var i = 0; i <=  obj_resolution; i++) {
		var angle=Math.PI/180*i;
		var x = (radius) * Math.cos(angle);
		var y = (radius) * Math.sin(angle);
		var z=0;
		obj.geometry.vertices.push(new THREE.Vector3(x, y, z));
	}
	return obj;
}

function updateCircles(){
	if(circleSize > 2.5){
		circleSize = 0;
		circleOpacity = 0;
	}
	scene.remove( circle1 );
	scene.remove( circle2 );
	scene.remove( circle3 );
	if(circleSize < 0.8){ 
		circleOpacity += 0.005;
	} else {
		circleOpacity -= 0.002;
	}
	if(circleSize < 1){ 
		circleSize += 0.01;
	} else {
		circleSize += 0.008;
	}
	circle1 = make_circle(circleSize, 0x008EF4, circleOpacity);
	circle2 = make_circle(circleSize + 0.4, 0x008EF4, circleOpacity - 0.1);
	circle3 = make_circle(circleSize + 0.8, 0x008EF4, circleOpacity - 0.2);

	scene.add( circle1 );
	scene.add( circle2 );
	scene.add( circle3 );
}