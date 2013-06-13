/*global Ember */

var App = window.App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.Store = DS.Store.extend({
    revision: 11,
    //adapter: DS.RESTAdapter.create()
    adapter: DS.LSAdapter.create({
        namespace: 'booking app'
    })
});

App.Router.map(function() {

    this.resource('bookings', function () {
        this.route('new');
        this.resource('booking', {path: ':booking_id'}, function() {
            this.route('edit');
        });
    });

});

App.IndexRoute = Ember.Route.extend({
    redirect: function() {
        this.transitionTo('bookings');
    }
});

App.BookingsIndexRoute = Ember.Route.extend({
    model: function() {
        return App.Booking.find();
    }
//
//    events: {
//        edit: function(band) {
//            this.transitionTo('band.edit', band);
//        }
//    }
});


/* requires processed by neuter */
require('app/scripts/helpers/*');
require('app/scripts/models/*');
require('app/scripts/controllers/*');
require('app/scripts/views/*');
//
//App.NewBookingRoute = Ember.Route.extend({
//
//    renderTemplate: function() {
//        this.render('edit_booking', {controller: 'new_booking'});
//    },
//
//    model: function() {
//        return booking.createRecord();
//    },
//
//    deactivate: function() {
//        var model = this.get('controller.model');
//        if (!model.get('isSaving')) {
//            model.deleteRecord();
//        }
//    }
//
//});