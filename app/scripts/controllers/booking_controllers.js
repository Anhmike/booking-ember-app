App.BookingsIndexController = Ember.ArrayController.extend({
    detail: function(selectedBooking) {
        this.get('target').transitionTo('booking', selectedBooking);
    }
});

App.BookingsNewController = Ember.Controller.extend({
    cancel: function() {
        this.cleanAndRedirect();
    },

    save: function() {
        App.Booking.createRecord(this);
        this.get('store').commit();
        this.cleanAndRedirect();
    },

    cleanAndRedirect: function() {
        this.set('name');
        this.set('date');
        this.set('peopleNum');
        this.set('phone');
        this.set('email');
        this.set('note');
        this.set('seated');
        this.transitionToRoute('bookings.index');
    }
});

App.BookingController = Ember.ObjectController.extend({

    seat: function() {
        console.log("Seating");

        this.set('seated', true);
        var booking = this.get('model');
        var transaction = booking.get('store').transaction();
        transaction.add(booking);
        transaction.commit();

        this.get('target').transitionTo('bookings.index');

    }

});