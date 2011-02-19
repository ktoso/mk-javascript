app.core.Object.define("app.controller.State", {
    extend: app.controller.Object,
    constructor: function (model, view) {
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

