app.core.Object.define("app.event.Object", {
    extend: app.core.Object,
    constructor: function ()
    {
        arguments.callee.prototype.uper.apply(this, arguments); //call parent constructor
    },
    static: {
        LEFT: 1,
        UP: 2,
        RIGHT: 3,
        DOWN: 4,
        HIGH_PUNCH: 5,
        LOW_PUNCH: 6,
        HIGH_KICK: 7,
        LOW_KICK: 8
    },
    member: {
    }
});
