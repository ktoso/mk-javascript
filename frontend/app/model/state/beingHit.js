app.core.Object.define("app.model.state.beingHit", {
    extend: app.model.state,
    constructor: function () {
        arguments.callee.prototype.uper.apply(this, arguments); //call parent constructor
    },
    static: {},
    member: {
		state: "beingHit",
		
		lockTime: 0,
		
<<<<<<< HEAD
		possibleTransistions: [
=======
		possibleTransitions: [
>>>>>>> 3441ee9c68f22bfc4565609cc3ef54ecd6760172
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
