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
			    var script = document.createElement("script");
				script.type = 'text/javascript';
			    script.src = "app/model/state/" + ALL_STATES[i] + ".js";
				script.scope = this;
				script.onload = function() {
					counter--;
					if(counter == 0){
						//all scripts loaded
						this.scope._loadStates();
					}					
				};
			    lastScript[0].parentNode.appendChild(script);
			}

		},

		_lock: function(time, nextState) {
			this.lock = true;
			setTimeout(app.model.state.prototype.deactivate.bind(this._states[nextState], this), time);
		},
		
		requestState: function(newState) {
			console.log('FSM: requested state: ' + newState);
			if (this.lock) {
				console.log('FSM: busy, no change. Current state: ' + this.currentState);
				return app.controller.Fsm.BUSY;
			}
			
			console.log('FSM: ok, change. Previous state: ' + this.currentState + ', new state: ' + newState);
			this._states[newState].activate(this);
			this.currentState = newState;

            // todo refactor this
            if (newState == app.event.Object.ALL_STATES.LEFT) {
                this.character._model.directionLeft = true;
            } else if (newState == app.event.Object.ALL_STATES.RIGHT) {
                this.character._model.directionLeft = false;
            }

			return app.controller.Fsm.CHANGE_OK;
		},

		getState: function() {
			return this.currentState;
		},
		
		forceState: function(newState) {
			console.log(newState);
			this._states[newState].activate();
			this.currentState = newState;			
		}
	}
});
