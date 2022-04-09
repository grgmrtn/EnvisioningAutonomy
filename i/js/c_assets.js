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
			scrollFinal: 34,
			assets: [
				{					id: "a-carfar",
					assetType: "car",
					hide: true,
					options: {
						color: {
							init: _BLUE2
						},
						size: {
							w: 2,
							h: 2,
							d: 2
						},
						position: {
							x: 20,
							y: 0,
							z: 50
						},
						rotation: {
							x: 0,
							y: _PT_W,
							z: 0
						},
						anims: [
							{								initP: 10,
								finalP: 30,
								position: {
									init: {
	        							x: 20,
	        							y: -2,
	        							z: 50
	        						},
	        						final: {
	        							x: -40,
	        							y: -2,
	        							z: 50
	        						}
	        					}
							}	
						]
					}
				},
				{					id: "a-carclose",
					assetType: "car",
					hide: true,
					options: {
						color: {
							init: _BLUE1
						},
						size: {
							w: 2,
							h: 2,
							d: 2
						},
						position: {
							x: 20,
							y: 0,
							z: 20
						},
						rotation: {
							x: 0,
							y: _PT_W,
							z: 0
						},
						anims: [
							{								initP: 36,
								finalP: 60,
								position: {
									init: {
	        							x: 40,
	        							y: -2,
	        							z: 20
	        						},
	        						final: {
	        							x: -20,
	        							y: -2,
	        							z: 20
	        						}
	        					}
							}	
						]
					}
				},
				{					id: "a-suitcase",
					assetType: "suitcase",
					hide: true,
					options: {
						color: {
							init: _KEY
						},
						size: {
							w: 1,
							h: 2,
							d: 2
						},
						position: {
							x: -3,
							y: 0,
							z: 60
						},
						anims: [
							{								initP: 0,
								finalP: 15,
	        					position: {
									init: {
	        							x: -3,
										y: 0,
										z: 60
	        						},
	        						final: {
	        							x: -3,
										y: 0,
										z: 25
	        						}
	        					}
							},
							{								initP: 15,
								finalP: 17,
	        					rotation: {
									init: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						},
	        						final: {
	        							x: 0,
	        							y: Math.PI / -4,
	        							z: 0
	        						}
	        					},
	        					position: {
									init: {
	        							x: -3,
										y: 0,
										z: 25
	        						},
	        						final: {
	        							x: -3,
										y: 0,
										z: 20
	        						}
	        					}
							},
							{								initP: 19,
								finalP: 20,
	        					rotation: {
									init: {
	        							x: 0,
	        							y: Math.PI / -4,
	        							z: 0
	        						},
	        						final: {
	        							x: 0,
	        							y: Math.PI / 16,
	        							z: 0
	        						}
	        					}
							},
							{								initP: 25,
								finalP: 35,
	        					position: {
									init: {
	        							x: -3,
										y: 0,
										z: 25
	        						},
	        						final: {
	        							x: -2,
										y: 0,
										z: 35
	        						}
	        					},
	        					rotation: {
									init: {
	        							x: 0,
	        							y: Math.PI / 16,
	        							z: 0
	        						},
	        						final: {
	        							x: 0,
	        							y: Math.PI / 4,
	        							z: 0
	        						}
	        					}
							},
							{								initP: 40,
								finalP: 50,
	        					position: {
									init: {
	        							x: -2,
										y: 0,
										z: 35
	        						},
	        						final: {
	        							x: -3,
										y: 0,
										z: 25
	        						}
	        					},
	        					rotation: {
									init: {
	        							x: 0,
	        							y: Math.PI / 4,
	        							z: 0
	        						},
	        						final: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						}
	        					}
							},
							{								initP: 50,
								finalP: 60,
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
							{								initP: 65,
								finalP: 75,
	        					position: {
									init: {
	        							x: -3,
										y: 0,
										z: 25
	        						},
	        						final: {
	        							x: -3,
										y: 0,
										z: -20
	        						}
	        					}
							}	
						]
					}
				},
				{					id: "a-ped",
					assetType: "person",
					hide: true,
					options: {
						color: {
							init: _GREY
						},
						size: {
							w: 1,
							h: 1,
							d: 1
						},
						rotation: {
							x: 0,
							y: _PT_N,
							z: 0
						},
						position: {
							x: -6,
							y: 0,
							z: 50
						},
						anims: [						
							{								initP: 5,
								finalP: 10,
	        					position: {
									init: {
	        							x: -6,
										y: 0,
										z: 50
	        						},
	        						final: {
	        							x: -6,
										y: 0,
										z: 40
	        						}
	        					}
							},
							{								initP: 13,
								finalP: 15,
	        					position: {
									init: {
	        							x: -6,
										y: 0,
										z: 40
	        						},
	        						final: {
	        							x: -6,
										y: 0,
										z: 50
	        						}
	        					}
							},
							{								initP: 75,
								finalP: 85,
	        					position: {
									init: {
	        							x: -6,
										y: 0,
										z: 50
	        						},
	        						final: {
	        							x: -6,
										y: 0,
										z: -30
	        						}
	        					}
							}	
						]
					}
				},
				/*{					id: "a-ball",
					assetType: "sphere",
					hide: true,
					options: {
						color: {
							init: _ROSE
						},
						size: {
							w: 1,
							h: 1,
							d: 1
						},
						position: {
							x: -6,
							y: 2,
							z: 50
						},
						anims: [
							{
								initP: 45,
								finalP: 78,
								position: {
									init: {
	        							x: 20,
	        							y: 0,
	        							z: 25
	        						},
	        						final: {
	        							x: -30,
	        							y: 0,
	        							z: 25
	        						}
	        					}
							}	
						]
					}
				},*/
				{					id: "a-pedsignal-timer",
					assetType: "cube",
					texture: "timer",
					options: {
						color: {
							init: _RED
						},
						size: {
							w: 1,
							h: 1,
							d: 1
						},
						rotation: {
							x: 0,
							y: 0,
							z: 0
						},
						position: {
							x: -12,
							y: 12,
							z: 100
						},
						anims: [
							{
								initP: 0,
								finalP: 4,
								position: {
									init: {
	        							x: -12,
										y: 12,
										z: 100
	        						},
	        						final: {
	        							x: -12,
										y: 7.5,
										z: 100
	        						}
	        					}
							}
						]
					}
				},
				{					id: "a-pedsignal-symbol",
					assetType: "cube",
					texture: "ped",
					options: {
						color: {
							init: _RED
						},
						size: {
							w: 1,
							h: 1,
							d: 1
						},
						rotation: {
							x: 0,
							y: 0,
							z: 0
						},
						position: {
							x: -12,
							y: 13,
							z: 100
						},
						anims: [
							{
								initP: 0,
								finalP: 4,
								position: {
									init: {
	        							x: -12,
										y: 13,
										z: 100
	        						},
	        						final: {
	        							x: -12,
										y: 8.5,
										z: 100
	        						}
	        					}
							},
							{
								initP: 0,
								finalP: 10,
								position: {
									init: {
	        							x: -12,
										y: 13,
										z: 100
	        						},
	        						final: {
	        							x: -12,
										y: 8.5,
										z: 100
	        						}
	        					}
							},
							{
								initP: 75,
								finalP: 78,
								rotation: {
									init: {
	        							x: 0,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: 0,
										y: Math.PI / 2,
										z: 0
	        						}
	        					}
							}	
						]
					}
				},
				{					id: "a-int",
					assetType: "plane",
					hide: true,
					options: {
						texture: false,
						color: {
							init: _RED
						},
						size: {
							w: 11,
							h: 78
						},
						rotation: {
							x: Math.PI  /2,
							y: 0,
							z: Math.PI
						},
						position: {
							x: -4,
							y: -10,
							z: 18
						},
						anims: [
							{
								initP: 0,
								finalP: 2,
								position: {
									init: {
	        							x: -6.5,
										y: -10,
										z: 38
	        						},
	        						final: {
	        							x: -6.5,
										y: -2,
										z: 38
	        						}
	        					}
							},
							{
								initP: 75,
								finalP: 78,
								color: {
									init: {
										_RED
									},
	        						final: {
	        							_KEY
	        						}
	        					}
							},
							{
								initP: 95,
								finalP: 97,
								opacity: {
									init: 1,
	        						final: 0
	        					}
							}		
						]
					}
				},
			]
		},
		{
			canvasSelector: "#canvasB",
			scrollInit: 40,
			scrollFinal: 96,
			assets: [
				{					id: "b-pedsignal-timer",
					assetType: "cube",
					texture: "timer",
					options: {
						color: {
							init: _KEY
						},
						size: {
							w: 1,
							h: 1,
							d: 1
						},
						rotation: {
							x: 0,
							y: 0,
							z: 0
						},
						position: {
							x: -12,
							y: 7.5,
							z: 100
						},
						anims: [
							{
								initP: 0,
								finalP: 5,
								position: {
									init: {
	        							x: -12,
										y: 7.5,
										z: 100
	        						},
	        						final: {
	        							x: -2,
										y: 2,
										z: 0
	        						}
	        					}
							},
							{
								initP: 8,
								finalP: 10,
								rotation: {
									init: {
	        							x: 0,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: Math.PI / 2,
										y: 0,
										z: 0
	        						}
	        					}
							},
							{
								initP: 12,
								finalP: 14,
								rotation: {
									init: {
	        							x: Math.PI / 2,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: Math.PI,
										y: 0,
										z: 0
	        						}
	        					}
							},
							{
								initP:16,
								finalP: 18,
								rotation: {
									init: {
	        							x: Math.PI,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: 3 * Math.PI / 2,
										y: 0,
										z: 0
	        						}
	        					}
							},
							{
								initP: 20,
								finalP: 22,
								rotation: {
									init: {
	        							x: 3 * Math.PI / 2,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: 3 * Math.PI / 2,
										y: 0,
										z: Math.PI / 2
	        						}
	        					}
							},
							{
								initP: 24,
								finalP: 26,
								rotation: {
									init: {
	        							x: 3 * Math.PI / 2,
										y: 0,
										z: Math.PI / 2
	        						},
	        						final: {
	        							x: 3 * Math.PI / 2,
										y: 0,
										z: 3 * Math.PI / 2
	        						}
	        					}
							},
							{
								initP: 28,
								finalP: 30,
								rotation: {
									init: {
	        							x: 3 * Math.PI / 2,
										y: 0,
										z: 3 * Math.PI / 2
	        						},
	        						final: {
	        							x: 0,
										y: 0,
										z: 0
	        						}
	        					}
							},
							{
								initP: 30,
								finalP: 35,
								position: {
									init: {
	        							x: -2,
										y: 2,
										z: 0
	        						},
	        						final: {
	        							x: -12,
										y: 7.5,
										z: 100
	        						}
	        					}
							},
							{
								initP: 42,
								finalP: 44,
								rotation: {
									init: {
	        							x: 0,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: Math.PI / 2,
										y: 0,
										z: 0
	        						}
	        					}
							},
							{
								initP: 46,
								finalP: 48,
								rotation: {
									init: {
	        							x: Math.PI / 2,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: Math.PI,
										y: 0,
										z: 0
	        						}
	        					}
							},
							{
								initP: 50,
								finalP: 52,
								rotation: {
									init: {
	        							x: Math.PI,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: 3 * Math.PI / 2,
										y: 0,
										z: 0
	        						}
	        					}
							},
							{
								initP: 54,
								finalP: 56,
								rotation: {
									init: {
	        							x: 3 * Math.PI / 2,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: 3 * Math.PI / 2,
										y: 0,
										z: Math.PI / 2
	        						}
	        					}
							},
							{
								initP: 58,
								finalP: 60,
								rotation: {
									init: {
	        							x: 3 * Math.PI / 2,
										y: 0,
										z: Math.PI / 2
	        						},
	        						final: {
	        							x: 3 * Math.PI / 2,
										y: 0,
										z: 3 * Math.PI / 2
	        						}
	        					}
							},
							{
								initP: 62,
								finalP: 64,
								rotation: {
									init: {
	        							x: 3 * Math.PI / 2,
										y: 0,
										z: 3 * Math.PI / 2
	        						},
	        						final: {
	        							x: 0,
										y: 0,
										z: 0
	        						}
	        					}
							}
							
						]
					}
				},
				{					id: "b-pedsignal-symbol",
					assetType: "cube",
					texture: "ped",
					options: {
						color: {
							init: _KEY
						},
						size: {
							w: 1,
							h: 1,
							d: 1
						},
						rotation: {
							x: 0,
							y: 0,
							z: 0
						},
						position: {
							x: -12,
							y: 8.5,
							z: 100
						},
						anims: [
							{
								initP: 0,
								finalP: 5,
								position: {
									init: {
	        							x: -12,
										y: 8.5,
										z: 100
	        						},
	        						final: {
	        							x: -2,
										y: 3,
										z: 0
	        						}
	        					}
							},
							{
								initP: 12,
								finalP: 14,
								rotation: {
									init: {
	        							x: 0,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: Math.PI / 2,
										y: 0,
										z: 0
	        						}
	        					}
							},
							{
								initP:16,
								finalP: 18,
								rotation: {
									init: {
	        							x: Math.PI / 2,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: 0,
										y: 0,
										z: 0
	        						}
	        					}
							},
							{
								initP: 20,
								finalP: 22,
								rotation: {
									init: {
	        							x: 0,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: Math.PI / 2,
										y: 0,
										z: 0
	        						}
	        					}
							},
							{
								initP: 24,
								finalP: 26,
								rotation: {
									init: {
	        							x: Math.PI / 2,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: 0,
										y: 0,
										z: 0
	        						}
	        					}
							},
							{
								initP: 30,
								finalP: 35,
								position: {
									init: {
	        							x: -2,
										y: 3,
										z: 0
	        						},
	        						final: {
	        							x: -12,
										y: 8.5,
										z: 100
	        						}
	        					},
	        					rotation: {
									init: {
	        							x: 0,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: 3 * Math.PI/2,
										y: Math.PI/2,
										z: Math.PI/2
	        						}
	        					}
							},
							{
								initP: 42,
								finalP: 44,
								rotation: {
									init: {
	        							x: 3 * Math.PI/2,
										y: Math.PI/2,
										z: Math.PI/2
	        						},
	        						final: {
	        							x: 0,
										y: 0,
										z: 0
	        						}
	        					}
							},
							{
								initP: 46,
								finalP: 48,
								rotation: {
									init: {
	        							x: 0,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: Math.PI / 2,
										y: 0,
										z: 0
	        						}
	        					}
							},
							{
								initP: 50,
								finalP: 52,
								rotation: {
									init: {
	        							x: Math.PI / 2,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: 0,
										y: 0,
										z: 0
	        						}
	        					}
							},
							{
								initP: 54,
								finalP: 56,
								rotation: {
									init: {
	        							x: 0,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: Math.PI / 2,
										y: 0,
										z: 0
	        						}
	        					}
							},
							{
								initP: 58,
								finalP: 60,
								rotation: {
									init: {
	        							x: Math.PI / 2,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: 0,
										y: 0,
										z: 0
	        						}
	        					}
							},
							{
								initP: 82,
								finalP: 84,
								rotation: {
									init: {
	        							x: 0,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: 3 * Math.PI/2,
										y: Math.PI/2,
										z: Math.PI/2
	        						}
	        					}
							}
						]
					}
				},
				{					id: "b-int",
					assetType: "plane",
					hide: true,
					options: {
						texture: false,
						color: {
							init: _KEY
						},
						size: {
							w: 11,
							h: 78
						},
						rotation: {
							x: Math.PI  /2,
							y: 0,
							z: Math.PI
						},
						position: {
							x: -4,
							y: -10,
							z: 18
						},
						anims: [
							{
								initP: 0,
								finalP: 2,
								position: {
									init: {
	        							x: -6.5,
										y: -10,
										z: 38
	        						},
	        						final: {
	        							x: -6.5,
										y: -2,
										z: 38
	        						}
	        					}
							},
							{
								initP: 42,
								finalP: 44,
								color: {
									init: {
										_KEY
									},
	        						final: {
	        							_RED
	        						}
	        					}
							},
							{
								initP: 46,
								finalP: 48,
								color: {
									init: {
										_RED
									},
	        						final: {
	        							_ROSE
	        						}
	        					}
							},
							{
								initP: 50,
								finalP: 52,
								color: {
									init: {
										_ROSE
									},
	        						final: {
	        							_RED
	        						}
	        					}
							},
							{
								initP: 54,
								finalP: 56,
								color: {
									init: {
										_RED
									},
	        						final: {
	        							_ROSE
	        						}
	        					}
							},
							{
								initP: 58,
								finalP: 60,
								color: {
									init: {
										_RED
									},
	        						final: {
	        							_ROSE
	        						}
	        					}
							},
							{
								initP: 62,
								finalP: 64,
								color: {
									init: {
										_ROSE
									},
	        						final: {
	        							_RED
	        						}
	        					}
							},
							{
								initP: 70,
								finalP: 72,
								color: {
									init: {
										_RED
									},
	        						final: {
	        							_ORANGE
	        						}
	        					}
							},
							{
								initP: 82,
								finalP: 84,
								color: {
									init: {
										_ORANGE
									},
	        						final: {
	        							_KEY
	        						}
	        					}
							},
							{
								initP: 95,
								finalP: 97,
								opacity: {
									init: 1,
	        						final: 0
	        					}
							}		
						]
					}
				},
				{					id: "b-avsignal-symbol",
					assetType: "cube",
					texture: "av",
					options: {
						color: {
							init: _BLUE1
						},
						size: {
							w: 1,
							h: 1,
							d: 1
						},
						rotation: {
							x: 0,
							y: Math.PI / 2,
							z: 0
						},
						position: {
							x: -2,
							y: -8,
							z: 0
						},
						anims: [
							{
								initP: 30,
								finalP: 35,
								position: {
									init: {
	        							x: -2,
										y: -8,
										z: 0
	        						},
	        						final: {
	        							x: -2,
										y: 3,
										z: 0
	        						}
	        					}
							},
							{
								initP: 38,
								finalP: 43,
								position: {
									init: {
	        							x: -2,
										y: 3,
										z: 0
	        						},
	        						final: {
	        							x: -12,
										y: 3.5,
										z: 100
	        						}
	        					}
							},
							{
								initP: 62,
								finalP: 64,
								rotation: {
									init: {
	        							x: 3 * Math.PI / 2,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: 3 * Math.PI / 2,
										y: 0,
										z: 3 * Math.PI / 2
	        						}
	        					}
							},
							{
								initP: 70,
								finalP: 72,
								rotation: {
									init: {
	        							x: 3 * Math.PI / 2,
										y: 0,
										z: 3 * Math.PI / 2
	        						},
	        						final: {
	        							x: Math.PI / 2,
										y: 0,
										z: 0
	        						}
	        					}
							},
							{
								initP: 74,
								finalP: 76,
								rotation: {
									init: {
	        							x: Math.PI / 2,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: Math.PI,
										y: 0,
										z: 0
	        						}
	        					}
							},
							{
								initP: 78,
								finalP: 80,
								rotation: {
									init: {
	        							x: Math.PI,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: 0,
										y: 0,
										z: 0
	        						}
	        					}
							},
							{
								initP: 82,
								finalP: 84,
								rotation: {
									init: {
	        							x: 0,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: 0,
										y: Math.PI /2,
										z: 0
	        						}
	        					}
							}	
						]
					}
				},
				{					id: "b-avsignal-qr",
					assetType: "cube",
					texture: "qr",
					options: {
						color: {
							init: _BLUE1
						},
						size: {
							w: 1,
							h: 1,
							d: 1
						},
						rotation: {
							x: 0,
							y: 0,
							z: 0
						},
						position: {
							x: -2,
							y: -9,
							z: 0
						},
						anims: [
							{
								initP: 30,
								finalP: 35,
								position: {
									init: {
	        							x: -2,
										y: -9,
										z: 0
	        						},
	        						final: {
	        							x: -2,
										y: 2,
										z: 0
	        						}
	        					}
							},
							{
								initP: 30,
								finalP: 33,
								rotation: {
									init: {
	        							x: 0,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: 0,
										y: Math.PI / 2,
										z: 0
	        						}
	        					}
							},
							{
								initP: 38,
								finalP: 43,
								position: {
									init: {
	        							x: -2,
										y: 2,
										z: 0
	        						},
	        						final: {
	        							x: -12,
										y: 2.5,
										z: 100
	        						}
	        					}
							},
							{
								initP: 42,
								finalP: 44,
								rotation: {
									init: {
	        							x: 0,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: 0,
										y: Math.PI / 2,
										z: 0
	        						}
	        					}
							},
							{
								initP: 62,
								finalP: 64,
								rotation: {
									init: {
	        							x: 0,
										y: Math.PI / 2,
										z: 0
	        						},
	        						final: {
	        							x: 0,
										y: Math.PI,
										z: 0
	        						}
	        					}
							},
							{
								initP: 70,
								finalP: 72,
								rotation: {
									init: {
	        							x: 0,
										y: Math.PI,
										z: 0
	        						},
	        						final: {
	        							x: 0,
										y: Math.PI,
										z: Math.PI
	        						}
	        					}
							},
							{
								initP: 82,
								finalP: 84,
								rotation: {
									init: {
	        							x: 0,
										y: Math.PI,
										z: Math.PI
	        						},
	        						final: {
	        							x: 0,
										y: 0,
										z: 0
	        						}
	        					}
							}
						]
					}
				},
				{					id: "b-mini-pedsignal-symbol",
					assetType: "cube",
					texture: "ped",
					options: {
						color: {
							init: _KEY
						},
						size: {
							w: 1,
							h: 1,
							d: 1
						},
						rotation: {
							x: 3 * Math.PI/2,
							y: Math.PI/2,
							z: Math.PI/2
						},
						position: {
							x: 0,
							y: -7.5,
							z: 0
						},
						anims: [
							{
								initP: 38,
								finalP: 40,
								position: {
									init: {
	        							x: 0,
										y: -7.5,
										z: 0
	        						},
	        						final: {
	        							x: 0,
										y: 4.5,
										z: 0
	        						}
	        					}
							},
							{
								initP: 42,
								finalP: 44,
								rotation: {
									init: {
	        							x: 3 * Math.PI/2,
										y: Math.PI/2,
										z: Math.PI/2
	        						},
	        						final: {
	        							x: 0,
										y: 0,
										z: 0
	        						}
	        					}
							},
							{
								initP: 46,
								finalP: 48,
								rotation: {
									init: {
	        							x: 0,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: Math.PI / 2,
										y: 0,
										z: 0
	        						}
	        					}
							},
							{
								initP: 50,
								finalP: 52,
								rotation: {
									init: {
	        							x: Math.PI / 2,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: 0,
										y: 0,
										z: 0
	        						}
	        					}
							},
							{
								initP: 54,
								finalP: 56,
								rotation: {
									init: {
	        							x: 0,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: Math.PI / 2,
										y: 0,
										z: 0
	        						}
	        					}
							},
							{
								initP: 58,
								finalP: 60,
								rotation: {
									init: {
	        							x: Math.PI / 2,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: 0,
										y: 0,
										z: 0
	        						}
	        					}
							},
							{
								initP: 82,
								finalP: 84,
								rotation: {
									init: {
	        							x: 0,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: 3 * Math.PI/2,
										y: Math.PI/2,
										z: Math.PI/2
	        						}
	        					}
							}
							
						]
					}
				},
				{					id: "b-mini-pedsignal-timer",
					assetType: "cube",
					texture: "timer",
					options: {
						color: {
							init: _KEY
						},
						size: {
							w: 1,
							h: 1,
							d: 1
						},
						rotation: {
							x: 0,
							y: 0,
							z: 0
						},
						position: {
							x: 0,
							y: -8.5,
							z: 0
						},
						anims: [
							{
								initP: 38,
								finalP: 40,
								position: {
									init: {
	        							x: 0,
										y: -8.5,
										z: 0
	        						},
	        						final: {
	        							x: 0,
										y: 3.5,
										z: 0
	        						}
	        					}
							},
							{
								initP: 42,
								finalP: 44,
								rotation: {
									init: {
	        							x: 0,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: Math.PI / 2,
										y: 0,
										z: 0
	        						}
	        					}
							},
							{
								initP: 46,
								finalP: 48,
								rotation: {
									init: {
	        							x: Math.PI / 2,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: Math.PI,
										y: 0,
										z: 0
	        						}
	        					}
							},
							{
								initP: 50,
								finalP: 52,
								rotation: {
									init: {
	        							x: Math.PI,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: 3 * Math.PI / 2,
										y: 0,
										z: 0
	        						}
	        					}
							},
							{
								initP: 54,
								finalP: 56,
								rotation: {
									init: {
	        							x: 3 * Math.PI / 2,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: 3 * Math.PI / 2,
										y: 0,
										z: Math.PI / 2
	        						}
	        					}
							},
							{
								initP: 58,
								finalP: 60,
								rotation: {
									init: {
	        							x: 3 * Math.PI / 2,
										y: 0,
										z: Math.PI / 2
	        						},
	        						final: {
	        							x: 3 * Math.PI / 2,
										y: 0,
										z: 3 * Math.PI / 2
	        						}
	        					}
							},
							{
								initP: 62,
								finalP: 64,
								rotation: {
									init: {
	        							x: 3 * Math.PI / 2,
										y: 0,
										z: 3 * Math.PI / 2
	        						},
	        						final: {
	        							x: 0,
										y: 0,
										z: 0
	        						}
	        					}
							}
							
						]
					}
				},
				{					id: "b-mini-avsignal-symbol",
					assetType: "cube",
					texture: "av",
					options: {
						color: {
							init: _BLUE1
						},
						size: {
							w: 1,
							h: 1,
							d: 1
						},
						rotation: {
							x: 0,
							y: Math.PI / 2,
							z: 0
						},
						position: {
							x: 0,
							y: -10.5,
							z: 0
						},
						anims: [
							{
								initP: 38,
								finalP: 40,
								position: {
									init: {
	        							x: 0,
										y: -10.5,
										z: 0
	        						},
	        						final: {
	        							x: 0,
										y: 1.5,
										z: 0
	        						}
	        					}
							},
							{
								initP: 42,
								finalP: 44,
								rotation: {
									init: {
	        							x: 0,
										y: Math.PI / 2,
										z: 0
	        						},
	        						final: {
	        							x: 3 * Math.PI / 2,
										y: 0,
										z: 0
	        						}
	        					}
							},
							{
								initP: 62,
								finalP: 64,
								rotation: {
									init: {
	        							x: 3 * Math.PI / 2,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: 3 * Math.PI / 2,
										y: 0,
										z: 3 * Math.PI / 2
	        						}
	        					}
							},
							{
								initP: 70,
								finalP: 72,
								rotation: {
									init: {
	        							x: 3 * Math.PI / 2,
										y: 0,
										z: 3 * Math.PI / 2
	        						},
	        						final: {
	        							x: Math.PI / 2,
										y: 0,
										z: 0
	        						}
	        					}
							},
							{
								initP: 74,
								finalP: 76,
								rotation: {
									init: {
	        							x: Math.PI / 2,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: Math.PI,
										y: 0,
										z: 0
	        						}
	        					}
							},
							{
								initP: 78,
								finalP: 80,
								rotation: {
									init: {
	        							x: Math.PI,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: 0,
										y: 0,
										z: 0
	        						}
	        					}
							},
							{
								initP: 82,
								finalP: 84,
								rotation: {
									init: {
	        							x: 0,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: 0,
										y: Math.PI /2,
										z: 0
	        						}
	        					}
							}							
						]
					}
				},
				{					id: "b-mini-avsignal-qr",
					assetType: "cube",
					texture: "qr",
					options: {
						color: {
							init: _BLUE1
						},
						size: {
							w: 1,
							h: 1,
							d: 1
						},
						rotation: {
							x: 0,
							y: 0,
							z: 0
						},
						position: {
							x: 0,
							y: -11.5,
							z: 0
						},
						anims: [
							{
								initP: 38,
								finalP: 40,
								position: {
									init: {
	        							x: 0,
										y: -11.5,
										z: 0
	        						},
	        						final: {
	        							x: 0,
										y: 0.5,
										z: 0
	        						}
	        					}
							},
							{
								initP: 42,
								finalP: 44,
								rotation: {
									init: {
	        							x: 0,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: 0,
										y: Math.PI / 2,
										z: 0
	        						}
	        					}
							},
							{
								initP: 62,
								finalP: 64,
								rotation: {
									init: {
	        							x: 0,
										y: Math.PI / 2,
										z: 0
	        						},
	        						final: {
	        							x: 0,
										y: Math.PI,
										z: 0
	        						}
	        					}
							},
							{
								initP: 70,
								finalP: 72,
								rotation: {
									init: {
	        							x: 0,
										y: Math.PI,
										z: 0
	        						},
	        						final: {
	        							x: 0,
										y: Math.PI,
										z: Math.PI
	        						}
	        					}
							},
							{
								initP: 82,
								finalP: 84,
								rotation: {
									init: {
	        							x: 0,
										y: Math.PI,
										z: Math.PI
	        						},
	        						final: {
	        							x: 0,
										y: 0,
										z: 0
	        						}
	        					}
							}
							
						]
					}
				},
				{					id: "b-suitcase",
					assetType: "suitcase",
					hide: true,
					options: {
						color: {
							init: _KEY
						},
						size: {
							w: 1,
							h: 2,
							d: 2
						},
						position: {
							x: -3,
							y: 0,
							z: -20
						},
						rotation: {
							x: 0,
							y: _PT_N,
							z: 0
						},
						anims: [
							{								initP: 70,
								finalP: 84,
	        					position: {
									init: {
	        							x: -3,
										y: 0,
										z: -20
	        						},
	        						final: {
	        							x: -3,
										y: 0,
										z: 0
	        						}
	        					}
							},
							{								initP: 82,
								finalP: 90,
	        					position: {
									init: {
	        							x: -3,
										y: 0,
										z: 0
	        						},
	        						final: {
	        							x: -3,
										y: 0,
										z: 60
	        						}
	        					}
							}
						]
					}
				},
				{					id: "b-ped",
					assetType: "person",
					hide: true,
					options: {
						color: {
							init: _GREY
						},
						size: {
							w: 1,
							h: 1,
							d: 1
						},
						rotation: {
							x: 0,
							y: _PT_S,
							z: 0
						},
						position: {
							x: -4,
							y: 0,
							z: -20
						},
						anims: [						
							{								initP: 82,
								finalP: 95,
	        					position: {
									init: {
	        							x: -6,
										y: 0,
										z: -20
	        						},
	        						final: {
	        							x: -6,
										y: 0,
										z: 60
	        						}
	        					}
							}	
						]
					}
				}
			]
		}
	];