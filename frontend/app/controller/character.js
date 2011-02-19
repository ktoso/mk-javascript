app.core.Object.define("app.controller.Character", {
    extend: app.controller.Object,
    constructor: function (model, view, fsm) {
        arguments.callee.prototype.uper.apply(this, arguments); //call parent constructor
        this.fsm = fsm;
    },
    static: {},
    member: {

		fsm: null,
		
		event: function(e) {
			//sprawdzic w maszynie stanow czy mozna
		},
		
		_move: function() {
			
		},
		
		_jump: function() {
			
		},
	}
});

