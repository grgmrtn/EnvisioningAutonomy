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
					id: "a-hilitecar1",
					assetType: "car",
					hide: true,
					options: {
						color: {
							init: _HILITE
						},
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
				{
					id: "a-rosecar",
					assetType: "car",
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
				{
					id: "a-suitcasebody",
					assetType: "beetle",
					hide: true,
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
							x: -5,
							y: 2,
							z: 30
						},
						anims: [
							{
								initP: 0,
								finalP: 100,
								position: {
									init: {
	        							x: -5,
										y: 2,
										z: 30
	        						},
	        						final: {
	        							x: -5,
										y: 5,
										z: 30
	        						}
	        					}	
	        				}
						]
					}
				},
				{
					id: "a-suitcaselid",
					assetType: "cube",
					hide: true,
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
				},
				{
					id: "a-ball",
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
				},
				{
					id: "a-pedsignal",
					assetType: "cube",
					options: {
						color: {
							init: _HILITE
						},
						size: {
							w: 1,
							h: 2,
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
								finalP: 10,
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
				{
					id: "a-int",
					assetType: "plane",
					hide: true,
					options: {
						texture: false,
						color: {
							init: _HILITE
						},
						size: {
							w: 7,
							h: 50
						},
						rotation: {
							x: Math.PI  /2,
							y: 0,
							z: Math.PI
						},
						position: {
							x: -4,
							y: 0,
							z: 18
						},
						anims: [
							{
								initP: 0,
								finalP: 10,
								position: {
									init: {
	        							x: -4,
										y: -10,
										z: 18
	        						},
	        						final: {
	        							x: -4,
										y: 0,
										z: 18
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
			scrollInit: 33,
			scrollFinal: 55,
			assets: [
				{
					id: "b-mgr",
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
										_ROSE
									}
								}
							},
							{
								initP: 80,
								finalP: 85,
	        					color: {
									init: {
										_ROSE
									},
									final: {
										_HILITE
									}
								}
							},
							{
								initP: 95,
								finalP: 100,
	        					color: {
									init: {
										_HILITE
									},
									final: {
										_RED
									}
								}
							}	
						]
					}
				},
				{
					id: "b-int",
					assetType: "plane",
					hide: true,
					options: {
						texture: false,
						color: {
							init: _HILITE
						},
						size: {
							w: 20,
							h: 50
						},
						rotation: {
							x: Math.PI  /2,
							y: 0,
							z: Math.PI
						},
						position: {
							x: 0,
							y: 0,
							z: 40
						},
						anims: [
							{
								initP: 0,
								finalP: 10,
								position: {
									init: {
	        							x: 0,
										y: -10,
										z: 40
	        						},
	        						final: {
	        							x: 0,
										y: 0,
										z: 40
	        						}
	        					}
							},
							{
								initP: 20,
								finalP: 30,
								color: {
									init: {
	        							_HILITE
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
										_ROSE
									}
								}
							},
							{
								initP: 80,
								finalP: 85,
	        					color: {
									init: {
										_ROSE
									},
									final: {
										_HILITE
									}
								}
							},
							{
								initP: 95,
								finalP: 100,
	        					color: {
									init: {
										_HILITE
									},
									final: {
										_RED
									}
								}
							}

						]
					}
				},
				{
					id: "b-hilitecar",
					assetType: "car",
					hide: true,
					options: {
						color: {
							init: _HILITE
						},
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
							{
								initP: 23,
								finalP: 25,
								color: {
									init: {
										_HILITE
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
										_HILITE
									}
								}
							},
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
	        							z: 45
	        						},
	        						final: {
	        							x: 30,
	        							y: 0,
	        							z: 45
	        						}
	        					}
							},	
						]
					}
				},
				{
					id: "b-hilitecube",
					assetType: "cube",
					hide: true,
					options: {
						color: {
							init: _HILITE
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
							x: -4,
							y: 1,
							z: 55
						},
						anims: [
							{
								initP: 23,
								finalP: 25,
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
	        					}
							},
							{
								initP: 25,
								finalP: 35,
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
				{
					id: "b-rosecar",
					assetType: "car",
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
	        							x: -20,
	        							y: 0,
	        							z: 25
	        						}
	        					}
							},
							{
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
							},
							{
								initP: 70,
								finalP: 85,
	        					position: {
									init: {
	        							x: -20,
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
				{
					id: "b-rosecube",
					assetType: "cube",
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
							y: 0,
							z: 0
						},
						position: {
							x: -20,
							y: 1,
							z: 25
						},
						anims: [
							{
								initP: 23,
								finalP: 25,
								position: {
									init: {
	        							x: -20,
										y: 1,
										z: 25
	        						},
	        						final: {
	        							x: -20,
										y: 3,
										z: 25
	        						}
	        					}
							},
							{
								initP: 25,
								finalP: 35,
								position: {
									init: {
	        							x: -20,
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
				{
					id: "b-lilaccar",
					assetType: "car",
					hide: true,
					options: {
						color: {
							init: _LILAC
						},
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
							{
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
							},
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
				{
					id: "b-lilaccube",
					assetType: "cube",
					hide: true,
					options: {
						color: {
							init: _LILAC
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
							x: 1,
	        				y: 1,
	        				z: 55
						},
						anims: [
							{
								initP: 23,
								finalP: 25,
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
	        					}
							},
							{
								initP: 25,
								finalP: 35,
								position: {
									init: {
	        							x: 1,
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
		}
	];