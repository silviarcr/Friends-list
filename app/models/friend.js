import Model from 'ember-data/model';
import DS from 'ember-data';

export default DS.Model.extend({
  _id: DS.attr('string'),
  name: DS.attr('string'),
  lastname: DS.attr('string'),
  friendsSince: DS.attr('string'), 
   
  
  isValidName: Ember.computed.gte('name.length', 4),
  isValidLastName: Ember.computed.gte('lastname.length', 4),

  isValid: Ember.computed.and('isValidName', 'isValidLastName'),
  isNotValid: Ember.computed.not('isValid')

});