/*global Ember */

var App = window.App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_BINDINGS: true,
    LOG_VIEW_LOOKUPS: true
});

App.Store = DS.Store.extend({
    revision: 11,
    adapter: DS.LSAdapter.create({
        namespace: 'booking app'
    })
});


/* requires processed by neuter */
require('app/scripts/router');
require('app/scripts/helpers/*');
require('app/scripts/models/*');
require('app/scripts/controllers/*');
require('app/scripts/views/*');