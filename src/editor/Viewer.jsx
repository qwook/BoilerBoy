
export default React.createClass({

	/* Create our Model */
	getInitialState: function() {
		return {};
	},

	/* Render our View */
	render: function() {
		return (
			<canvas ref="root">
			</canvas>
		)
	},

	componentDidMount: function() {
		var scene = new THREE.Scene();
		// var camera = new THREE.PerspectiveCamera( 75, 640 / 480, 0.1, 1000 );
		var camera = new THREE.PerspectiveCamera( 50, ($(window).width() * 0.7) / ($(window).height() - 31), 1, 100000 );
		camera.position.set( 500, 250, 500 );
		camera.lookAt( new THREE.Vector3() );

		var renderer = new THREE.WebGLRenderer({canvas: this.refs.root});
		renderer.setSize($(window).width() * 0.7, $(window).height() - 31);

		this.refs.root.style.position = "absolute";
		this.refs.root.style.top = "31px";

		$(window).resize(() => {
			camera.aspect = ($(window).width() * 0.7) / ($(window).height() - 31)
			camera.updateProjectionMatrix()
			renderer.setSize($(window).width() * 0.7, $(window).height() - 31);
		});


		var grid = new THREE.GridHelper( 500, 25 );
		grid.ignore = true;

		var controls = new THREE.EditorControls( camera, this.refs.root );
		controls.addEventListener( 'change', function () {
			// console.log(camera.position);
			// console.log(camera.rotation);
		});
		controls.center.set( 0, 0, 0 );

		var renderFn;
		renderFn = () => {
			requestAnimationFrame(renderFn);
			renderer.render(scene, camera);
		};
		renderFn();

		scene.add(grid);
	}

});

