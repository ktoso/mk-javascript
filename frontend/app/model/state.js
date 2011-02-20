app.core.Object.define("app.model.state", {
    extend: app.model.Object,
    constructor: function () {
        arguments.callee.prototype.uper.apply(this, arguments); //call parent constructor
    },
    static: {},
    member: {
		active: false,
		
		nextState: "default",
		
		music: "",
		
		fsm: null,
		
		activate: function(fsm) {
			if(this.lockTime) fsm._lock(this.lockTime, this.nextState);
			this.active = true;
		},
		
		deactivate: function(fsm) {
			this.active = false;
			fsm.lock = false;
			app.controller.Fsm.prototype.forceState.bind(fsm, this.nextState);
		},
		
		playSound: function() {
			//todo
		}			
	}
});
