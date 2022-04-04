//camera
const fov = 40;
const aspect = 6;
const near = 0.1;
const far = 200;

var cameraPosX = 0;
var cameraPosY = 3.2;
var cameraPosZ = -15.5;
var cameraRotX = -3.12; //up/down
var cameraRotY = 0.133; //left/right
var cameraRotZ = -3.14;

//relative compass points in radians, for quick animation
var _PT_S = 0;
var _PT_N = Math.PI;
var _PT_E = Math.PI / 2;
var _PT_W = 3 * Math.PI / 2;

var assets = [
		{
			canvasSelector: "#canvasA",
			scrollInit: 10,
			scrollFinal: 40,
			assets: [
				{
					id: "a-golf",
					assetType: "beetle",
					options: {
						color: {
							init: _LILAC
						},
						size: {
							w: 1,
							h: 1,
							d: 1
						},
						position: {
							x: -2,
							y: 1,
							z: 20
						},
						anims: [
							{
								initP: 0,
								finalP: 100,
								position: {
									init: {
	        							x: -2,
										y: 1,
										z: 20
	        						},
	        						final: {
	        							x: -4,
										y: 3,
										z: 30
	        						}
	        					},
								rotation: {
									init: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						},
	        						final: {
	        							x: 0,
	        							y: 2 * Math.PI,
	        							z: 0
	        						}
	        					}
	        				}
						]
					}
				},
				{
					id: "a-suitcaselid",
					assetType: "cube",
					options: {
						color: {
							init: _ROSE
						},
						size: {
							w: 2,
							h: 1,
							d: 3
						},
						position: {
							x: -5,
							y: 3.4,
							z: 30
						},
						anims: [
							{
								initP: 0,
								finalP: 30,
								rotation: {
									init: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						},
	        						final: {
	        							x: 0,
	        							y: 2 * Math.PI,
	        							z: 0
	        						}
	        					}
							},
							{
								initP: 30,
								finalP: 60,
								rotation: {
									init: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						},
	        						final: {
	        							x: 0,
	        							y: 0,
	        							z: Math.PI / 2
	        						}
	        					},
	        					position: {
									init: {
	        							x: -5,
										y: 3.4,
										z: 30
	        						},
	        						final: {
	        							x: -6.4,
										y: 4,
										z: 30
	        						}
	        					}
							}	
						]
					}
				}
			]
		}
	];