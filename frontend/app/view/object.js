app.core.Object.define("app.view.Object", {
    extend: app.core.Object,
    constructor: function (model) {
        arguments.callee.prototype.uper.apply(this, arguments); //call parent constructor
        this._model = model;
    },
    static: {},
    member: {
        _model: null,
        loadStylesheet: function (url) {
            var doc = this.getDocument(),
            link    = doc.createElement("link"),
            head    = doc.head;

            link.rel  = "stylesheet";
            link.type = "text/css";
            link.href = url;
            
            doc.head.appendChild(link);
        },
        removeClass: function (el, name) {
           console.log("removeClass " + name + " from " + el);
           $('#' + el).removeClass(name);
        },
        addClass: function (el, name) {
           console.log("addClass " + name + " to " + el);
           $('#' + el).addClass(name);
        }
    }
});
