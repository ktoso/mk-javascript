app.core.Object.define("app.controller.Fsm", {
    extend: app.controller.Object,
    constructor: function (model) {
        arguments.callee.prototype.uper.apply(this, arguments); //call parent constructor
        
		this._init();
    },
    static: {},
    member: {
		lock: false,
		
		character: null,
		
		currentState: "init",
		
		_states: {},
		
		setCharacter: function(character) {
			this.character = character;
		},
		
		_init: function() {
			//tutaj inicjalizacje wszystkich stanow
			var obj = new app.event.Object();
			var lastScript = document.getElementsByTagName("script");
			for(var i in obj.ALL_STATES){
			    var script = createElement("script");
			    script.src = "app/model/states/" + i + ".js";
			    lastScript.parentNode.appendChild(script);
				this._states[i] = new app.model.states[i]();
			}
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
