app.core.Object.define("app.controller.Character", {
    extend: app.controller.Object,
    constructor: function (model, view, fsm) {
        arguments.callee.prototype.uper.apply(this, arguments); //call parent constructor
        this.fsm = fsm;
		
		this._model = model;
		this._view = view;
    },
    static: {},
    member: {

		fsm: null,

		runEvent: function(e) {
            var state = this.fsm.requestState(e);
			if(app.controller.Fsm.CHANGE_OK) {
				//wywolac co trzeba bo stan udalo sie zmienic
				
	            this._setupDirection();
	            // sprawdzic w maszynie stanow czy mozna				
			};

		},
		
		_move: function() {
			
		},
		
		_jump: function() {
			
		},

        _setupDirection: function setupDirection() {
            if (this._model.directionLeft) {
                this._view.addClass(this._model.id, 'left');
            } else {
                this._view.removeClass(this._model.id, 'right')
            }
        }
	}
});

