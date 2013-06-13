App.Booking = DS.Model.extend({

    /**
     * Minutes the customer can be late and the booking
     * is still assumed to be seated.
     */
    TOLERANCE_MINUTES: 20,

    name: DS.attr('string'),

    date: DS.attr('date'),

    peopleNum: DS.attr('number'),

    phone: DS.attr('number'),

    email: DS.attr('string'),

    note: DS.attr('string'),

    seated: DS.attr('boolean'),

    /**
     * Determines whether the booking has expired. It means whether the customers
     * are not likely to come. We give them TOLERANCE_MINUTES to be late, then
     * the booking is assumed to be expired.
     */
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

