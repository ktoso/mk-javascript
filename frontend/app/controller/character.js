app.core.Object.define("app.controller.Character", {
    extend: app.controller.Object,
    constructor: function (model, view, fsm) {
        arguments.callee.prototype.uper.apply(this, arguments); //call parent constructor
        this.fsm = fsm;
    },
    static: {},
    member: {
		health: 100,
		state: null,
		
		posX: null,
		posY: null,
		
		directionLeft: true, //true for left, false for right
		
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

