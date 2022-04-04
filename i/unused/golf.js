import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.128/examples/jsm/loaders/GLTFLoader.js';

function main() {

	var scrollAmt = 0;

	//color palette
	/*const _RED = 	new THREE.Color().setHex("0x99253C");
	const _ROSE = 	new THREE.Color().setHex("0xE66882");
	const _LILAC = 	new THREE.Color().setHex("0x8B91EB");
	const _VIOLET = new THREE.Color().setHex("0x434999");
	const _HILITE = new THREE.Color().setHex("0xC0E64E");
	const _GREY = 	new THREE.Color().setHex("0xAAAAAA");
	const _WHITE = 	new THREE.Color().setHex("0xFFFFFF");
	const _YELLOW = new THREE.Color().setHex("0xF0E035");

	//background image height and width
	const _BG_H = document.getElementById('bg').naturalHeight; 
	const _BG_W = document.getElementById('bg').naturalWidth; 

	//relative compass points in radians, for quick animation
	const _PT_S = 3 * Math.PI / 2;
	const _PT_N = Math.PI / 2;
	const _PT_E = 0;
	const _PT_W = Math.PI;*/

	//background image height and width
	var _BG_H = document.getElementById('bg').naturalHeight; 
	var _BG_W = document.getElementById('bg').naturalWidth; 

	const scenes = [];
	const cameras = [];
	const lights = [];
	const canvases = [];
	//each element in the array below spawns a THREEjs renderer and ties it to canvasSelector element provided in the DOM.

	assets.forEach((assetGroup, i) => {
		var thisCanvas  = initCanvas(assetGroup);
		canvases.push(thisCanvas);
	});

	//$(window).resize(function(){
	//	sizeOverlay();
	//})

	//listener for window resizing, and initial call to resize immediately to viewport
	window.addEventListener('resize', sizeOverlay);
	sizeOverlay();

	//first call that begins the indefinite render loop
	canvases.forEach((renderer) => {
		requestAnimationFrame(render);
	});

	function initCanvas(options) {
		//renderer
		const canvas = document.querySelector(options.canvasSelector);

		const renderer = new THREE.WebGLRenderer({canvas, alpha: true});
		renderer.scrollInit = options.scrollInit;
		renderer.scrollFinal = options.scrollFinal;
		//renderer.shadowMapEnabled = true;
		//renderer.shadowMapType = THREE.PCFSoftShadowMap;

		const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
		camera.position.x = cameraPosX;
		camera.position.y = cameraPosY;
		camera.position.z = cameraPosZ;
		camera.rotation.x = cameraRotX; //up/down
		camera.rotation.y = cameraRotY; //left/right
		camera.rotation.z = cameraRotZ;
		cameras.push(camera);

		//scene
		const scene = new THREE.Scene();

		//lights
		const color = 0xFFF3E0;
		const groundColor = 0x999999;
	    const intensity = 1;
	    const light = new THREE.HemisphereLight(color, groundColor, intensity);
	    light.position.set(2, 3, 10);
	    scene.add(light);
	   	lights.push(light);

	    options.assets.forEach((element, index) => {
	    	element.scrollInit = options.scrollInit;
	    	element.scrollFinal = options.scrollFinal;

			if (element.assetType == "line") {
	    		makeLineInstance(element, scene);

	    	} else if (element.assetType == "text") {
	    		makeTextInstance(element, scene);
	    	} else if (element.assetType == "beetle") {
	    		makeBeetleInstance(element, scene);
	    	} else {
		    	//makeCubeInstance(element, scene);
		    	makeAnythingInstance(element, scene);
		    }
	    });

	    //debug line grid
	    var debug = false;

	    if (debug && options.canvasSelector == "#canvasA") {
		    for (var y = 0; y < 5; y++) {
			    for (var x = -5; x < 5; x++) {
			    	if (x == 0) {
			    		var colour = "white";
			    	} else if (x < 0) {
			    		var colour = "blue";
			    	} else {
			    		var colour = "yellow";
			    	}
			    	makeLineInstance(colour, x, y, -5, x, y, 100, scene);
			    }
			    makeLineInstance("green", 20, y, -5, -20, y, -5, scene);
		    }
		}


	    scenes.push(scene);

	    return renderer;  
	}

	function render(time) {
		time *= 0.001; //convert time to seconds
		var newScrollAmt = 100 * window.pageYOffset / (document.body.scrollHeight - window.innerHeight);

		canvases.forEach((renderer, index) => {
		
			//for performance, only animate asset movements if scroll position has changed
			if (newScrollAmt != scrollAmt) {
				if (scrollAmt > renderer.scrollInit && scrollAmt < renderer.scrollFinal) {
					scenes[index].traverse(tickMovables);
				} else {
					scenes[index].traverse(makeInvisible);
				}
			}

			//render and finish
			renderer.render(scenes[index], cameras[index]);
		});
		requestAnimationFrame(render);
		
		scrollAmt = newScrollAmt;
	}

	function sizeOverlay() {
		
		const imgWidth = 	_BG_W; // background image dimensions
		const imgHeight	=	_BG_H; 
		const imgRatio = (imgHeight / imgWidth); //image aspect ratio

		const windowHeight = document.documentElement.clientHeight; //$(window).height() if jQuery is necessary
		const windowWidth =	document.documentElement.clientWidth; //$(window).width() if jQuery is necessary
		const windowRatio = (windowHeight / windowWidth);     // viewing window ratio

		//console.log(imgWidth + " " + imgHeight + " " + imgRatio);
		//console.log("$WH: " + $(window).height() + " $WW: " + $(window).width() + "pH: " + window.innerHeight  + " " + document.documentElement.clientHeight + " pW: " + window.innerWidth + " " + document.documentElement.clientWidth );

		let topPx, leftPx, canvasWidth, canvasHeight;

		//is the screen wider or narrower than the image's native aspect ratio?
		if (windowRatio < imgRatio)	{
			//if image ratio is higher, image is wider than viewport
			//peg all dimensions to the window width, which will display the full bg width
			//this pushes some of the image above and below the window, so offset the canvas top to 
			//keep it in the same optical position

			canvasWidth = windowWidth; //THESE FIGURE OUT THE SIZE THE CANVAS NEEDS TO BE
			canvasHeight = windowWidth*imgRatio;
			topPx = (windowHeight-canvasHeight)/2;
			leftPx = 0;
		
		}  else  {
			//if image ratio is lower, image is narrow than viewport
			//peg all dimensions to the window height, which will display the full bg height
			//this pushes some of the image left and right of the window, so offset the canvas left to 
			//keep it in the same optical position

			canvasWidth = windowHeight/imgRatio;
			canvasHeight = windowHeight;
			topPx = 0;
			leftPx = (windowWidth-canvasWidth)/2;

		}

		canvases.forEach((renderer, index) => {

			//all three must occur below

			//first, tell THREE to push this number of pixels to the renderer
			renderer.setSize(canvasWidth,canvasHeight,false);//RE-RENDER THE SCENE
			
			//update the camera inside the scene's projection matrix to prevent squash and squeeze
			const camera = cameras[index];
			camera.aspect = renderer.domElement.clientWidth / renderer.domElement.clientHeight;
			camera.updateProjectionMatrix();

			//finally, update the properties of the canvas' DOM element to the calcs above
			renderer.domElement.style.width = canvasWidth;
			renderer.domElement.style.height = canvasHeight;
			renderer.domElement.style.top = topPx;
			renderer.domElement.style.left = leftPx;
		});
	}

	function makeInvisible(obj) {
		try {
			if (obj.canHide) {
				this.visible = false;
			}
			
		} catch (error) {
			console.log(error);
		}
		
	}

	function tickMovables(obj) {

		if (obj.animate) {

			if (scrollAmt > obj.scrollInit && scrollAmt < obj.scrollFinal && obj.assetType) {        				

				obj.visible = true;
				/*obj.traverse(function(child){ 
					console.log(child.name, "Visible B: ", child.visible);
					child.visible = true;
					console.log(child.name, "Visible A: ", child.visible);
				});*/
				//if (scrollAmt > thisObjStartInScroll && scrollAmt < thisObjEndInScroll) {
					//confirm visible in case user has already scrolled past and come back

					//if scroll is such that this box should be onscreen, then start to animate it
					//check through anims
					//for each anim, confirm if its timeline is currently active (i.e. initP:0, finalP:40 = is scroll in first 40% of this module's scroll duration?)
					var o = obj.options;
					o.anims.forEach((anim, index) => {
						
						//convert % durations in object to exact scroll amounts
						var thisObjStartInScroll = obj.scrollInit + (anim.initP / 100 * (obj.scrollFinal - obj.scrollInit));
						var thisObjEndInScroll = obj.scrollInit + (anim.finalP / 100 * (obj.scrollFinal - obj.scrollInit));
						
						if (scrollAmt > thisObjStartInScroll && scrollAmt < (thisObjEndInScroll + 5)) {
							
	    					//express current scroll amount as % of way through this animation
	    					//e.g. if an animation is supposed to happen between scroll 10 and 20, a current scroll of 11 would return 0.1 to thisObjectProgress
	    					//added buffer of 5% of scroll height to account for quick scrolling that prevents animations from completing
	    					var thisObjectProgress = Math.min(map(thisObjStartInScroll,thisObjEndInScroll,scrollAmt), 1);

	    					if (obj.assetType == "beetle") {
	    						var target = new THREE.Vector3();
	    						var box = new THREE.Box3();
	    						var bbtarget = new THREE.Vector3();
	    						var bctarget = new THREE.Vector3();
	    						obj.traverse(function(xx) {
	    							if (xx.name != "a-golf" ) {
	    								//xx.position.set(0, 0, 0);
	    							}
	    							box.setFromObject(xx);
	    							//console.log(xx.name, box.getCenter(bctarget), box.getSize(bbtarget), xx.getWorldPosition(target));
	    						});

	    					}
	    					if (anim.position) {
	    						if (anim.position.path) { //anything other than straight line
	    							var p = anim.position.path;

	    							var curve = new THREE.EllipseCurve(
									    p.aX, p.aZ,             // ax, aY
									    p.xRad, p.zRad,            // xRadius, yRadius
									   	p.aStart, p.aEnd, // aStartAngle, aEndAngle
									    p.aAntiClock             // aClockwise
									);

									var objLocationOnCurve = curve.getPointAt(thisObjectProgress);

									obj.position.set(
	        							objLocationOnCurve.x,
	        							obj.position.y,
	        							objLocationOnCurve.y
		    						);
		    						//curve is created in xy-plane but boxes move in xz-plane. Preserve y coordinate and use y movement for z.

	    						} else {

	    							var curPos = new THREE.Vector3();
	    							obj.getWorldPosition(curPos);     							
	    							
	    							var initX = anim.position.init.x;
	    							var initY = anim.position.init.y;
	    							var initZ = anim.position.init.z;

	    							var finalX = anim.position.final.x;
	    							var finalY = anim.position.final.y;
	    							var finalZ = anim.position.final.z;
	    							
	    							console.log(obj.name, obj.position);
	    							if (obj.name == "a-golf") {
	    								obj.children.forEach(function(foo) {
	    									if (foo.name == "narc") {
	    										foo.position.set(0,0,0);
	    									} else {
	    										foo.position.set(1,0,0);
	    									}
	    								});
	    							}
	        						obj.position.set(
	        							lerp(initX, finalX, thisObjectProgress),
	        							lerp(initY, finalY, thisObjectProgress),
	        							lerp(initZ, finalZ, thisObjectProgress)
		    						);
		    					}
	    					}

	    					if (anim.color) {

	    						//first, convert colors to RGB so they can be easily interpolated
	    						var initColor = new THREE.Color().setHex(Object.values(anim.color.init)[0].toString());
	    						var finalColor = new THREE.Color().setHex(Object.values(anim.color.final)[0].toString());
	    						//debugger;
	    						/*var init_c = hexToRgb(anim.color.init);
	    						var final_c = hexToRgb(anim.color.final);
								
	    						//integer interpolation between each color channel
	    						var lerpR = Math.floor(lerp(init_c.r, final_c.r, thisObjectProgress));
	    						var lerpG = Math.floor(lerp(init_c.g, final_c.g, thisObjectProgress));
	    						var lerpB = Math.floor(lerp(init_c.b, final_c.b, thisObjectProgress));*/

	    						/*var lerpR = lerp(Object.values(anim.color.init)[0].r, Object.values(anim.color.final)[0].r, thisObjectProgress);
	    						var lerpG = lerp(Object.values(anim.color.init)[0].g, Object.values(anim.color.final)[0].g, thisObjectProgress);
	    						var lerpB = lerp(Object.values(anim.color.init)[0].b, Object.values(anim.color.final)[0].b, thisObjectProgress);*/
	    						var lerpR = lerp(initColor.r, finalColor.r, thisObjectProgress);
	    						var lerpG = lerp(initColor.g, finalColor.g, thisObjectProgress);
	    						var lerpB = lerp(initColor.b, finalColor.b, thisObjectProgress);

	    						//interpolate based on scroll, then recombine and set hex of object
	    						obj.material.color.setRGB(lerpR, lerpG, lerpB);
	    						
	    					}

	    					if (anim.size) {
	    						var initH;
	    						var initW;
	    						var initD;
	    						var finalH;
	    						var finalW;
	    						var finalD;

								initH = anim.size.init.w;
								initW = anim.size.init.h;
								initD = typeof anim.size.init.d === "undefined" || !anim.size.init.d ? 1 : anim.size.init.d;
								finalH = anim.size.final.h;
								finalW = anim.size.final.w;
								finalD = typeof anim.size.final.d === "undefined" || !anim.size.final.d ? 1 : anim.size.final.d;

	    						
	    						obj.scale.set(
	    							lerp(initH, finalH, thisObjectProgress),
	    							lerp(initW, finalW, thisObjectProgress),
	    							lerp(initD, finalD, thisObjectProgress)
	    						);
	    						
	    					}

	    					if (anim.rotation) {
	    						obj.rotation.set(
	    							lerp(anim.rotation.init.x, anim.rotation.final.x, thisObjectProgress),
	    							lerp(anim.rotation.init.y, anim.rotation.final.y, thisObjectProgress),
	    							lerp(anim.rotation.init.z, anim.rotation.final.z, thisObjectProgress)
	    						);
	    						//console.log("yRot: " + lerp(anim.rotation.init.y, anim.rotation.final.y, thisObjectProgress));
	    					}

	    					if (anim.opacity) {
	    						var initO = anim.opacity.init;
	    						var finalO = anim.opacity.final;
	    						obj.material.opacity = lerp(initO, finalO, thisObjectProgress);
	    					}

	    				}
					});       				

			} else {
				//scroll is such that object is not visible; do not draw
				
				obj.visible = false;
				console.log(obj.name, "Invisible");
				if (obj.material) {
					obj.material.opacity = 1;
				}			
			}
		} else {
			//console.log(obj);
		}

		return scrollAmt;
	}

	//THREE.JS CONSTRUCTOR FUNCTIONS
	function makeAnythingInstance(options, givenScene) {

		//geometry and material
		var geometry, material, loadedObject;
		var isObject = false;
		switch(options.assetType) {
			case 'car':
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

				geometry = new THREE.BufferGeometry()//.setFromPoints(points);
				//essentially: how many numbers are for this property before I move on to next vertex?
				const positionNumComponents = 3;
				const normalNumComponents = 3;
				const uvNumComponents = 2;

				geometry.setAttribute(
					'position', 
					new THREE.BufferAttribute(new Float32Array(positions), positionNumComponents));
				geometry.setAttribute(
					'normal', 
					new THREE.BufferAttribute(new Float32Array(normals), normalNumComponents));
				geometry.setAttribute(
					'uv', 
					new THREE.BufferAttribute(new Float32Array(uvs), uvNumComponents));
				geometry.setAttribute(
					'color', 
					new THREE.BufferAttribute(new Float32Array(colors), positionNumComponents));
				
				//remember to use right hand rule for determining which way out triangles should face, otherwise they appear on the inside
				geometry.setIndex([
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

				geometry.computeVertexNormals();
				material = new THREE.MeshStandardMaterial({});
				break;
			case 'plane':
				geometry = new THREE.PlaneGeometry( 1, 1 );
				material = new THREE.MeshBasicMaterial( {side: THREE.DoubleSide });
				break;
			case 'text':
				break;
			case 'sphere':
				geometry = new THREE.SphereGeometry(1, options.segments, 16);
				break;
			case 'cube':
				geometry = new THREE.BoxGeometry(1, 1, 1);
				material = new THREE.MeshPhongMaterial();
				break;
			case 'suitcase':
				geometry = RoundEdgedBox(1, 1, 1);
				material = new THREE.MeshPhongMaterial();
				break;
			default:
		}

		//basic props
		var thing;
		if (isObject) {
			thing = loadedObject;
		} else {
			thing = new THREE.Mesh(geometry, material);
		}
		
		thing.options = options.options;
		thing.assetType = options.assetType;
		thing.name = options.id;
		thing.animate = true;

		//color
		const thingColor = new THREE.Color().setHex(options.options.color.init);
		thing.material.color.setRGB(thingColor.r, thingColor.g, thingColor.b);
		
		//scroll behaviour
		thing.scrollInit = options.scrollInit = typeof options.scrollInit === "undefined" || !options.scrollInit ? 0 : options.scrollInit;
		thing.scrollFinal = options.scrollFinal = typeof options.scrollFinal === "undefined" || !options.scrollFinal ? 100 : options.scrollFinal;
		
		//position, rotation and scale
		if (options.options.position) {
			thing.position.set(
				options.options.position.x,
				options.options.position.y,
				options.options.position.z
        	);
        }
		if (options.options.rotation) {
			thing.rotation.set(
				options.options.rotation.x,
				options.options.rotation.y,
				options.options.rotation.z
	        );
	    }
	    if (options.options.size) {
		    thing.scale.set(
				options.options.size.w,
				options.options.size.h,
				options.options.size.d
		    );
		}

		thing.visible = false;

	    givenScene.add(thing);
	}

	function makeBeetleInstance(options, givenScene) {

		//geometry and material
		var geometry, material, thing;

		// instantiate a loader

		const loader = new GLTFLoader();
		//const materialsLoader = new MTLLoader();

		//materialsLoader.load('models/vw-beetle.mtl', function(materials) {
		//	materials.preload();
			//loader.setMaterials(materials);
			loader.load('models/scene.gltf',	function ( object ) {

				let model = object.scene;
				/*model.traverse (function(xx) {
					xx.material = new THREE.MeshPhongMaterial();
				})*/
				thing = new THREE.Object3D();
				thing.add(model);

				thing.options = options.options;
				thing.assetType = options.assetType;
				thing.name = options.id;
				thing.visible = false;
				thing.animate = true;

				//color
				const thingColor = new THREE.Color().setHex(options.options.color.init);
				//thing.material.color.setRGB(thingColor.r, thingColor.g, thingColor.b);
				
				//scroll behaviour
				thing.scrollInit = options.scrollInit = typeof options.scrollInit === "undefined" || !options.scrollInit ? 0 : options.scrollInit;
				thing.scrollFinal = options.scrollFinal = typeof options.scrollFinal === "undefined" || !options.scrollFinal ? 100 : options.scrollFinal;
				
				//position, rotation and scale
				if (options.options.position) {
					thing.position.set(
						options.options.position.x,
						options.options.position.y,
						options.options.position.z
		        	);
		        }
				if (options.options.rotation) {
					thing.rotation.set(
						options.options.rotation.x,
						options.options.rotation.y,
						options.options.rotation.z
			        );
			    }
			    if (options.options.size) {
				    thing.scale.set(
						options.options.size.w,
						options.options.size.h,
						options.options.size.d
				    );
				}

				//add cube to parent
				geometry = new THREE.BoxGeometry(1, 1, 1);
				material = new THREE.MeshPhongMaterial();
				const cube = new THREE.Mesh(geometry, material);
				cube.assetType = 'cube';
				cube.name = 'narc';
				cube.options = options.options;

				//color
				const cubeColor = new THREE.Color().setHex(options.options.color.init);
				cube.material.color.setRGB(cubeColor.r, cubeColor.g, cubeColor.b);
				
				//scroll behaviour
				cube.scrollInit = options.scrollInit = typeof options.scrollInit === "undefined" || !options.scrollInit ? 0 : options.scrollInit;
				cube.scrollFinal = options.scrollFinal = typeof options.scrollFinal === "undefined" || !options.scrollFinal ? 100 : options.scrollFinal;
				
				//position, rotation and scale
				cube.position.set(0,0,0);
				thing.add(cube);
				
			    givenScene.add(thing);
			    //console.log(dumpObject(thing).join('\n'));

			},
			function ( xhr ) {
				console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

			},
			function ( error ) {

				console.log( 'An error happened', error );

			});		
		//});
	}

	function dumpObject(obj, lines = [], isLast = true, prefix = '') {
	  const localPrefix = isLast ? '└─' : '├─';
	  lines.push(`${prefix}${prefix ? localPrefix : ''}${obj.name || '*no-name*'} [${obj.type}]`);
	  const newPrefix = prefix + (isLast ? '  ' : '│ ');
	  const lastNdx = obj.children.length - 1;
	  obj.children.forEach((child, ndx) => {
	    const isLast = ndx === lastNdx;
	    dumpObject(child, lines, isLast, newPrefix);
	  });
	  return lines;
	}	

	function makeLineInstance(color, x1, y1, z1, x2, y2, z2, givenScene) {
		
		const material = new THREE.LineBasicMaterial({color});
		
		const points = [];
		points.push( new THREE.Vector3( x1, y1, z1));
		points.push( new THREE.Vector3( x2, y2, z2));
		const lgeometry = new THREE.BufferGeometry().setFromPoints( points );

		const line = new THREE.Line( lgeometry, material );
		line.assetType = 'line';


		givenScene.add(line);	
	}

	//GENERIC HELPER FUNCTIONS
	function map(start, end, interval) {
	    //returns float between 0 and 1 of interval's distance between start and end.
	    return (interval - start) / (end - start);
	}

	function lerp(v0, v1, t) {
	    return v0*(1-t)+v1*t
	}

	function hexToRgb(hex) {
	  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	  return result ? {
	    r: parseInt(result[1], 16),
	    g: parseInt(result[2], 16),
	    b: parseInt(result[3], 16)
	  } : null;
	}

	function componentToHex(c) {
	  var hex = c.toString(16);
	  return hex.length == 1 ? "0" + hex : hex;
	}

	function rgbToHex(r, g, b) {
	  return "0x" + componentToHex(r) + componentToHex(g) + componentToHex(b);
	}

	window.onload = function() {
		
		//on load tie canvasA,B,C aspect to image aspect
		function grabBGAspect() {
			var w = document.getElementById("bg").width;
			var h = document.getElementById("bg").height;
			var aspect = w/h;

			
		}

		document.onkeydown = checkKey;
		function checkKey(e) {

		    e = e || window.event;

		    if (e.keyCode == '55') {
		        // 7			        
		       cameras[0].rotation.x += 0.01;
		       //lights[0].target.position.y += 0.01;
		    }
		    else if (e.keyCode == '56') {
		        // 8

		       cameras[0].rotation.x -= 0.01;
		       //lights[0].target.position.y -= 0.01;
		    }
		    else if (e.keyCode == '57') {
		       // 9
		       cameras[0].rotation.y -= 0.01;
		       //lights[0].target.position.x += 0.01;
		       
		    }
		    else if (e.keyCode == '48') {
		       // 0
		       cameras[0].rotation.y += 0.01;
		       //lights[0].target.position.x -= 0.01;

		    }else if (e.keyCode == '49') {
		       // 1 
		       cameras[0].position.x += 0.1;

		    }else if (e.keyCode == '50') {
		       // 2 
		       cameras[0].position.x -= 0.1;

		    }else if (e.keyCode == '51') {
		       // 3 
		       cameras[0].position.y += 0.1;

		    }else if (e.keyCode == '52') {
		       // 4 
		       cameras[0].position.y -= 0.1;

		    }else if (e.keyCode == '53') {
		       // 5 
		       cameras[0].position.z += 0.1;

		    } else if (e.keyCode == '54') {
		       // 6 
		       cameras[0].position.z -= 0.1;

		    }

		    cameras[0].updateProjectionMatrix();
		    console.log("R: " + cameras[0].rotation.x + " " + cameras[0].rotation.y + " " + cameras[0].rotation.z + " ");
		    console.log("P: " + cameras[0].position.x + " " + cameras[0].position.y + " " + cameras[0].position.z + " ");

		}
	}
}

main();