app.core.Object.define("app.controller.Fsm", {
    extend: app.controller.Object,
    constructor: function (model) {
        arguments.callee.prototype.uper.apply(this, arguments); //call parent constructor
    },
    static: {},
    member: {
		
		lock: false,
		
		character: null,
		
		currentState: "init",
		
		setCharacter: function(character) {
			this.character = character;
		},
		
		_init: function() {
			//tutaj inicjalizacje wszystkich stanow
		},
		
		requestState: function(newState) {
			
		},
		
		getState: function() {
			return this.currentState;
		},
		
		forceState: function(newState) {
			
		}
	}
});
