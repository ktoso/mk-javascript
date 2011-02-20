app.core.Object.define("app.controller.Character", {
    extend: app.controller.Object,
    constructor: function (model, view, fsm) {
        arguments.callee.prototype.uper.apply(this, arguments); //call parent constructor
        this.fsm = fsm;
		
		this._model = model;
		this._view = view;
		
		this._init();
    },
    static: {},
    member: {

		fsm: null,

		_init: function() {
			var character = document.createElement('div');
			character.className = "character standing";
            character.id = this._model.id;
			var gameContainer = document.getElementById("gamecontainer");

			gameContainer.appendChild(character);
		},

		runEvent: function(state) {
            var status = this.fsm.requestState(state);
			if(status = app.controller.Fsm.CHANGE_OK) {
				
				//wywolac co trzeba bo stan udalo sie zmienic
	            
				switch(state) {
					case app.event.Object.ALL_STATES.DEFAULT:
					 	break;
					case app.event.Object.ALL_STATES.LEFT:
					case app.event.Object.ALL_STATES.RIGHT:
						this._setupDirection(state);
						this._move(state);
					 	break;
					case app.event.Object.ALL_STATES.JUMP:
					 	break;
					case app.event.Object.ALL_STATES.CROUCH:
					 	break;
					case app.event.Object.ALL_STATES.HIGH_PUNCH:
					 	break;
					case app.event.Object.ALL_STATES.LOW_PUNCH:
					 	break;
					case app.event.Object.ALL_STATES.HIGH_KICK:
					 	break;
					case app.event.Object.ALL_STATES.LOW_KICK:
					 	break;	
				}			
			};

		},
		
		_move: function() {
			
		},
		
		_jump: function() {
			
		},

        _setupDirection: function setupDirection(state) {
            if (this._model.directionLeft) {
                this._view.addClass(this._model.id, 'left');
                this._view.removeClass(this._model.id, 'right');

                console.log('CHAR: moving left');
            } else {
                this._view.addClass(this._model.id, 'right');
                this._view.removeClass(this._model.id, 'left');

                console.log('CHAR: moving right');
            }
        }
	}
});

