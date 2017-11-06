import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('friend', params.friend_id);
  },

  actions: {
    saveFriend() {
      this.controller.set('responseMessage', true);
    },
    confirmFriend(friend) {
      friend.save().then(() => this.transitionTo('friends'));
    },
    willTransition() {
      this.controller.get('model').rollbackAttributes();
      this.controller.set('responseMessage', false);
    }
  }
});