app.core.Object.define("app.model.state.walkRight", {
    extend: app.model.state,
    constructor: function () {
        arguments.callee.prototype.uper.apply(this, arguments); //call parent constructor
    },
    static: {},
    member: {
		state: "walkRight",
		
		lockTime: 500,
		
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
