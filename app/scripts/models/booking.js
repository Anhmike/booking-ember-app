App.Booking = DS.Model.extend({

    TOLERANCE_MINUTES: 20,

    name: DS.attr('string'),

    date: DS.attr('date'),

    peopleNum: DS.attr('number'),

    phone: DS.attr('number'),

    email: DS.attr('string'),

    note: DS.attr('string'),

    seated: DS.attr('boolean'),

    expired: function() {
        if (this.get('date')) {
            var bookingDate = new Date(this.get('date'));
            var expiration = new Date();
            expiration.setMinutes(expiration.getMinutes() - this.TOLERANCE_MINUTES);
            var diff = expiration - bookingDate;
            return diff > 0;
        }
    }.property('seated')

});

