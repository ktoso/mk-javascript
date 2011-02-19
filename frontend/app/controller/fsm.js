app.core.Object.define("app.controller.Fsm", {
    extend: app.controller.Object,
    constructor: function (model) {
        arguments.callee.prototype.uper.apply(this, arguments); //call parent constructor
    },
    static: {},
    member: {
		character: null,
		
		setCharacter: function(character) {
			this.character = character;
		}
		
	}
});
