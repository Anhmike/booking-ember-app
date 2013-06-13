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

//    destroy: function () {
//        if (!confirm('Are you sure?')) return;
//        this.get('model').deleteRecord();
//        this.get('store').commit();
//        this.get('target.router').transitionTo('bookings');
//    }
});

App.BookingsIndexController = Ember.ArrayController.extend({
    detail: function(selectedBooking) {
        this.get('target').transitionTo('booking', selectedBooking);
    }
});

App.ApplicationController = Ember.ObjectController.extend({
    create: function() {
        this.get('target').transitionTo('bookings.new');
    }
});