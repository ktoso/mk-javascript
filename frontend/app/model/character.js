app.core.Object.define("app.model.Character", {
    extend: app.model.Object,
    constructor: function (id, remote)
    {
        arguments.callee.prototype.uper.apply(this, arguments); //call parent constructor
        this.id = id;
		this.remote = remote;
		
		if(this.remote)
		{
			this.posX = 600;
			this.directionLeft = false;
		}
    },
    static: {},
    member: {
		remote;
		
        id: null,

        health: 100,
        state: "standing",

        posX: 30,
        posY: 195,

        directionLeft: true, // true for left, false for right
    }
});
