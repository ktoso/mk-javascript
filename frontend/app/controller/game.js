app.core.Object.define("app.controller.Game", {
    extend: app.controller.Object,
    constructor: function (model, view) {
        arguments.callee.prototype.uper.apply(this, arguments); //call parent constructor
    },
    static: {},
    member: {
		arena: null,
		character: null,
        character2: null,
		server: null,
		
		input: null,

		run: function() {
			this.arena = new app.controller.Arena(new app.model.Arena(), new app.view.Arena());
			this.arena.drawBackground();

            this._initServer();


            // create all players
            var playerId = 1

            var fsm = new app.controller.Fsm(new app.model.Fsm());
            this.character = new app.controller.Character(new app.model.Character('character' + playerId++), new app.view.Character(), this);
            fsm.setCharacter(this.character);

            var fsm2 = new app.controller.Fsm(new app.model.Fsm());
            this.character2 = new app.controller.Character(new app.model.Character('character' + playerId++), new app.view.Character(), this);
            fsm2.setCharacter(this.character2);


			this.bindInput();
		},

		_initServer: function() {
			var server = new io.Socket('192.168.0.114', {port: 3000});
			server.connect();
			
			server.on('connect', function() {
				console.log("send to server on connect");
			});	
			this.server = server;
		},

		bindInput: function() {
			var scope = this;

			$(window).keydown(function(event) {

			  var key = event.keyCode;

			  if(key >= 37 && key <= 40) {event.preventDefault();}

			  scope.input = new app.event.Keyboard(event);
			  var code = scope.input.getCode();
			  // false if event is not binded to any action
			  if(code) scope.character.runEvent(code);
			});
		}
	}
});
