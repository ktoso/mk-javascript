app.core.Object.define("app.model.state", {
    extend: app.model.Object,
    constructor: function () {
        arguments.callee.prototype.uper.apply(this, arguments); //call parent constructor
    },
    static: {},
    member: {
		active: false,
		
		nextState: "standing",
		
		music: "",
		
		fsm: null,
		
		queueingAllowed: true,
		
		activate: function(fsm) {
			if(this.lockTime) fsm._lock(this.lockTime, this.nextState);
			this.active = true;
		},
		
		deactivate: function(fsm) {
			this.active = false;
			fsm.lock = false;
			if (fsm.processQueue()) {
				//console.log('no states in queue');
				fsm.forceState(this.nextState);
			}
		},
		
		playSound: function() {
			//todo
		}			
	}
});
