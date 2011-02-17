app.core.Object.define("app.event.Keyboard", {
    extend: app.event.Object,
    constructor: function (keyboardEvent) {
        arguments.callee.prototype.uper.apply(this, arguments); //call parent constructor

        if (!(keyboardEvent instanceof KeyboardEvent)) {
            throw new Error("keyboardEvent shloud be instance of KeyboardEvent"); 
        }
        
        this._init(keyboardEvent);

    },
    static: {},
    member: {
        _eventCode: null,
        _eventType: null,
        _init: function (keyboardEvent) {
            var eventCode;

            switch (keyboardEvent.keyCode) {
                case 37:
                    eventCode = app.event.Object.LEFT;
                    break; 
                case 38:
                    eventCode = app.event.Object.UP;
                    break; 
                case 39:
                    eventCode = app.event.Object.RIGHT;
                    break; 
                case 40:
                    eventCode = app.event.Object.DOWN;
                    break; 
                case 87:
                    eventCode = app.event.Object.HIGH_PUNCH;
                    break; 
                case 83:
                    eventCode = app.event.Object.LOW_PUNCH;
                    break; 
                case 81:
                    eventCode = app.event.Object.HIGH_KICK;
                    break; 
                case 65:
                    eventCode = app.event.Object.LOW_KICK;
                    break; 
            }

            this._eventCode = eventCode;  
            this._eventType = keyboardEvent.type;
        },

        getType: function () {
            return this._eventType; 
        },

        getCode: function () {
            return this._eventCode; 
        }
    }
});
