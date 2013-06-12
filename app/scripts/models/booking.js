App.Booking = DS.Model.extend({

  firstName: DS.attr('string'),

  lastName: DS.attr('string'),

  date: DS.attr('datetime'),

  peopleNum: DS.attr('number'),

  phone: DS.attr('number'),

  email: DS.attr('string'),

  note: DS.attr('text')

});

