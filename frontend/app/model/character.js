app.core.Object.define("app.model.Character", {
    extend: app.model.Object,
    constructor: function (id)
    {
        arguments.callee.prototype.uper.apply(this, arguments); //call parent constructor
        this.id = id;
    },
    static: {},
    member: {
        id: null,

        health: 100,
        state: null,

        posX: null,
        posY: null,

        directionLeft: true, // true for left, false for right
    }
});
