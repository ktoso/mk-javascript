app.core.Object.define("app.controller.Game", {
    extend: app.controller.Object,
    constructor: function (model, view) {
        arguments.callee.prototype.uper.apply(this, arguments); //call parent constructor
    },
    static: {},
    member: {
		// dopisać tworzenie obiektow
		arena: null,
		character: null,
		fsm: null,
		
		input: null,
		
		run: function() {
			this.arena = new app.controller.Arena(new app.model.Arena(), new app.view.Arena());
			this.fsm = new app.controller.Fsm(new app.model.Fsm());
			this.character = new app.controller.Character(new app.model.Character(), new app.view.Character(), this.fsm);
			this.fsm.setCharacter(this.character);
			
			this.bindInput();
		},
		
		bindInput: function() {
			$(window).keydown(function(event) {
			  var key = event.keyCode;	
			
			  if(key >= 37 && key <= 40) {event.preventDefault();}

			  this.input = new app.event.Keyboard(event);
			});				
		},
	}
});
