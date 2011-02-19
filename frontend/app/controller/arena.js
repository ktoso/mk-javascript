app.core.Object.define("app.controller.Arena", {
    extend: app.controller.Object,
    constructor: function (model, view) {
        arguments.callee.prototype.uper.apply(this, arguments); //call parent constructor
        
		this.drawBackground();
    },
    static: {},
    member: {
		health: 100,
		
		drawHealthbar: function() {
			
		},
		
		reduceHealth: function(dmg) {
			this.health -= dmg;
			this.drawHealthbar();
			if(this.health < 0) {/*death*/}
		},
		
		drawBackground: function() {
			// stworzyc element i wpakowac w konterener
		}			
	}
});
