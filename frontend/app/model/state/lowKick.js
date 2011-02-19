app.core.Object.define("app.model.state.lowKick", {
    extend: app.model.state,
    constructor: function () {
        arguments.callee.prototype.uper.apply(this, arguments); //call parent constructor
    },
    static: {},
    member: {
		state: "lowKick",
		
		lockTime: 1000,
		
		possibleTransistions: [
			'walkRight',
			'walkLeft',
			'jump',
			'crouch',
			'highPunch',
			'lowPunch',
			'highKick',
			'lowKick'
		]
	}
});
