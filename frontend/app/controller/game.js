app.core.Object.define("app.controller.Game", {
    extend: app.controller.Object,
    constructor: function (model, view) {
        arguments.callee.prototype.uper.apply(this, arguments); //call parent constructor
    },
    static: {},
    member: {
		arena: null,
		character: null,
		fsm: null,
		server: null,
		
		input: null,

		run: function() {
			this.arena = new app.controller.Arena(new app.model.Arena(), new app.view.Arena());
			this.arena.drawBackground();

			this.fsm = new app.controller.Fsm(new app.model.Fsm());

            // create all players
            var playerId = 1
            this.character = new app.controller.Character(new app.model.Character('character' + playerId), new app.view.Character(), this.fsm);
            this.fsm.setCharacter(this.character);

			this.bindInput();
			
			this._initServer();
		},

		_initServer: function() {
			var server = new io.Socket();
			server.on('connect', function() {
				server.send('hello');
			});
			this.server = server;
		},

		bindInput: function() {
			var scope = this;

			$(window).keydown(function(event) {

			  var key = event.keyCode;

			  if(key >= 37 && key <= 40) {event.preventDefault();}

			  scope.input = new app.event.Keyboard(event);
			  scope.character.runEvent(scope.input.getCode());
			});
		},
	}
});
