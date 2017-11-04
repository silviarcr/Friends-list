import Model from 'ember-data/model';
import DS from 'ember-data';

export default DS.Model.extend({
  _id:  DS.attr('string'),
  name: DS.attr('string'),
  lastname: DS.attr('string'),
  friendsSince: DS.attr('date')
  // ,

  // fullName: Ember.computed('firstName', 'lastName', function() {
  //   return `${this.get('firstName')} ${this.get('lastName')}`;
  // })
});