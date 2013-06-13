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
});