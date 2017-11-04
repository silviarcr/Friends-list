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
      this.controller.get('model').rollbackAttributes();
    }
  }
});