import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('friend');
  },

  actions: {

    saveFriend(newFriend) {
        newFriend.save().then(() => this.transitionTo('friends'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});