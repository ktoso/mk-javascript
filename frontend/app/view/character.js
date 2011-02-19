app.core.Object.define("app.view.Character", {
    extend: app.view.Object,
    constructor: function (model)
    {
        arguments.callee.prototype.uper.apply(this, arguments); //call parent constructor
        this._init();
    },
    static: {},
    member: {
        id: null, // DOM ID

        _init: function(){
            this.id = 'character-1';
        }
    }
});
