app.core.Object.define("app.model.state.jump", {
    extend: app.model.state,
    constructor: function () {
        arguments.callee.prototype.uper.apply(this, arguments); //call parent constructor
    },
    static: {},
    member: {
		state: "jump",
		
		lockTime: 0,
		
		possibleTransistions: [
			//'walkRight',
			//'walkLeft',
			//'jump',
			//'crouch',
			//'highPunch',
			//'lowPunch',
			//'highKick',
			//'lowKick'
		]
	}
});
