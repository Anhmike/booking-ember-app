App.NumberField = Ember.TextField.extend({
    tagName: "input",
    attributeBindings: ['type', 'min', 'max'],
    type: "number",
    min: 1,
    max: 50
});

App.DatePicker = Ember.TextField.extend({
    attributeBindings: ['data-format'],
    "data-format": 'dd/MM/yyyy hh:mm:ss',

    date: null,

    value: function () {
        var date = this.get('date');
        if (date) {
            return date.format(this.get('data-format'));
        } else {
            return "";
        }
    }.property('date'),

    didInsertElement: function () {
        var self = this;

        var onChangeDate = function (ev) {
            self.get('context').set('date', ev.date);
        };

        $(function () {
            $('#datetimepicker').datetimepicker({
                language: 'pt-BR'
            }).on('changeDate', onChangeDate);
        });

    }
});

