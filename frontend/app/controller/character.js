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
            var state = fsm.requestState(e)
            if(_model.directionLeft){
                // he's moving left
                addClass('left');
            }
			// sprawdzic w maszynie stanow czy mozna
		},
		
		_move: function() {
			
		},
		
		_jump: function() {
			
		},
	}
});

