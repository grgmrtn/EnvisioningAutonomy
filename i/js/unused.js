	function makePlaneInstance(options, givenScene) {

		//texture
		var planeTexture;
	    if (options.options.texture) {
		    planeTexture = new THREE.TextureLoader().load( 'planetexture.png' );
		}

		const geometry = new THREE.PlaneGeometry( 1, 1 );
		const material = new THREE.MeshBasicMaterial( {side: THREE.DoubleSide }); //, map: planeTexture} );
		const plane = new THREE.Mesh( geometry, material );
		plane.assetType = 'plane';

		const planeColor = new THREE.Color().setHex(options.options.color.init);
			plane.material.color.setRGB(planeColor.r, planeColor.g, planeColor.b);
		
		plane.options = options.options;
		plane.scrollInit = options.scrollInit = typeof options.scrollInit === "undefined" || !options.scrollInit ? 0 : options.scrollInit;
			plane.scrollFinal = options.scrollFinal = typeof options.scrollFinal === "undefined" || !options.scrollFinal ? 100 : options.scrollFinal;
		
		plane.scale.set(
				options.options.size.w,
				options.options.size.h
	    );
	    if (options.options.rotation) {
	        plane.rotation.set(
					options.options.rotation.x,
					options.options.rotation.y,
					options.options.rotation.z
	        );
	    }
	    if (options.options.position) {
	        plane.position.set(
					options.options.position.x,
					options.options.position.y,
					options.options.position.z
	        );
	    }
	    plane.name = options.id;

		givenScene.add(plane);
		
	}

	function makeCubeInstance(options, givenScene) {
		
		var width, depth, height;
		if (typeof options.options.size === "undefined" || !options.options.size) {
			width = 1;
			height = 1;
			depth = 1;
		} else {
			width = typeof options.options.size.w === "undefined" || !options.options.size.w ? 1 : options.options.size.w;
			height = typeof options.options.size.h === "undefined" || !options.options.size.h ? 1 : options.options.size.h;
			depth = typeof options.options.size.d === "undefined" || !options.options.size.d ? 1 : options.options.size.d;
		}
		
		const geometry = new THREE.BoxGeometry(width, height, depth);
		const material = new THREE.MeshPhongMaterial();
			const cube = new THREE.Mesh(geometry, material);
			const cubeColor = new THREE.Color().setHex(options.options.color.init);
			cube.material.color.setRGB(cubeColor.r, cubeColor.g, cubeColor.b);

			givenScene.add(cube);
			
			cube.options = options.options;
			cube.hide = options.hide;

			cube.name = options.id;
			cube.assetType = 'cube';
			cube.scrollInit = options.scrollInit = typeof options.scrollInit === "undefined" || !options.scrollInit ? 0 : options.scrollInit;
			cube.scrollFinal = options.scrollFinal = typeof options.scrollFinal === "undefined" || !options.scrollFinal ? 100 : options.scrollFinal;
			if (options.options.position) {
				cube.position.set(
					options.options.position.x,
					options.options.position.y,
					options.options.position.z
	        );
	    }
	    if (options.options.rotation) {
				cube.rotation.set(
					options.options.rotation.x,
					options.options.rotation.y,
					options.options.rotation.z
	        );
	    }

	}

	function makeCarInstance(options, givenScene) {
		
		var width, depth, height;
		if (typeof options.options.size === "undefined" || !options.options.size) {
			width = 1;
			height = 1;
			depth = 1;
		} else {
			width = typeof options.options.size.w === "undefined" || !options.options.size.w ? 1 : options.options.size.w;
			height = typeof options.options.size.h === "undefined" || !options.options.size.h ? 1 : options.options.size.h;
			depth = typeof options.options.size.d === "undefined" || !options.options.size.d ? 1 : options.options.size.d;
		}
		
		//define a set of corners for the car, along with their lighting normals and UV (I think not used?)

		//left body
		const vertices = [
		{ pos: [	4,	0,	0], norm: [1, 0, 0], uv: [0, 1], }, //0
		{ pos: [	4,	0,	7], norm: [1, 0, 0], uv: [0, 1], grille: true}, //1
		{ pos: [	4,	1.5,	6], norm: [1, 0, 0], uv: [1, 1],  grille: true},  //2
		{ pos: [	4,	1.5,	0], norm: [1, 0, 0], uv: [1, 1],  glass: false},  //3

		//right body
		{ pos: [	0,	0,	0], norm: [-1, 0, 0], uv: [1, 1], },  //4
		{ pos: [	0,	0,	7], norm: [-1, 0, 0], uv: [1, 1],  grille: true},  //5
		{ pos: [	0,	1.5,	0], norm: [-1, 0, 0], uv: [0, 1],  glass: false},  //6
		{ pos: [	0,	1.5,	6], norm: [-1, 0, 0], uv: [0, 1],  grille: true},  //7
		
		//roof
		{ pos: [	3.5,	2.5,	2], norm: [0, 1, 0], uv: [0, 1],  glass: true},  //8
		{ pos: [	0.5,	2.5,	2], norm: [0, 1, 0], uv: [0, 1],  glass: true}, //9
		{ pos: [	3.5,	2.5,	0.5], norm: [0, 1, 0], uv: [0, 1],  glass: true},  //10
		{ pos: [	0.5,	2.5,	0.5], norm: [0, 1, 0], uv: [0, 1],  glass: true},  //11

		//wipers
		{ pos: [	4,	1.5,	4], norm: [-3, -8, -4], uv: [0, 1], glass: false},  //12
		{ pos: [	0,	1.5,	4], norm: [-3, -8, -4], uv: [0, 1], glass: false}, //13

		]; 

		const positions = [];
		const normals = [];
		const uvs = [];
		const colors = [];

		for (const vertex of vertices) {
			positions.push(...vertex.pos);
			normals.push(...vertex.norm);
			uvs.push(...vertex.uv);
			
			//colour cars from each corner using this code - quite cool for potential impacts etc
			/*if (vertex.glass) {
				colors.push(0, 0, 1);
			} else if (vertex.grille) {
				colors.push(1,0,0);
				//colors.push(0.5, 0.5, 0.5);
			} else {*/
				//var init_c = hexToRgb(options.options.color.init);
				//colors.push(init_c.r / 255, init_c.g / 255, init_c.b / 255);
			//}
			
		}	

		let carGeo = new THREE.BufferGeometry()//.setFromPoints(points);
		//essentially: how many numbers are for this property before I move on to next vertex?
		const positionNumComponents = 3;
		const normalNumComponents = 3;
		const uvNumComponents = 2;

		carGeo.setAttribute(
			'position', 
			new THREE.BufferAttribute(new Float32Array(positions), positionNumComponents));
		carGeo.setAttribute(
			'normal', 
			new THREE.BufferAttribute(new Float32Array(normals), normalNumComponents));
		carGeo.setAttribute(
			'uv', 
			new THREE.BufferAttribute(new Float32Array(uvs), uvNumComponents));
		carGeo.setAttribute(
			'color', 
			new THREE.BufferAttribute(new Float32Array(colors), positionNumComponents));
		
		//remember to use right hand rule for determining which way out triangles should face, otherwise they appear on the inside
		carGeo.setIndex([
			3, 1, 0, 	3, 2, 1, //left body
			4, 5, 6, 	7, 6, 5, //right body
			1, 2, 5, 	7, 5, 2, //front
			12, 7, 2, 	7, 12, 13, //hood
			13, 12, 8, 	8, 9, 13, //windshield
			10, 9, 8,	9, 10, 11, //roof
			3, 6, 10, 	11, 10, 6, //rear windshield
			6, 3, 0, 	0, 4, 6,  //trunk
			//16, 15, 14, 14, 17, 16, //trunk 2
			10, 8, 3, 	3, 8, 12, 	//left windows
			6, 9, 11, 	13, 9, 6 //right windows

			]);

		carGeo.computeVertexNormals();

		const material = new THREE.MeshStandardMaterial(
			{});
			const car = new THREE.Mesh(carGeo, material);

			const carColor = new THREE.Color().setHex(options.options.color.init);
			car.material.color.setRGB(carColor.r, carColor.g, carColor.b);

			//car.material.color.setHex("0x" + options.options.color.init);

			givenScene.add(car);
			
			car.options = options.options;
			car.hide = options.hide;

			car.name = options.id;
			car.assetType = 'car';
			car.scrollInit = options.scrollInit = typeof options.scrollInit === "undefined" || !options.scrollInit ? 0 : options.scrollInit;
			car.scrollFinal = options.scrollFinal = typeof options.scrollFinal === "undefined" || !options.scrollFinal ? 100 : options.scrollFinal;
			car.scale.set(
				options.options.size.w,
				options.options.size.h,
				options.options.size.d
	    );
	    if (options.options.rotation) {
	        car.rotation.set(
					options.options.rotation.x,
					options.options.rotation.y,
					options.options.rotation.z
	        );
	    }
	    if (options.options.position) {
	        car.position.set(
					options.options.position.x,
					options.options.position.y,
					options.options.position.z
	        );
	    }
	    //car.castShadow = true;
	    //car.receiveShadow = true;
	}

function sizeOverlaySafe() {
		
		const imgWidth = 1891; // THESE ARE THE DIMENSIONS OF THE BACKGROUND IMAGE
		const imgHeight	=	1098;
		const imgRatio = (imgHeight / imgWidth);  //WE USE THIS RATIO TO DETERMINE IF THE SCREEN IS WIDER OR NARROWER THAN THE IMAGE DIMENSIONS
		
		const windowRatio = ($(window).height() / $(window).width());     // container ratio
		let topPx;
		let leftPx;
		let canvasWidth;
		let canvasHeight;

		if (windowRatio < imgRatio)	{

			canvasWidth = $(window).width(); //THESE FIGURE OUT THE SIZE THE CANVAS NEEDS TO BE
			canvasHeight = $(window).width()*imgRatio;
			topPx = ($(window).height()-canvasHeight)/2;
			leftPx = 0;

			/*renderer.setSize(canvasWidth,canvasHeight,false);//RE-RENDER THE SCENE

			$("canvas").css({
				"width":canvasWidth, //THESE OVERCOME THE INLINE STYLE APPLIED TO THE CANVAS
				"height":canvasHeight,
				"top":($(window).height()-canvasHeight)/2,  //THIS MOVES THE CANVAS SO THAT IT IS LARGER THAN THE CROP OF THE WINDOW
				"left": 0
			});
			*/
		
		}  else  {

			canvasWidth = $(window).height()/imgRatio;
			canvasHeight = $(window).height();
			topPx = 0;
			leftPx = ($(window).width()-canvasWidth)/2;
			
			/*renderer.setSize(canvasWidth,canvasHeight,false);

			$("canvas").css({
				"width":canvasWidth,
				"height":canvasHeight,
				"left":($(window).width()-canvasWidth)/2,
				"top": 0
			});*/
		}


		let renderer = canvases[0];
		renderer.setSize(canvasWidth,canvasHeight,false);//RE-RENDER THE SCENE

		$("canvas").css({
			"width":canvasWidth, //THESE OVERCOME THE INLINE STYLE APPLIED TO THE CANVAS
			"height":canvasHeight,
			"top":topPx,  //THIS MOVES THE CANVAS SO THAT IT IS LARGER THAN THE CROP OF THE WINDOW
			"left": leftPx
		});

		const camera = cameras[0];
		camera.aspect = renderer.domElement.clientWidth / renderer.domElement.clientHeight;
		camera.updateProjectionMatrix();
	}