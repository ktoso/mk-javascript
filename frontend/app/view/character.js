app.core.Object.define("app.view.Character", {
    extend: app.view.Object,
    constructor: function (model)
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
