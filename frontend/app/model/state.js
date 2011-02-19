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
		
		activate: function(fsm) {
			if(this.lockTime) fsm._lock(this.lockTime);
			
			this.active = true;
		},
		
		playSound: function() {
			//todo
		}			
	}
});
