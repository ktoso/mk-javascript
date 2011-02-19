app.core.Object.define("app.model.Character", {
    extend: app.model.Object,
    constructor: function ()
    {
        arguments.callee.prototype.uper.apply(this, arguments); //call parent constructor
    },
    static: {},
    member: {
        health: 100,
        state: null,

        posX: null,
        posY: null,

        directionLeft: true, //true for left, false for right
    }
});
