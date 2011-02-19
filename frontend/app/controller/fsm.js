app.core.Object.define("app.controller.Fsm", {
    extend: app.controller.Object,
    constructor: function (model) {
        arguments.callee.prototype.uper.apply(this, arguments); //call parent constructor
        
		this._init();
    },
    static: {
		BUSY: 1,
		CHANGE_OK: 2,
	},
    member: {
		lock: false,
		
		character: null,
		
		currentState: "init",
		
		_states: {},
		
		setCharacter: function(character) {
			this.character = character;
		},
		
		_loadStates: function() {
			var ALL_STATES = app.event.Object.ALL_STATES;
			
			for (var i in ALL_STATES) {
				var str = 'this._states.' + ALL_STATES[i] + ' = new app.model.state.' + ALL_STATES[i] + '()';
				eval(str);
			}
		},
		
		_init: function() {
			var ALL_STATES = app.event.Object.ALL_STATES;
			var counter = 0;
			//tutaj inicjalizacje wszystkich stanow
			var lastScript = document.getElementsByTagName("script");
			for(var i in ALL_STATES){
				counter++;
				console.log('loading state class: ' + ALL_STATES[i]); 
				console.log('to load: ' + counter + ' scripts');
			    var script = document.createElement("script");
				script.type = 'text/javascript';
			    script.src = "app/model/state/" + ALL_STATES[i] + ".js";
				script.scope = this;
				script.onload = function() {
					counter--;
					console.log('to load: ' + counter + ' scripts');
					if(counter == 0){
						//all scripts loaded
						this.scope._loadStates();
					}					
				};
			    lastScript[0].parentNode.appendChild(script);
			}

		},
		
		_unlock: function() {
			this.lock = false;
		},
		
		_lock: function(time) {
			this.lock = true;
			setTimeout(this._unlock, time);
		},
		
		requestState: function(newState) {
			console.log(newState);
			console.log(this._states);
			if(this.lock) return app.controller.Fsm.BUSY;
			
			this._states[newState].activate();
			this.currentState = newState;
			return app.controller.Fsm.CHANGE_OK;
		},
		
		getState: function() {
			return this.currentState;
		},
		
		forceState: function(newState) {
			this._states[newState].activate();
			this.currentState = newState;			
		}
	}
});
