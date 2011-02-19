app.core.Object.define("app.controller.Character", {
    extend: app.controller.Object,
    constructor: function (model, view, fsm) {
        arguments.callee.prototype.uper.apply(this, arguments); //call parent constructor
        this.fsm = fsm;
    },
    static: {},
    member: {

		fsm: null,

		runEvent: function(e) {
            var state = this.fsm.requestState(e);

            _setupDirection();
            // sprawdzic w maszynie stanow czy mozna
		},
		
		_move: function() {
			
		},
		
		_jump: function() {
			
		},

        _setupDirection: function setupDirection() {
            if (_model.directionLeft) {
                _view.addClass(_model.id, 'left');
            } else {
                _view.removeClass(_model.id, 'right')
            }
        }
	}
});

