app.core.Object.define("app.model.state.highKick", {
    extend: app.model.state,
    constructor: function () {
        arguments.callee.prototype.uper.apply(this, arguments); //call parent constructor
    },
    static: {},
    member: {
		state: "highKick",
		
		lockTime: 1000,
		
		possibleTransitions: [
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
