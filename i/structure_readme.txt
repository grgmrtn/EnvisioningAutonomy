	<!--
		MODULE_CONTAINER
			MODULE_CHILD (S)
				ANIM_CANVAS - animation goes here
			STORY_PANEL_CONTAINER - every SPC needs at least one STORY_PANEL and one SPACER
			|	STORY_PANEL (S) - writing goes here
			|	STORY_SPACER (gives the STORY_PANEL something to float over)
			STORY_PANEL_CONTAINER
			|	STORY_SPACER - add a spacer before STORY_PANELS to give the first one room to leave
			|	STORY_PANEL (S)
			|	STORY_SPACER (gives the STORY_PANEL something to float over)
			MODULE_SPACER (makes sticky work, gives the MODULE_STICKY_CHILD something to float over)

		MODULE_CONTAINER
			MODULE_CHILD (S)
			...
	-->
	<!--story_panel_container is an invisible element that stays in scrolling DOM. This essentially sets a scroll start and end for its children to be visible based on its position in the DOM. Use one of these around each story_panel. story_panel_container's height is determined by the sum of its children's heights, but only the 'article' child will appear to stick at the top of the screen-->
	<!--each story_panel contains everything the user reads within a story-->
	<!--stays stuck until sibling below is finished scrolling, next story_panel_container grabs this one-->
	<!--Each story_spacer takes up the 'sacrifice scroll' that you want the user to do while the story panel stays on screen. Add one above for a lead-up and add one below for lingering.-->
