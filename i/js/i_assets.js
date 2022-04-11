//camera
const fov = 40;
const aspect = 6;
const near = 0.1;
const far = 200;

/*var cameraPosX = 0;
var cameraPosY = 3.2;
var cameraPosZ = -16;
var cameraRotX = -3.21; //up/down
var cameraRotY = 0.033; //left/right
var cameraRotZ = -3.14;*/

var cameraPosX = 2.51;
var cameraPosY = 4.8;
var cameraPosZ = -16.2;
var cameraRotX = -3.17; //up/down
var cameraRotY = 0.113; //left/right
var cameraRotZ = -3.14;

//relative compass points in radians, for quick animation
var _PT_S = 3 * Math.PI / 2;
var _PT_N = Math.PI / 2;
var _PT_E = 0;
var _PT_W = Math.PI;

var assets = [
		{
			canvasSelector: "#canvasA",
			scrollInit: 10,
			scrollFinal: 33,
			assets: [
				{	id: "a-rightcar",
					assetType: "car",
					colorCode: "mint",
					hide: true,
					options: {
						
						size: {
							w: 1,
							h: 1,
							d: 1
						},
						rotation: {
							x: 0,
							y: _PT_W,
							z: 0
						},
						anims: [
							{
								initP: 0,
								finalP: 30,
								position: {
									init: {
	        							x: -2,
	        							y: 0,
	        							z: 100
	        						},
	        						final: {
	        							x: -2,
	        							y: 0,
	        							z: -20
	        						}
	        					}
							}	
						]
					}
				},
				{	id: "a-leftcar",
					assetType: "car",
					colorCode: "red",
					hide: true,
					options: {
						
						size: {
							w: 1,
							h: 1,
							d: 1
						},
						rotation: {
							x: 0,
							y: _PT_W,
							z: 0
						},
						position: {
							x: 3,
	        				y: 0,
	        				z: 100
						},
						anims: [
							{
								initP: 10,
								finalP: 27,
								position: {
									init: {
	        							x: 3,
	        							y: 0,
	        							z: 100
	        						},
	        						final: {
	        							x: 3,
	        							y: 0,
	        							z: -20
	        						}
	        					}
							}	
						]
					}
				},
				{	id: "a-cargoingnorth",
					assetType: "car",
					colorCode: "blue",
					hide: true,
					options: {
						
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
							x: -20,
	        				y: 0,
	        				z: 30
						},
						anims: [
							{
								initP: 40,
								finalP: 70,
								position: {
									init: {
	        							x: -20,
	        							y: 0,
	        							z: 30
	        						},
	        						final: {
	        							x: 30,
	        							y: 0,
	        							z: 30
	        						}
	        					}
							}	
						]
					}
				},
				{	id: "a-cargoingsouth",
					assetType: "car",
					colorCode: "blue",
					hide: true,
					options: {
						
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
							x: 20,
	        				y: 0,
	        				z: 25
						},
						anims: [
							{
								initP: 45,
								finalP: 85,
								position: {
									init: {
	        							x: 20,
	        							y: 0,
	        							z: 25
	        						},
	        						final: {
	        							x: -60,
	        							y: 0,
	        							z: 25
	        						}
	        					}
							}	
						]
					}
				},
				{	id: "a-carturning",
					assetType: "car",
					colorCode: "mint",
					hide: true,
					options: {
						
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
							x: -60,
	        				y: 0,
	        				z: 30
						},
						anims: [
							{
								initP: 50,
								finalP: 76,
								position: {
									init: {
	        							x: -60,
	        							y: 0,
	        							z: 30
	        						},
	        						final: {
	        							x: -3,
	        							y: 0,
	        							z: 30
	        						}
	        					}
							},
							{
								initP: 76,
								finalP: 94,
								position: {
									path: {
	        							aX: -3,
	        							aZ: 20,
	        							xRad: 10,
	        							zRad: 10,
	        							aStart: Math.PI / 2,
	        							aEnd: 2 * Math.PI,
	        							aAntiClock: true //reversed from spec due to xy-xz translation
	        						}
	        					},
	        					rotation: {
									init: {
	        							x: 0,
	        							y: _PT_N,
	        							z: 0
	        						},
	        						final: {
	        							x: 0,
	        							y: _PT_W,
	        							z: 0
	        						}
	        					}
							},
							{
								initP: 94,
								finalP: 100,
								position: {
									init: {
	        							x: 7,
	        							y: 0,
	        							z: 20
	        						},
	        						final: {
	        							x: 7,
	        							y: 0,
	        							z: -20
	        						}
	        					}
							},	
						]
					}
				},
				{	id: "a-intleft",
					assetType: "arrow",
					hide: true,
					options: {
						texture: false,
						color: {
							init: _KEY
						},
						size: {
							w: 2,
							h: 2
						},
						rotation: {
							x: Math.PI  /2,
							y: 0,
							z: Math.PI
						},
						position: {
							x: -4,
							y: -10,
							z: 30
						},
						opacity: 0.5,
						anims: [
							{
								initP: 0,
								finalP: 10,
								position: {
									init: {
	        							x: -4,
										y: -10,
										z: 30
	        						},
	        						final: {
	        							x: -4,
										y: 0,
										z: 30
	        						}
	        					}
							},
							{
								initP: 15,
								finalP: 20,
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
								initP: 30,
								finalP: 32,
								rotation: {
									init: {
	        							x: Math.PI  /2,
										y: 0,
										z: Math.PI
	        						},
	        						final: {
	        							x: Math.PI  /2,
										y: 0,
										z: -3 * Math.PI / 2
	        						}
	        					},
	        					position: {
	        						init: {
	        							x: -4,
										y: 0,
										z: 30
	        						},
	        						final: {
	        							x: -5,
										y: 0,
										z: 35
	        						}
	        					}
							},
							{
								initP: 30,
								finalP: 35,
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
								initP: 60,
								finalP: 70,
								color: {
									init: {
	        							_KEY
	        						},
	        						final: {
	        							_YELLOW
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
				{	id: "a-intright",
					assetType: "arrow",
					hide: true,
					options: {
						texture: false,
						color: {
							init: _KEY
						},
						size: {
							w: 2,
							h: 2
						},
						rotation: {
							x: Math.PI  /2,
							y: 0,
							z: Math.PI
						},
						position: {
							x: 4,
							y: -10,
							z: 35
						},
						opacity: 0.5,
						anims: [
							{
								initP: 0,
								finalP: 10,
								position: {
									init: {
	        							x: 4,
										y: -10,
										z: 30
	        						},
	        						final: {
	        							x: 4,
										y: 0,
										z: 30
	        						}
	        					}
							},
							{
								initP: 15,
								finalP: 20,
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
								initP: 30,
								finalP: 32,
								rotation: {
									init: {
	        							x: Math.PI  /2,
										y: 0,
										z: Math.PI
	        						},
	        						final: {
	        							x: Math.PI  /2,
										y: 0,
										z: 3 * Math.PI / 2
	        						}
	        					},
	        					position: {
	        						init: {
	        							x: 4,
										y: 0,
										z: 30
	        						},
	        						final: {
	        							x: 5,
										y: 0,
										z: 35
	        						}
	        					}
							},
							{
								initP: 30,
								finalP: 35,
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
								initP: 60,
								finalP: 70,
								color: {
									init: {
	        							_KEY
	        						},
	        						final: {
	        							_YELLOW
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
				}
			]
		},
		{
			canvasSelector: "#canvasB",
			scrollInit: 33,
			scrollFinal: 55,
			assets: [
				{	id: "b-mgr",
					assetType: "cube",
					hide: true,
					options: {
						color: {
							init: _WHITE
						},
						size: {
							w: 1,
							h: 5,
							d: 1
						},
						rotation: {
							x: 0,
							y: 0,
							z: 0
						},
						position: {
							x: -10,
							y: 0,
							z: 60
						},
						anims: [
							{
								initP: 0.1,
								finalP: 20,
								position: {
									init: {
	        							x: -10,
										y: 10,
										z: 60
	        						},
	        						final: {
	        							x: -10,
										y: 2,
										z: 60
										
	        						}
	        					}
							},
							{
								initP: 20,
								finalP: 30,
								color: {
									init: {
	        							_WHITE
	        						},
	        						final: {
	        							_RED
	        						}
	        					}
							},
							{
								initP: 35,
								finalP: 40,
								color: {
									init: {
	        							_RED
	        						},
	        						final: {
	        							_WHITE
	        						}
	        					}
							},
							{
								initP: 40,
								finalP: 45,
								color: {
									init: {
	        							_WHITE
	        						},
	        						final: {
	        							_RED
	        						}
	        					}
							},
							{
								initP: 50,
								finalP: 55,
								color: {
									init: {
	        							_RED
	        						},
	        						final: {
	        							_LILAC
	        						}
	        					}
							},
							{
								initP: 65,
								finalP: 70,
	        					color: {
									init: {
										_LILAC
									},
									final: {
										_BLUE2
									}
								}
							},
							{
								initP: 80,
								finalP: 85,
	        					color: {
									init: {
										_BLUE2
									},
									final: {
										_KEY
									}
								}
							},
							{
								initP: 95,
								finalP: 100,
	        					color: {
									init: {
										_KEY
									},
									final: {
										_RED
									}
								}
							}	
						]
					}
				},
				{	id: "b-int",
					assetType: "arrow",
					hide: true,
					options: {
						texture: false,
						color: {
							init: _WHITE
						},
						size: {
							w: 0,
							h: 0
						},
						rotation: {
							x: Math.PI  /2,
							y: 0,
							z: _PT_W
						},
						position: {
							x: 0,
							y: 0,
							z: 30
						},
						anims: [
							{
								initP: 0,
								finalP: 10,
								position: {
									init: {
	        							x: 0,
										y: -10,
										z: 30
	        						},
	        						final: {
	        							x: 0,
										y: 0,
										z: 30
	        						}
	        					}
							},
							{
								initP: 20,
								finalP: 30,
								color: {
									init: {
	        							_WHITE
	        						},
	        						final: {
	        							_RED
	        						}
	        					}
							},
							{
								initP: 35,
								finalP: 40,
								color: {
									init: {
	        							_RED
	        						},
	        						final: {
	        							_WHITE
	        						}
	        					}
							},
							{
								initP: 40,
								finalP: 45,
								color: {
									init: {
	        							_WHITE
	        						},
	        						final: {
	        							_RED
	        						}
	        					},
	        					size: {
									init: {
										w: 0,
										h: 0
										
									},
									final: {
										w: 2,
										h: 2
										
									}
								}
							},
							{
								initP: 50,
								finalP: 55,
								color: {
									init: {
	        							_RED
	        						},
	        						final: {
	        							_LILAC
	        						}
	        					}
							},
							{
								initP: 65,
								finalP: 70,
	        					color: {
									init: {
										_LILAC
									},
									final: {
										_BLUE2
									}
								},
								rotation: {
									init: {
										x: Math.PI  /2,
										y: 0,
										z: _PT_W
									},
									final: {
										x: Math.PI  /2,
										y: 0,
										z: _PT_S
									}
								}
							},
							{
								initP: 80,
								finalP: 85,
	        					color: {
									init: {
										_BLUE2
									},
									final: {
										_KEY
									}
								}
							},
							{
								initP: 95,
								finalP: 100,
	        					color: {
									init: {
										_KEY
									},
									final: {
										_RED
									}
								},
								size: {
									init: {
										w: 2,
										h: 2
										
									},
									final: {
										w: 0,
										h: 0
										
									}
								}
							}

						]
					}
				},
				{	id: "b-hilitecar",
					assetType: "car",
					colorCode: "key",
					hide: true,
					options: {
						
						size: {
							w: 1,
							h: 1,
							d: 1
						},
						rotation: {
							x: 0,
							y: _PT_W,
							z: 0
						},
						position: {	
							x: -2,
							y: 0,
							z: 100
						},
						anims: [
							{
								initP: 10,
								finalP: 20,
								position: {
									init: {
	        							x: -2,
	        							y: 0,
	        							z: 100
	        						},
	        						final: {
	        							x: -2,
	        							y: 0,
	        							z: 55
	        						}
	        					}
							},
							/*{
								initP: 23,
								finalP: 25,
								color: {
									init: {
										_KEY
									},
									final: {
										_GREY
									}
								}
							},
							{
								initP: 75,
								finalP: 82,
								color: {
									init: {
										_GREY
									},
									final: {
										_KEY
									}
								}
							},*/
							{
								initP: 82,
								finalP: 90,
								position: {
									path: {
	        							aX: 8,
	        							aZ: 45,
	        							xRad: 10,
	        							zRad: 10,
	        							aStart: Math.PI,
	        							aEnd: 3 / 2 * Math.PI,
	        							aAntiClock: false //reversed from spec due to xy-xz translation
	        						}
	        					},
	        					rotation: {
									init: {
	        							x: 0,
	        							y: _PT_W,
	        							z: 0
	        						},
	        						final: {
	        							x: 0,
	        							y: _PT_N,
	        							z: 0
	        						}
	        					}
							},
							{
								initP: 90,
								finalP: 100,
								position: {
									init: {
	        							x: 8,
	        							y: 0,
	        							z: 35
	        						},
	        						final: {
	        							x: 30,
	        							y: 0,
	        							z: 35
	        						}
	        					}
							},	
						]
					}
				},
				{	id: "b-hilitecube",
					assetType: "cube",
					hide: true,
					options: {
						color: {
							init: _KEY
						},
						size: {
							w: 0,
							h: 0,
							d: 0
						},
						rotation: {
							x: 0,
							y: 0,
							z: 0
						},
						position: {
							x: -2,
							y: 1,
							z: 55
						},
						anims: [
							{
								initP: 23,
								finalP: 25,
								position: {
									init: {
	        							x: -2,
										y: 1,
										z: 55
	        						},
	        						final: {
	        							x: -2,
										y: 3,
										z: 55
	        						}
	        					},

	        					size: {
	        						init: {
	        							w: 0,
	        							h: 0,
	        							d: 0
	        						},
	        						final: {
	        							w: 1,
	        							h: 1,
	        							d: 1
	        						}
	        					}
							},
							{
								initP: 25,
								finalP: 35,
								position: {
									init: {
	        							x: -2,
										y: 3,
										z: 55
	        						},
	        						final: {
	        							x: -10,
										y: 6,
										z: 60
	        						}
	        					},
	        					rotation: {
	        						init: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						},
	        						final: {
	        							x: 2 * Math.PI,
	        							y: 2 * Math.PI,
	        							z: 2 * Math.PI
	        						}
	        					}
							},
							{
								initP: 35,
								finalP: 40,
								position: {
									init: {
	        							x: -10,
										y: 6,
										z: 60
	        						},
	        						final: {
	        							x: -10,
										y: 2,
										z: 60.5
	        						}
	        					},
	        					size: {
	        						init: {
	        							w: 1,
	        							h: 1,
	        							d: 1
	        						},
	        						final: {
	        							w: 0.5,
	        							d: 0.5,
	        							h: 0.5
	        						}	
	        					},
	        					rotation: {
	        						init: {
	        							x: 2 * Math.PI,
	        							y: 2 * Math.PI,
	        							z: 2 * Math.PI
	        						},
	        						final: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						}	
	        					}
							},
							{
								initP: 40,
								finalP: 45,
								position: {
									init: {
	        							x: -10,
										y: 2,
										z: 60.5
	        						},
	        						final: {
	        							x: -9,
										y: 2,
										z: 60
	        						}
	        					},
	        					size: {
	        						init: {
	        							w: 0.5,
	        							d: 0.5,
	        							h: 0.5
	        						},
	        						final: {
	        							w: 1,
	        							d: 1,
	        							h: 1
	        						}	
	        					}
							},
							{
								initP: 85,
								finalP: 90,
	        					size: {
	        						init: {
	        							w: 1,
	        							d: 1,
	        							h: 1
	        						},
	        						final: {
	        							w: 0,
	        							d: 0,
	        							h: 0
	        						}	
	        					}
							}	
						]
					}
				},
				{	id: "b-bluecar",
					assetType: "car",
					colorCode: "blue2",
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
						rotation: {
							x: 0,
							y: _PT_N,
							z: 0
						},
						position: {	
							x: -50,
	        				y: 0,
	        				z: 25
						},
						anims: [
							{
								initP: 10,
								finalP: 20,
								position: {
									init: {
	        							x: -50,
	        							y: 0,
	        							z: 25
	        						},
	        						final: {
	        							x: -10,
	        							y: 0,
	        							z: 25
	        						}
	        					}
							},
							/*{
								initP: 23,
								finalP: 25,
								color: {
									init: {
										_ROSE
									},
									final: {
										_GREY
									}
								}
							},
							{
								initP: 65,
								finalP: 70,
	        					color: {
									init: {
										_GREY
									},
									final: {
										_ROSE
									}
								}
							},*/
							{
								initP: 70,
								finalP: 85,
	        					position: {
									init: {
	        							x: -10,
	        							y: 0,
	        							z: 25
	        						},
	        						final: {
	        							x: 40,
	        							y: 0,
	        							z: 25
	        						}
	        					}
							}	
						]
					}
				},
				{	id: "b-bluecube",
					assetType: "cube",
					hide: true,
					options: {
						color: {
							init: _BLUE2
						},
						size: {
							w: 0,
							h: 0,
							d: 0
						},
						rotation: {
							x: 0,
							y: 0,
							z: 0
						},
						position: {
							x: -10,
							y: 1,
							z: 25
						},
						anims: [
							{
								initP: 23,
								finalP: 25,
								position: {
									init: {
	        							x: -10,
										y: 1,
										z: 25
	        						},
	        						final: {
	        							x: -10,
										y: 3,
										z: 25
	        						}
	        					},
	        					size: {
	        						init: {
	        							w: 0,
	        							h: 0,
	        							d: 0
	        						},
	        						final: {
	        							w: 1,
	        							h: 1,
	        							d: 1
	        						}
	        					}
							},
							{
								initP: 25,
								finalP: 35,
								position: {
									init: {
	        							x: -10,
										y: 3,
										z: 25
	        						},
	        						final: {
	        							x: -10,
										y: 8,
										z: 60
	        						}
	        					},
	        					rotation: {
	        						init: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						},
	        						final: {
	        							x: 2 * Math.PI,
	        							y: 2 * Math.PI,
	        							z: 2 * Math.PI
	        						}
	        					}
							},
							{
								initP: 35,
								finalP: 40,
								position: {
									init: {
	        							x: -10,
										y: 8,
										z: 60
	        						},
	        						final: {
	        							x: -10,
										y: 3,
										z: 60.5
	        						}
	        					},
	        					size: {
	        						init: {
	        							w: 1,
	        							h: 1,
	        							d: 1
	        						},
	        						final: {
	        							w: 0.5,
	        							d: 0.5,
	        							h: 0.5
	        						}	
	        					},
	        					rotation: {
	        						init: {
	        							x: 2 * Math.PI,
	        							y: 2 * Math.PI,
	        							z: 2 * Math.PI
	        						},
	        						final: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						}	
	        					}
							},
							{
								initP: 40,
								finalP: 45,
								position: {
									init: {
	        							x: -10,
										y: 3,
										z: 60.5
	        						},
	        						final: {
	        							x: -9,
										y: 3,
										z: 60
	        						}
	        					},
	        					size: {
	        						init: {
	        							w: 0.5,
	        							d: 0.5,
	        							h: 0.5
	        						},
	        						final: {
	        							w: 1,
	        							d: 1,
	        							h: 1
	        						}	
	        					}
							},
							{
								initP: 70,
								finalP: 85,
	        					size: {
	        						init: {
	        							w: 1,
	        							d: 1,
	        							h: 1
	        						},
	        						final: {
	        							w: 0,
	        							d: 0,
	        							h: 0
	        						}	
	        					}
							}	
						]
					}
				},
				{	id: "b-lilaccar",
					assetType: "car",
					colorCode: "blue",
					hide: true,
					options: {
						
						size: {
							w: 1,
							h: 1,
							d: 1
						},
						rotation: {
							x: 0,
							y: _PT_W,
							z: 0
						},
						position: {	
							x: 3,
	        							y: 0,
	        							z: 100
						},
						anims: [
							{
								initP: 12,
								finalP: 19,
								position: {
									init: {
	        							x: 3,
	        							y: 0,
	        							z: 100
	        						},
	        						final: {
	        							x: 3,
	        							y: 0,
	        							z: 55
	        						}
	        					}
							},
							/*{
								initP: 23,
								finalP: 25,
								color: {
									init: {
										_LILAC
									},
									final: {
										_GREY
									}
								}
							},
							{
								initP: 50,
								finalP: 55,
								color: {
									init: {
										_GREY
									},
									final: {
										_LILAC
									}
								}
							},*/
							{
								initP: 55,
								finalP: 70,
								position: {
									init: {
	        							x: 3,
	        							y: 0,
	        							z: 55
	        						},
	        						final: {
	        							x: 3,
	        							y: 0,
	        							z: -30
	        						}
	        					}
							},	
						]
					}
				},
				{	id: "b-lilaccube",
					assetType: "cube",
					hide: true,
					options: {
						color: {
							init: _LILAC
						},
						size: {
							w: 0,
							h: 0,
							d: 0
						},
						rotation: {
							x: 0,
							y: 0,
							z: 0
						},
						position: {
							x: 3,
	        				y: 1,
	        				z: 55
						},
						anims: [
							{
								initP: 23,
								finalP: 25,
								position: {
									init: {
	        							x: 3,
										y: 1,
										z: 55
	        						},
	        						final: {
	        							x: 3,
										y: 3,
										z: 55
	        						}
	        					},
	        					size: {
	        						init: {
	        							w: 0,
	        							h: 0,
	        							d: 0
	        						},
	        						final: {
	        							w: 1,
	        							h: 1,
	        							d: 1
	        						}
	        					}
							},
							{
								initP: 25,
								finalP: 35,
								position: {
									init: {
	        							x: 3,
										y: 3,
										z: 55
	        						},
	        						final: {
	        							x: -10,
										y: 10,
										z: 60
	        						}
	        					},
	        					rotation: {
	        						init: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						},
	        						final: {
	        							x: 2 * Math.PI,
	        							y: 2 * Math.PI,
	        							z: 2 * Math.PI
	        						}
	        					}
							},
							{
								initP: 35,
								finalP: 40,
								position: {
									init: {
	        							x: -10,
										y: 10,
										z: 60
	        						},
	        						final: {
	        							x: -10,
										y: 4,
										z: 60.5
	        						}
	        					},
	        					size: {
	        						init: {
	        							w: 1,
	        							h: 1,
	        							d: 1
	        						},
	        						final: {
	        							w: 0.5,
	        							d: 0.5,
	        							h: 0.5
	        						}	
	        					},
	        					rotation: {
	        						init: {
	        							x: 2 * Math.PI,
	        							y: 2 * Math.PI,
	        							z: 2 * Math.PI
	        						},
	        						final: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						}	
	        					}
							},
							{
								initP: 40,
								finalP: 45,
								position: {
									init: {
	        							x: -10,
										y: 4,
										z: 60.5
	        						},
	        						final: {
	        							x: -9,
										y: 4,
										z: 60
	        						}
	        					},
	        					size: {
	        						init: {
	        							w: 0.5,
	        							d: 0.5,
	        							h: 0.5
	        						},
	        						final: {
	        							w: 1,
	        							d: 1,
	        							h: 1
	        						}	
	        					}
							},
							{
								initP: 55,
								finalP: 70,
	        					size: {
	        						init: {
	        							w: 1,
	        							d: 1,
	        							h: 1
	        						},
	        						final: {
	        							w: 0,
	        							d: 0,
	        							h: 0
	        						}	
	        					}
							}	
						]
					}
				}
			]
		},
		{
			canvasSelector: "#canvasC",
			scrollInit: 60,
			scrollFinal: 80,
			assets: [
				{id: "c-mgr",
					assetType: "cube",
					hide: true,
					options: {
						color: {
							init: _RED
						},
						size: {
							w: 1,
							h: 5,
							d: 1
						},
						rotation: {
							x: 0,
							y: 0,
							z: 0
						},
						position: {
							x: -10,
							y: 0,
							z: 60
						},
						anims: [
							{
								initP: 0.1,
								finalP: 20,
								position: {
									init: {
	        							x: -10,
										y: 10,
										z: 60
	        						},
	        						final: {
	        							x: -10,
										y: 2,
										z: 60
										
	        						}
	        					}
							},
							
							{
								initP: 55,
								finalP: 60,
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
								initP: 70,
								finalP: 75,
	        					color: {
									init: {
										_KEY
									},
									final: {
										_LILAC
									}
								}
							},
							{
								initP: 85,
								finalP: 90,
	        					color: {
									init: {
										_LILAC
									},
									final: {
										_BLUE2
									}
								}
							},
							{
								initP: 95,
								finalP: 100,
	        					color: {
									init: {
										_BLUE2
									},
									final: {
										_RED
									}
								}
							}	
						]
					}
				},
				{id: "c-int",
					assetType: "arrow",
					hide: true,
					options: {
						texture: false,
						color: {
							init: _RED
						},
						size: {
							w: 2,
							h: 2
						},
						rotation: {
							x: Math.PI  /2,
							y: 0,
							z: Math.PI
						},
						position: {
							x: 0,
							y: 0,
							z: 30
						},
						anims: [
							{
								initP: 0,
								finalP: 10,
								position: {
									init: {
	        							x: 0,
										y: -10,
										z: 30
	        						},
	        						final: {
	        							x: 0,
										y: 0,
										z: 30
	        						}
	        					}
							},
							{
								initP: 20,
								finalP: 30,
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
								initP: 55,
								finalP: 60,
								color: {
									init: {
	        							_RED
	        						},
	        						final: {
	        							_KEY
	        						}
	        					},
	        					rotation: {
									init: {
										x: Math.PI  /2,
										y: 0,
										z: _PT_W
									},
									final: {
										x: Math.PI  /2,
										y: 0,
										z: _PT_S
									}
								}
							},
							{
								initP: 70,
								finalP: 75,
	        					color: {
									init: {
										_KEY
									},
									final: {
										_LILAC
									}
								},
								rotation: {
									init: {
										x: Math.PI  /2,
										y: 0,
										z: _PT_S
									},
									final: {
										x: Math.PI  /2,
										y: 0,
										z: _PT_W
									}
								}
							},
							{
								initP: 85,
								finalP: 90,
	        					color: {
									init: {
										_LILAC
									},
									final: {
										_BLUE2
									}
								},
								rotation: {
									init: {
										x: Math.PI  /2,
										y: 0,
										z: _PT_W
									},
									final: {
										x: Math.PI  /2,
										y: 0,
										z: _PT_S
									}
								}
							},
							{
								initP: 95,
								finalP: 100,
	        					color: {
									init: {
										_BLUE2
									},
									final: {
										_RED
									}
								}
							}	
						]
					}
				},
				{id: "c-hilite-car1",
					assetType: "car",
					colorCode: "key",
					hide: true,
					options: {
						
						size: {
							w: 1,
							h: 1,
							d: 1
						},
						rotation: {
							x: 0,
							y: _PT_W,
							z: 0
						},
						position: {	
							x: -4,
	        							y: 0,
	        							z: 100
						},
						anims: [
							{
								initP: 10,
								finalP: 20,
								position: {
									init: {
	        							x: -4,
	        							y: 0,
	        							z: 100
	        						},
	        						final: {
	        							x: -4,
	        							y: 0,
	        							z: 55
	        						}
	        					}
							},
							/*{
								initP: 23,
								finalP: 25,
								color: {
									init: {
										_KEY
									},
									final: {
										_GREY
									}
								}
							},
							{
								initP: 55,
								finalP: 60,
								color: {
									init: {
										_GREY
									},
									final: {
										_KEY
									}
								}
							},*/
							{
								initP: 60,
								finalP: 70,
								position: {
									path: {
	        							aX: 7,
	        							aZ: 55,
	        							xRad: 10,
	        							zRad: 10,
	        							aStart: Math.PI,
	        							aEnd: 3 / 2 * Math.PI,
	        							aAntiClock: false //reversed from spec due to xy-xz translation
	        						}
	        					},
	        					rotation: {
									init: {
	        							x: 0,
	        							y: _PT_W,
	        							z: 0
	        						},
	        						final: {
	        							x: 0,
	        							y: _PT_N,
	        							z: 0
	        						}
	        					}
							},
							{
								initP: 70,
								finalP: 80,
								position: {
									init: {
	        							x: 7,
	        							y: 0,
	        							z: 45
	        						},
	        						final: {
	        							x: 50,
	        							y: 0,
	        							z: 45
	        						}
	        					}
							},	
						]
					}
				},
				{id: "c-hilitecube1",
					assetType: "cube",
					hide: true,
					options: {
						color: {
							init: _KEY
						},
						size: {
							w: 0,
							h: 0,
							d: 0
						},
						rotation: {
							x: 0,
							y: 0,
							z: 0
						},
						position: {
							x: -4,
							y: 1,
							z: 55
						},
						anims: [
							{
								initP: 23,
								finalP: 30,
								position: {
									init: {
	        							x: -4,
										y: 1,
										z: 55
	        						},
	        						final: {
	        							x: -4,
										y: 3,
										z: 55
	        						}
	        					},
	        					size: {
	        						init: {
	        							w: 0,
	        							h: 0,
	        							d: 0
	        						},
	        						final: {
	        							w: 1,
	        							h: 1,
	        							d: 1
	        						}
	        					}
							},
							{
								initP: 25,
								finalP: 35,
	        					rotation: {
	        						init: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						},
	        						final: {
	        							x: 2 * Math.PI,
	        							y: 2 * Math.PI,
	        							z: 2 * Math.PI
	        						}
	        					}
							},
							{
								initP: 35,
								finalP: 45,
								position: {
									init: {
	        							x: -4,
										y: 3,
										z: 55
	        						},
	        						final: {
	        							x: -10,
										y: 6,
										z: 60
	        						}
	        					},
	        					rotation: {
	        						init: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						},
	        						final: {
	        							x: 2 * Math.PI,
	        							y: 2 * Math.PI,
	        							z: 2 * Math.PI
	        						}
	        					}
							},
							{
								initP: 45,
								finalP: 50,
								position: {
									init: {
	        							x: -10,
										y: 6,
										z: 60
	        						},
	        						final: {
	        							x: -10,
										y: 2,
										z: 60.5
	        						}
	        					},
	        					size: {
	        						init: {
	        							w: 1,
	        							h: 1,
	        							d: 1
	        						},
	        						final: {
	        							w: 0.5,
	        							d: 0.5,
	        							h: 0.5
	        						}	
	        					},
	        					rotation: {
	        						init: {
	        							x: 2 * Math.PI,
	        							y: 2 * Math.PI,
	        							z: 2 * Math.PI
	        						},
	        						final: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						}	
	        					}
							},
							{
								initP: 50,
								finalP: 55,
								position: {
									init: {
	        							x: -10,
										y: 4,
										z: 60.5
	        						},
	        						final: {
	        							x: -9,
										y: 4,
										z: 60
	        						}
	        					},
	        					size: {
	        						init: {
	        							w: 0.5,
	        							d: 0.5,
	        							h: 0.5
	        						},
	        						final: {
	        							w: 1,
	        							d: 1,
	        							h: 1
	        						}	
	        					}
							},
							{
								initP: 60,
								finalP: 65,
	        					size: {
	        						init: {
	        							w: 1,
	        							d: 1,
	        							h: 1
	        						},
	        						final: {
	        							w: 0,
	        							d: 0,
	        							h: 0
	        						}	
	        					}
							}	
						]
					}
				},
				{id: "c-hilitecube2",
					assetType: "cube",
					hide: true,
					options: {
						color: {
							init: _KEY
						},
						size: {
							w: 0,
							h: 0,
							d: 0
						},
						rotation: {
							x: 0,
							y: 0,
							z: 0
						},
						position: {
							x: -4,
							y: 1,
							z: 55
						},
						anims: [
							{
								initP: 23,
								finalP: 30,
								position: {
									init: {
	        							x: -4,
										y: 1,
										z: 55
	        						},
	        						final: {
	        							x: -4,
										y: 5,
										z: 55
	        						}
	        					},
	        					size: {
	        						init: {
	        							w: 0,
	        							h: 0,
	        							d: 0
	        						},
	        						final: {
	        							w: 1,
	        							h: 1,
	        							d: 1
	        						}
	        					}
							},
							{
								initP: 25,
								finalP: 35,
	        					rotation: {
	        						init: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						},
	        						final: {
	        							x: 2 * Math.PI,
	        							y: 2 * Math.PI,
	        							z: 2 * Math.PI
	        						}
	        					}
							},
							{
								initP: 35,
								finalP: 45,
								position: {
									init: {
	        							x: -4,
										y: 5,
										z: 55
	        						},
	        						final: {
	        							x: -10,
										y: 8,
										z: 60
	        						}
	        					},
	        					rotation: {
	        						init: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						},
	        						final: {
	        							x: 2 * Math.PI,
	        							y: 2 * Math.PI,
	        							z: 2 * Math.PI
	        						}
	        					}
							},
							{
								initP: 45,
								finalP: 50,
								position: {
									init: {
	        							x: -10,
										y: 8,
										z: 60
	        						},
	        						final: {
	        							x: -10,
										y: 4,
										z: 60.5
	        						}
	        					},
	        					size: {
	        						init: {
	        							w: 1,
	        							h: 1,
	        							d: 1
	        						},
	        						final: {
	        							w: 0.5,
	        							d: 0.5,
	        							h: 0.5
	        						}	
	        					},
	        					rotation: {
	        						init: {
	        							x: 2 * Math.PI,
	        							y: 2 * Math.PI,
	        							z: 2 * Math.PI
	        						},
	        						final: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						}	
	        					}
							},
							{
								initP: 50,
								finalP: 55,
								position: {
									init: {
	        							x: -10,
										y: 4,
										z: 60.5
	        						},
	        						final: {
	        							x: -8,
										y: 4,
										z: 60
	        						}
	        					},
	        					size: {
	        						init: {
	        							w: 0.5,
	        							d: 0.5,
	        							h: 0.5
	        						},
	        						final: {
	        							w: 1,
	        							d: 1,
	        							h: 1
	        						}	
	        					}
							},
							{
								initP: 60,
								finalP: 65,
	        					size: {
	        						init: {
	        							w: 1,
	        							d: 1,
	        							h: 1
	        						},
	        						final: {
	        							w: 0,
	        							d: 0,
	        							h: 0
	        						}	
	        					}
							}	
						]
					}
				},
				{id: "c-hilitecube3",
					assetType: "cube",
					hide: true,
					options: {
						color: {
							init: _KEY
						},
						size: {
							w: 0,
							h: 0,
							d: 0
						},
						rotation: {
							x: 0,
							y: 0,
							z: 0
						},
						position: {
							x: -4,
							y: 1,
							z: 55
						},
						anims: [
							{
								initP: 23,
								finalP: 30,
								position: {
									init: {
	        							x: -4,
										y: 1,
										z: 55
	        						},
	        						final: {
	        							x: -4,
										y: 7,
										z: 55
	        						}
	        					},
	        					size: {
	        						init: {
	        							w: 0,
	        							h: 0,
	        							d: 0
	        						},
	        						final: {
	        							w: 1,
	        							h: 1,
	        							d: 1
	        						}
	        					}
							},
							{
								initP: 25,
								finalP: 35,
	        					rotation: {
	        						init: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						},
	        						final: {
	        							x: 2 * Math.PI,
	        							y: 2 * Math.PI,
	        							z: 2 * Math.PI
	        						}
	        					}
							},
							{
								initP: 35,
								finalP: 45,
								position: {
									init: {
	        							x: -4,
										y: 7,
										z: 55
	        						},
	        						final: {
	        							x: -10,
										y: 10,
										z: 60
	        						}
	        					},
	        					rotation: {
	        						init: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						},
	        						final: {
	        							x: 2 * Math.PI,
	        							y: 2 * Math.PI,
	        							z: 2 * Math.PI
	        						}
	        					}
							},
							{
								initP: 45,
								finalP: 50,
								position: {
									init: {
	        							x: -10,
										y: 10,
										z: 60
	        						},
	        						final: {
	        							x: -10,
										y: 4,
										z: 60.5
	        						}
	        					},
	        					size: {
	        						init: {
	        							w: 1,
	        							h: 1,
	        							d: 1
	        						},
	        						final: {
	        							w: 0.5,
	        							d: 0.5,
	        							h: 0.5
	        						}	
	        					},
	        					rotation: {
	        						init: {
	        							x: 2 * Math.PI,
	        							y: 2 * Math.PI,
	        							z: 2 * Math.PI
	        						},
	        						final: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						}	
	        					}
							},
							{
								initP: 50,
								finalP: 55,
								position: {
									init: {
	        							x: -10,
										y: 4,
										z: 60.5
	        						},
	        						final: {
	        							x: -7,
										y: 4,
										z: 60
	        						}
	        					},
	        					size: {
	        						init: {
	        							w: 0.5,
	        							d: 0.5,
	        							h: 0.5
	        						},
	        						final: {
	        							w: 1,
	        							d: 1,
	        							h: 1
	        						}	
	        					}
							},
							{
								initP: 60,
								finalP: 65,
	        					size: {
	        						init: {
	        							w: 1,
	        							d: 1,
	        							h: 1
	        						},
	        						final: {
	        							w: 0,
	        							d: 0,
	        							h: 0
	        						}	
	        					}
							}	
						]
					}
				},
				{id: "c-greencar",
					assetType: "car",
					colorCode: "blue2",
					hide: true,
					options: {
						
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
							x: -35,
	        							y: 0,
	        							z: 25
						},
						anims: [
							{
								initP: 10,
								finalP: 20,
								position: {
									init: {
	        							x: -35,
	        							y: 0,
	        							z: 25
	        						},
	        						final: {
	        							x: -10,
	        							y: 0,
	        							z: 25
	        						}
	        					}
							},
							/*{
								initP: 23,
								finalP: 25,
								color: {
									init: {
										_ROSE
									},
									final: {
										_GREY
									}
								}
							},
							{
								initP: 85,
								finalP: 90,
	        					color: {
									init: {
										_GREY
									},
									final: {
										_ROSE
									}
								}
							},*/
							{
								initP: 90,
								finalP: 100,
	        					position: {
									init: {
	        							x: -10,
	        							y: 0,
	        							z: 25
	        						},
	        						final: {
	        							x: 40,
	        							y: 0,
	        							z: 25
	        						}
	        					}
							}	
						]
					}
				},
				{id: "c-greencube",
					assetType: "cube",
					hide: true,
					options: {
						color: {
							init: _BLUE2
						},
						size: {
							w: 0,
							h: 0,
							d: 0
						},
						rotation: {
							x: 0,
							y: 0,
							z: 0
						},
						position: {
							x: -10,
							y: 1,
							z: 25
						},
						anims: [
							{
								initP: 23,
								finalP: 30,
								position: {
									init: {
	        							x: -10,
										y: 1,
										z: 25
	        						},
	        						final: {
	        							x: -10,
										y: 3,
										z: 25
	        						}
	        					},
	        					size: {
	        						init: {
	        							w: 0,
	        							h: 0,
	        							d: 0
	        						},
	        						final: {
	        							w: 1,
	        							h: 1,
	        							d: 1
	        						}
	        					}
							},
							{
								initP: 25,
								finalP: 35,
	        					rotation: {
	        						init: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						},
	        						final: {
	        							x: 2 * Math.PI,
	        							y: 2 * Math.PI,
	        							z: 2 * Math.PI
	        						}
	        					}
							},
							{
								initP: 35,
								finalP: 45,
								position: {
									init: {
	        							x: -10,
										y: 3,
										z: 25
	        						},
	        						final: {
	        							x: -10,
										y: 16,
										z: 60
	        						}
	        					},
	        					rotation: {
	        						init: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						},
	        						final: {
	        							x: 2 * Math.PI,
	        							y: 2 * Math.PI,
	        							z: 2 * Math.PI
	        						}
	        					}
							},
							{
								initP: 45,
								finalP: 50,
								position: {
									init: {
	        							x: -10,
										y: 16,
										z: 60
	        						},
	        						final: {
	        							x: -10,
										y: 2,
										z: 60.5
	        						}
	        					},
	        					size: {
	        						init: {
	        							w: 1,
	        							h: 1,
	        							d: 1
	        						},
	        						final: {
	        							w: 0.5,
	        							d: 0.5,
	        							h: 0.5
	        						}	
	        					},
	        					rotation: {
	        						init: {
	        							x: 2 * Math.PI,
	        							y: 2 * Math.PI,
	        							z: 2 * Math.PI
	        						},
	        						final: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						}	
	        					}
							},
							{
								initP: 50,
								finalP: 55,
								position: {
									init: {
	        							x: -10,
										y: 2,
										z: 60.5
	        						},
	        						final: {
	        							x: -9,
										y: 2,
										z: 60
	        						}
	        					},
	        					size: {
	        						init: {
	        							w: 0.5,
	        							d: 0.5,
	        							h: 0.5
	        						},
	        						final: {
	        							w: 1,
	        							d: 1,
	        							h: 1
	        						}	
	        					}
							},
							{
								initP: 90,
								finalP: 95,
	        					size: {
	        						init: {
	        							w: 1,
	        							d: 1,
	        							h: 1
	        						},
	        						final: {
	        							w: 0,
	        							d: 0,
	        							h: 0
	        						}	
	        					}
							}	
						]
					}
				},
				{id: "c-lilaccar",
					assetType: "car",
					colorCode: "blue",
					hide: true,
					options: {
						
						size: {
							w: 1,
							h: 1,
							d: 1
						},
						rotation: {
							x: 0,
							y: _PT_W,
							z: 0
						},
						position: {	
							x: 1,
	        							y: 0,
	        							z: 100
						},
						anims: [
							{
								initP: 12,
								finalP: 19,
								position: {
									init: {
	        							x: 1,
	        							y: 0,
	        							z: 100
	        						},
	        						final: {
	        							x: 1,
	        							y: 0,
	        							z: 55
	        						}
	        					}
							},
							/*{
								initP: 23,
								finalP: 25,
								color: {
									init: {
										_LILAC
									},
									final: {
										_GREY
									}
								}
							},
							{
								initP: 70,
								finalP: 75,
								color: {
									init: {
										_GREY
									},
									final: {
										_LILAC
									}
								}
							},*/
							{
								initP: 75,
								finalP: 85,
								position: {
									init: {
	        							x: 1,
	        							y: 0,
	        							z: 55
	        						},
	        						final: {
	        							x: 1,
	        							y: 0,
	        							z: -30
	        						}
	        					}
							},	
						]
					}
				},
				{id: "c-lilaccube1",
					assetType: "cube",
					hide: true,
					options: {
						color: {
							init: _LILAC
						},
						size: {
							w: 0,
							h: 0,
							d: 0
						},
						rotation: {
							x: 0,
							y: 0,
							z: 0
						},
						position: {
							x: 1,
	        				y: 1,
	        				z: 55
						},
						anims: [
							{
								initP: 23,
								finalP: 30,
								position: {
									init: {
	        							x: 1,
										y: 1,
										z: 55
	        						},
	        						final: {
	        							x: 1,
										y: 3,
										z: 55
	        						}
	        					},
	        					size: {
	        						init: {
	        							w: 0,
	        							h: 0,
	        							d: 0
	        						},
	        						final: {
	        							w: 1,
	        							h: 1,
	        							d: 1
	        						}
	        					}
							},
							{
								initP: 25,
								finalP: 35,
	        					rotation: {
	        						init: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						},
	        						final: {
	        							x: 2 * Math.PI,
	        							y: 2 * Math.PI,
	        							z: 2 * Math.PI
	        						}
	        					}
							},
							{
								initP: 35,
								finalP: 45,
								position: {
									init: {
	        							x: 1,
										y: 3,
										z: 55
	        						},
	        						final: {
	        							x: -10,
										y: 12,
										z: 60
	        						}
	        					},
	        					rotation: {
	        						init: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						},
	        						final: {
	        							x: 2 * Math.PI,
	        							y: 2 * Math.PI,
	        							z: 2 * Math.PI
	        						}
	        					}
							},
							{
								initP: 45,
								finalP: 50,
								position: {
									init: {
	        							x: -10,
										y: 12,
										z: 60
	        						},
	        						final: {
	        							x: -10,
										y: 3,
										z: 60.5
	        						}
	        					},
	        					size: {
	        						init: {
	        							w: 1,
	        							h: 1,
	        							d: 1
	        						},
	        						final: {
	        							w: 0.5,
	        							d: 0.5,
	        							h: 0.5
	        						}	
	        					},
	        					rotation: {
	        						init: {
	        							x: 2 * Math.PI,
	        							y: 2 * Math.PI,
	        							z: 2 * Math.PI
	        						},
	        						final: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						}	
	        					}
							},
							{
								initP: 50,
								finalP: 55,
								position: {
									init: {
	        							x: -10,
										y: 3,
										z: 60.5
	        						},
	        						final: {
	        							x: -9,
										y: 3,
										z: 60
	        						}
	        					},
	        					size: {
	        						init: {
	        							w: 0.5,
	        							d: 0.5,
	        							h: 0.5
	        						},
	        						final: {
	        							w: 1,
	        							d: 1,
	        							h: 1
	        						}	
	        					}
							},
							{
								initP: 75,
								finalP: 80,
	        					size: {
	        						init: {
	        							w: 1,
	        							d: 1,
	        							h: 1
	        						},
	        						final: {
	        							w: 0,
	        							d: 0,
	        							h: 0
	        						}	
	        					}
							}	
						]
					},
				},
				{id: "c-lilaccube2",
					assetType: "cube",
					hide: true,
					options: {
						color: {
							init: _LILAC
						},
						size: {
							w: 0,
							h: 0,
							d: 0
						},
						rotation: {
							x: 0,
							y: 0,
							z: 0
						},
						position: {
							x: 1,
	        				y: 1,
	        				z: 55
						},
						anims: [
							{
								initP: 23,
								finalP: 30,
								position: {
									init: {
	        							x: 1,
										y: 1,
										z: 55
	        						},
	        						final: {
	        							x: 1,
										y: 5,
										z: 55
	        						}
	        					},
	        					size: {
	        						init: {
	        							w: 0,
	        							h: 0,
	        							d: 0
	        						},
	        						final: {
	        							w: 1,
	        							h: 1,
	        							d: 1
	        						}
	        					}
							},
							{
								initP: 25,
								finalP: 35,
	        					rotation: {
	        						init: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						},
	        						final: {
	        							x: 2 * Math.PI,
	        							y: 2 * Math.PI,
	        							z: 2 * Math.PI
	        						}
	        					}
							},
							{
								initP: 35,
								finalP: 45,
								position: {
									init: {
	        							x: 1,
										y: 5,
										z: 55
	        						},
	        						final: {
	        							x: -10,
										y: 14,
										z: 60
	        						}
	        					},
	        					rotation: {
	        						init: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						},
	        						final: {
	        							x: 2 * Math.PI,
	        							y: 2 * Math.PI,
	        							z: 2 * Math.PI
	        						}
	        					}
							},
							{
								initP: 45,
								finalP: 50,
								position: {
									init: {
	        							x: -10,
										y: 14,
										z: 60
	        						},
	        						final: {
	        							x: -10,
										y: 3,
										z: 60.5
	        						}
	        					},
	        					size: {
	        						init: {
	        							w: 1,
	        							h: 1,
	        							d: 1
	        						},
	        						final: {
	        							w: 0.5,
	        							d: 0.5,
	        							h: 0.5
	        						}	
	        					},
	        					rotation: {
	        						init: {
	        							x: 2 * Math.PI,
	        							y: 2 * Math.PI,
	        							z: 2 * Math.PI
	        						},
	        						final: {
	        							x: 0,
	        							y: 0,
	        							z: 0
	        						}	
	        					}
							},
							{
								initP: 50,
								finalP: 55,
								position: {
									init: {
	        							x: -10,
										y: 3,
										z: 60.5
	        						},
	        						final: {
	        							x: -8,
										y: 3,
										z: 60
	        						}
	        					},
	        					size: {
	        						init: {
	        							w: 0.5,
	        							d: 0.5,
	        							h: 0.5
	        						},
	        						final: {
	        							w: 1,
	        							d: 1,
	        							h: 1
	        						}	
	        					}
							},
							{
								initP: 75,
								finalP: 80,
	        					size: {
	        						init: {
	        							w: 1,
	        							d: 1,
	        							h: 1
	        						},
	        						final: {
	        							w: 0,
	        							d: 0,
	        							h: 0
	        						}	
	        					}
							}
						]
					}
				}
			]
		},
		{
			canvasSelector: "#canvasD",
			scrollInit: 82,
			scrollFinal: 100,
			assets: [
				{id: "d-hilitecar1",
					assetType: "car",
					colorCode: "key",
					hide: true,
					options: {
						
						size: {
							w: 1,
							h: 1,
							d: 1
						},
						rotation: {
							x: 0,
							y: _PT_W,
							z: 0
						},
						position: {
							x: -4,
							y: 0,
							z: 100
						},
						anims: [
							{
								initP: 0,
								finalP: 30,
								position: {
									init: {
	        							x: -4,
	        							y: 0,
	        							z: 100
	        						},
	        						final: {
	        							x: -4,
	        							y: 0,
	        							z: 45
	        						}
	        					}
							},
							{
								initP: 50,
								finalP: 65,
								position: {
									path: {
	        							aX: 11,
	        							aZ: 40,
	        							xRad: 15,
	        							zRad: 20,
	        							aStart: Math.PI,
	        							aEnd: 3 / 2 * Math.PI,
	        							aAntiClock: false //reversed from spec due to xy-xz translation
	        						}
	        					},
	        					rotation: {
									init: {
	        							x: 0,
	        							y: _PT_W,
	        							z: 0
	        						},
	        						final: {
	        							x: 0,
	        							y: _PT_N,
	        							z: 0
	        						}
	        					}
	        				},
	        				{
								initP: 65,
								finalP: 70,
								position: {
									init: {
	        							x: 11,
	        							y: 0,
	        							z: 20
	        						},
	        						final: {
	        							x: 30,
	        							y: 0,
	        							z: 20
	        						}
	        					}
							}
						]
					}
				},
				{id: "d-hilitecube",
					assetType: "cube",
					hide: true,
					options: {
						color: {
							init: _KEY
						},
						size: {
							w: 1,
							h: 1,
							d: 1
						},
						position: {
							x: -4,
	        				y: 4.5,
	        				z: 100
						},
						anims: [
							{
								initP: 0,
								finalP: 30,
								position: {
									init: {
	        							x: -4,
	        							y: 4.5,
	        							z: 100
	        						},
	        						final: {
	        							x: -4,
	        							y: 4.5,
	        							z: 45
	        						}
	        					}
							},
							{
								initP: 30,
								finalP: 34,
								color: {
									init: {
	        							_KEY
	        						},
	        						final: {
	        							_WHITE
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
	        							y: Math.PI,
	        							z: Math.PI
	        						}
	        					},
	        					position: {
	        						init: {
	        							x: -4,
	        							y: 4.5,
	        							z: 45
	        						},
	        						final: {
	        							x: -4,
	        							y: 4.7,
	        							z: 45
	        						}
	        					},
	        					size: {
	        						init: {
	        							w: 1,
		    							h: 1,
	    								d: 1
	    							},
	    							final: {
	        							w: 2.2,
		    							h: 2.2,
	    								d: 2.2
	    							}
	    						}
							},
							{
								initP: 34,
								finalP: 38,
								color: {
									init: {
	        							_WHITE
	        						},
	        						final: {
	        							_LILAC
	        						}
	        					},
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
	        					},
	        					position: {
	        						init: {
	        							x: -4,
	        							y: 4.7,
	        							z: 45
	        						},
	        						final: {
	        							x: -3.5,
	        							y: 4.5,
	        							z: 45
	        						}
	        					},
	        					size: {
	        						init: {
	        							w: 2.2,
		    							h: 2.2,
	    								d: 2.2
	    							},
	    							final: {
	        							w: 2,
		    							h: 2,
	    								d: 2
	    							}
	    						}
							},
							{
								initP: 42,
								finalP:50,
								color: {
									init: {
	        							_LILAC
	        						},
	        						final: {
	        							_KEY
	        						}
	        					},
	        					
	        					size: {
	        						init: {
	        							w: 2,
		    							h: 2,
	    								d: 2
	    							},
	    							final: {
	        							w: 1,
		    							h: 1,
	    								d: 1
	    							}
	    						},
	    						position: {
	    							init: {
	        							x: -3.5,
	        							y: 4.5,
	        							z: 45
	        						},
	        						final: {
	        							x: -3.5,
	        							y: 4,
	        							z: 45
	        						}
	    						}
							},
							{
								initP: 50,
								finalP: 65,
								position: {
									path: {
	        							aX: 11,
	        							aZ: 40,
	        							xRad: 15,
	        							zRad: 20,
	        							aStart: Math.PI,
	        							aEnd: 3 / 2 * Math.PI,
	        							aAntiClock: false //reversed from spec due to xy-xz translation
	        						}
	        					}
	        					
	        				},
	        				{
								initP: 65,
								finalP: 70,
								position: {
									init: {
	        							x: 11,
	        							y: 4.5,
	        							z: 20
	        						},
	        						final: {
	        							x: 30,
	        							y: 4.5,
	        							z: 20
	        						}
	        					}
							}
								
						]
					}
				},
				/*{
					id: "c-hilite-checkneck",
					assetType: "cube",
					hide: true,
					options: {
						color: {
							init: _KEY
						},
						size: {
							w: 3,
							h: 1,
							d: 1
						},
						rotation: {
							x: 0,
							y: 0,
							z: -1 * Math.PI / 4
						},
						position: {
							x: -4,
	        				y: 5,
	        				z: 100
						},
						text: "What?",
						anims: [
							{
								initP: 0,
								finalP: 30,
								position: {
									init: {
	        							x: -5,
	        							y: 5,
	        							z: 100
	        						},
	        						final: {
	        							x: -5,
	        							y: 5,
	        							z: 45
	        						}
	        					}
							},
							{
								initP: 30,
								finalP: 35,
								rotation: {
									init: {
	        							x: 0,
										y: 0,
										z: -1 * Math.PI / 4
	        						},
	        						final: {
	        							x: 0,
	        							y: 0,
	        							z: -1 * Math.PI / 2
	        						}
	        					},
	        					position: {
	        						init: {
	        							x: -5,
	        							y: 5,
	        							z: 45
	        						},
	        						final: {
	        							x: -4,
	        							y: 6,
	        							z: 45
	        						}
	        					}
							}
								
						]
					}
				},*/
				{id: "d-rosecar",
					assetType: "car",
					colorCode: "red",
					hide: true,
					options: {
						
						size: {
							w: 1,
							h: 1,
							d: 1
						},
						rotation: {
							x: 0,
							y: _PT_W,
							z: 0
						},
						position: {
							x: 3,
	        				y: 0,
	        				z: 100
						},
						anims: [
							{
								initP: 10,
								finalP: 27,
								position: {
									init: {
	        							x: 3,
	        							y: 0,
	        							z: 100
	        						},
	        						final: {
	        							x: 3,
	        							y: 0,
	        							z: 40
	        						}
	        					}
							},
							{
								initP: 50,
								finalP: 53,
								position: {
									init: {
	        							x: 3,
	        							y: 0,
	        							z: 40
	        						},
	        						final: {
	        							x: 3,
	        							y: 0,
	        							z: 38
	        						}
	        					}
							},
							{
								initP: 70,
								finalP:80,
								position: {
									init: {
	        							x: 3,
	        							y: 0,
	        							z: 38
	        						},
	        						final: {
	        							x: 3,
	        							y: 0,
	        							z: -38
	        						}
	        					}
							}	
						]
					}
				},
				{id: "d-rosecube",
					assetType: "cube",
					hide: true,
					options: {
						color: {
							init: _RED
						},
						size: {
							w: 1,
							h: 1,
							d: 1
						},
						position: {
							x: 3,
	        				y: 4.5,
	        				z: 100
						},
						anims: [
							{
								initP: 0,
								finalP: 30,
								position: {
									init: {
	        							x: 3,
	        							y: 4.5,
	        							z: 100
	        						},
	        						final: {
	        							x: 3,
	        							y: 4.5,
	        							z: 45
	        						}
	        					}
							},
							{
								initP: 30,
								finalP: 34,
								color: {
									init: {
	        							_RED
	        						},
	        						final: {
	        							_WHITE
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
	        							y: Math.PI,
	        							z: Math.PI
	        						}
	        					},
	        					position: {
	        						init: {
	        							x: 3,
	        							y: 4.5,
	        							z: 45
	        						},
	        						final: {
	        							x: 3,
	        							y: 4.7,
	        							z: 45
	        						}
	        					},
	        					size: {
	        						init: {
	        							w: 1,
		    							h: 1,
	    								d: 1
	    							},
	    							final: {
	        							w: 2.2,
		    							h: 2.2,
	    								d: 2.2
	    							}
	    						}
							},
							{
								initP: 34,
								finalP: 38,
								color: {
									init: {
	        							_WHITE
	        						},
	        						final: {
	        							_LILAC
	        						}
	        					},
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
	        					},
	        					position: {
	        						init: {
	        							x: 3,
	        							y: 4.7,
	        							z: 45
	        						},
	        						final: {
	        							x: 3,
	        							y: 4.5,
	        							z: 45
	        						}
	        					},
	        					size: {
	        						init: {
	        							w: 2.2,
		    							h: 2.2,
	    								d: 2.2
	    							},
	    							final: {
	        							w: 2,
		    							h: 2,
	    								d: 2
	    							}
	    						}
							},
							{
								initP: 42,
								finalP:50,
								color: {
									init: {
	        							_LILAC
	        						},
	        						final: {
	        							_RED
	        						}
	        					},
	        					
	        					size: {
	        						init: {
	        							w: 2,
		    							h: 2,
	    								d: 2
	    							},
	    							final: {
	        							w: 1,
		    							h: 1,
	    								d: 1
	    							}
	    						}
							},
							{
								initP: 50,
								finalP: 53,
								color: {
									init: {
	        							_RED
	        						},
	        						final: {
	        							_WHITE
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
	        							y: Math.PI,
	        							z: Math.PI
	        						}
	        					},
	        					position: {
									init: {
	        							x: 3,
	        							y: 4.5,
	        							z: 40
	        						},
	        						final: {
	        							x: 3,
	        							y: 4.7,
	        							z: 38
	        						}
	        					},
	        					size: {
	        						init: {
	        							w: 1,
		    							h: 1,
	    								d: 1
	    							},
	    							final: {
	        							w: 2.2,
		    							h: 2.2,
	    								d: 2.2
	    							}
	    						}
							},
							{
								initP: 53,
								finalP: 55,
								color: {
									init: {
	        							_WHITE
	        						},
	        						final: {
	        							_KEY
	        						}
	        					},
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
	        					},
	        					position: {
	        						init: {
	        							x: 3,
	        							y: 4.7,
	        							z: 38
	        						},
	        						final: {
	        							x: 3,
	        							y: 4.5,
	        							z: 38
	        						}
	        					},
	        					size: {
	        						init: {
	        							w: 2.2,
		    							h: 2.2,
	    								d: 2.2
	    							},
	    							final: {
	        							w: 2,
		    							h: 2,
	    								d: 2
	    							}
	    						}
							},
							{
								initP: 70,
								finalP:72,
								color: {
									init: {
	        							_KEY
	        						},
	        						final: {
	        							_RED
	        						}
	        					},
	        					size: {
	        						init: {
	        							w: 2,
		    							h: 2,
	    								d: 2
	    							},
	    							final: {
	        							w: 1,
		    							h: 1,
	    								d: 1
	    							}
	    						}
							},
							{
								initP: 70,
								finalP:80,
								
								position: {
									init: {
	        							x: 3,
	        							y: 4.5,
	        							z: 38
	        						},
	        						final: {
	        							x: 3,
	        							y: 4.5,
	        							z: -38
	        						}
	        					},
	        					
							}	
								
						]
					}
				},
				{id: "d-lilaccar",
					assetType: "car",
					colorCode: "blue",
					hide: true,
					options: {
						
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
							x: -30,
							y: 0,
							z: 35
						},
						anims: [
							{
								initP: 0,
								finalP: 40,
								position: {
									init: {
	        							x: -30,
	        							y: 0,
	        							z: 35
	        						},
	        						final: {
	        							x: -15,
	        							y: 0,
	        							z: 35
	        						}
	        					}
							},
							{
								initP: 40,
								finalP: 50,
								position: {
									path: {
	        							aX: -15,
	        							aZ: 15,
	        							xRad: 20,
	        							zRad: 20,
	        							aStart: Math.PI / 2,
	        							aEnd: 2 * Math.PI,
	        							aAntiClock: true //reversed from spec due to xy-xz translation
	        						}
	        					},
	        					rotation: {
									init: {
	        							x: 0,
	        							y: _PT_N,
	        							z: 0
	        						},
	        						final: {
	        							x: 0,
	        							y: _PT_W,
	        							z: 0
	        						}
	        					}
							},
							{
								initP: 50,
								finalP: 55,
								position: {
									init: {
	        							x: 5,
	        							y: 0,
	        							z: 15
	        						},
	        						final: {
	        							x: 5,
	        							y: 0,
	        							z: -20
	        						}
	        					}
							},	
						]
					}
				}
			]
		}
	];