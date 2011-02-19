app.core.Object.define("app.event.Object", {
    extend: app.core.Object,
    constructor: function ()
    {
        arguments.callee.prototype.uper.apply(this, arguments); //call parent constructor
    },
    static: {
        ALL_STATES: {
            DEFAULT: 'standing',
            LEFT: 'walkLeft',
            JUMP: 'jump',
            RIGHT: 'walkRight',
            CROUCH: 'crouch',
            HIGH_PUNCH: 'highPunch',
            LOW_PUNCH: 'lowPunch',
            HIGH_KICK: 'highKick',
            LOW_KICK: 'lowKick'
        }
    },
    member: {
    }
});
