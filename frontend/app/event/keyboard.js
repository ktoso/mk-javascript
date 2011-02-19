app.core.Object.define("app.event.Keyboard", {
    extend: app.event.Object,
    constructor: function (keyboardEvent) {
        arguments.callee.prototype.uper.apply(this, arguments); //call parent constructor

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
                    eventCode = app.event.Object.ALL_STATES.LEFT;
                    break; 
                case 38:
                    eventCode = app.event.Object.ALL_STATES.JUMP;
                    break; 
                case 39:
                    eventCode = app.event.Object.ALL_STATES.RIGHT;
                    break; 
                case 40:
                    eventCode = app.event.Object.ALL_STATES.CROUCH;
                    break; 
                case 87:
                    eventCode = app.event.Object.ALL_STATES.HIGH_PUNCH;
                    break; 
                case 83:
                    eventCode = app.event.Object.ALL_STATES.LOW_PUNCH;
                    break; 
                case 81:
                    eventCode = app.event.Object.ALL_STATES.HIGH_KICK;
                    break; 
                case 65:
                    eventCode = app.event.Object.ALL_STATES.LOW_KICK;
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
