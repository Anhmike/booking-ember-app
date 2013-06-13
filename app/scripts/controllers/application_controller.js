App.IndexController = Ember.ObjectController.extend({

    /**
     * Handles the "new" button on the main page.
     */
    create: function() {
        this.get('target').transitionTo('bookings.new');
    }
});