const canvases = [
		initCanvas({
			canvasSelector: "#canvasA",
			scrollInit: 10,
			scrollFinal: 33,
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
					id: "a-hilitecar2",
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
							y: _PT_N,
							z: 0
						},
						anims: [
							{
								initP: 40,
								finalP: 70,
								position: {
									init: {
	        							x: -20,
	        							y: 0,
	        							z: 35
	        						},
	        						final: {
	        							x: 30,
	        							y: 0,
	        							z: 35
	        						}
	        					}
							}	
						]
					}
				},
				{
					id: "a-rosecar2",
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
							y: _PT_S,
							z: 0
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
					id: "a-lilaccar",
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
							y: _PT_N,
							z: 0
						},
						anims: [
							{
								initP: 50,
								finalP: 76,
								position: {
									init: {
	        							x: -30,
	        							y: 0,
	        							z: 35
	        						},
	        						final: {
	        							x: -3,
	        							y: 0,
	        							z: 35
	        						}
	        					}
							},
							{
								initP: 76,
								finalP: 94,
								position: {
									path: {
	        							aX: -3,
	        							aZ: 25,
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
	        							z: 25
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
								initP: 15,
								finalP: 20,
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
	        					size: {
	        						init: {
	        							w: 20,
	        							h: 50
	        						},
	        						final: {
	        							w: 20,
	        							h: 50
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
	        							_HILITE
	        						}
	        					}
							},
							{
								initP: 60,
								finalP: 70,
								color: {
									init: {
	        							_HILITE
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
			]
		}),
		initCanvas({
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
		}),
		initCanvas({
			canvasSelector: "#canvasC",
			scrollInit: 60,
			scrollFinal: 80,
			assets: [
				{
					id: "c-mgr",
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
								initP: 55,
								finalP: 60,
								color: {
									init: {
	        							_RED
	        						},
	        						final: {
	        							_HILITE
	        						}
	        					}
							},
							{
								initP: 70,
								finalP: 75,
	        					color: {
									init: {
										_HILITE
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
										_ROSE
									}
								}
							},
							{
								initP: 95,
								finalP: 100,
	        					color: {
									init: {
										_ROSE
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
					id: "c-int",
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
								initP: 55,
								finalP: 60,
								color: {
									init: {
	        							_RED
	        						},
	        						final: {
	        							_HILITE
	        						}
	        					}
							},
							{
								initP: 70,
								finalP: 75,
	        					color: {
									init: {
										_HILITE
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
										_ROSE
									}
								}
							},
							{
								initP: 95,
								finalP: 100,
	        					color: {
									init: {
										_ROSE
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
					id: "c-hilite-car1",
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
								initP: 55,
								finalP: 60,
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
								initP: 60,
								finalP: 70,
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
								initP: 70,
								finalP: 80,
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
					id: "c-hilitecube1",
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
				{
					id: "c-hilitecube2",
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
				{
					id: "c-hilitecube3",
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
				{
					id: "c-rosecar",
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
							},
							{
								initP: 90,
								finalP: 100,
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
					id: "c-rosecube",
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
								finalP: 30,
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
	        							x: -20,
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
				{
					id: "c-lilaccar",
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
							},
							{
								initP: 75,
								finalP: 85,
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
					id: "c-lilaccube1",
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
				{
					id: "c-lilaccube2",
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
		}),
		initCanvas({
			canvasSelector: "#canvasD",
			scrollInit: 82,
			scrollFinal: 100,
			assets: [
				{
					id: "d-hilitecar1",
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
	        							z: 45
	        						}
	        					}
							}
						]
					}
				},
				{
					id: "c-hilite-checkfoot",
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
	        							_HILITE
	        						},
	        						final: {
	        							_RED
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
	        							_RED
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
	        							x: -5,
	        							y: 4.7,
	        							z: 45
	        						},
	        						final: {
	        							x: -4.25,
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
							init: _HILITE
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
				{
					id: "d-rosecar",
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
	        							z: 40
	        						}
	        					}
							}	
						]
					}
				},
				{
					id: "d-lilaccar",
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
							y: _PT_N,
							z: 0
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
								initP: 76,
								finalP: 94,
								position: {
									path: {
	        							aX: -3,
	        							aZ: 25,
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
	        							z: 25
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
				}
			]
		}),
	];