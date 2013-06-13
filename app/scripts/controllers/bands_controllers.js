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

App.BookingIndexController = Ember.Controller.extend({

    isEditing: false,

    startEditing: function() {
        // add the contact and its associated phone numbers to a local transaction
        var band = this.get('model');
        var transaction = band.get('store').transaction();
        transaction.add(band);
        this.transaction = transaction;
        this.set('isEditing', true);
    },

    stopEditing: function() {
        // rollback the local transaction if it hasn't already been cleared
        var transaction = this.transaction;
        if (transaction) {
            transaction.rollback();
            this.transaction = undefined;
        }
        // TODO FIX THIS
        this.set('isEditing', false);
        this.startEditing();
//        this.transitionTo('bands');
    },

    save: function() {
        this.transaction.commit();
        this.transaction = undefined;
        this.stopEditing();
    },

    cancel: function() {
        this.stopEditing();
    }
});