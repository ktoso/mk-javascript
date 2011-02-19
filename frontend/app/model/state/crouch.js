app.core.Object.define("app.model.state.crouch", {
    extend: app.model.state,
    constructor: function () {
        arguments.callee.prototype.uper.apply(this, arguments); //call parent constructor
    },
    static: {},
    member: {
		state: "crouch",
		
		lockTime: 500,
		
		possibleTransistions: [
			'walkRight',
			'walkLeft',
			//'jump',
			'crouch',
			'highPunch',
			'lowPunch',
			'highKick',
			'lowKick'
		]
	}
});
