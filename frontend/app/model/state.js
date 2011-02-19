app.core.Object.define("app.model.state", {
    extend: app.model.Object,
    constructor: function () {
        arguments.callee.prototype.uper.apply(this, arguments); //call parent constructor
    },
    static: {},
    member: {
		state: "default",
		
		lockTime: 500,
		
		cssClass: "default",
		
		music: "",
		
		playSound: function() {
			//todo
		}			
	}
});
