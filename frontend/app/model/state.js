app.core.Object.define("app.model.state", {
    extend: app.model.Object,
    constructor: function () {
        arguments.callee.prototype.uper.apply(this, arguments); //call parent constructor
    },
    static: {},
    member: {
		state: "default",
		
		active: false,
		
		lockTime: 500,
		
		cssClass: "default",
		
		music: "",
		
		activate: function(fsm) {
			fsm._lock(this.lockTime);
			
			this.active = true;
		},
		
		playSound: function() {
			//todo
		}			
	}
});
