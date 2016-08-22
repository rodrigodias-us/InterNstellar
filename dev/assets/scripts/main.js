TweenMax.staggerFromTo('.circle', 10, {
	scale: 0
}, {
	scale: 1,
	repeat: -1,
}, 2);

TweenMax.staggerFromTo('.circle', 5, {
	opacity: 0,
}, {
	opacity: 1,
	ease: Power0.easeNone,
	yoyo: true,
	repeat: -1,
}, 2);

TweenMax.to('.person', 2, {x: Math.random() * 20, y: Math.random() * 20, yoyo: true, repeat: -1 });