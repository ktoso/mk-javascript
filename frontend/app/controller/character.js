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

		runEvent: function(e) {
            var state = this.fsm.requestState(e);
			if(app.controller.Fsm.CHANGE_OK) {
				
				//wywolac co trzeba bo stan udalo sie zmienic
				
	            this._setupDirection(state);
	            // sprawdzic w maszynie stanow czy mozna				
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

