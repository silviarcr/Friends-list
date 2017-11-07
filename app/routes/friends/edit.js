import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('friend', params.friend_id);
  },


  actions: {
    saveFriend() {
      this.controller.set('responseMessage', true);
    },
    confirmFriend(friend) {
      let friendSince = moment(friend.get("friendSince")).format("DD/MM/YYYY");
      friend.set("friendsSince", friendSince);
      friend.save().then(() => this.transitionTo('friends'));
    },
    willTransition() {
      this.controller.get('model').rollbackAttributes();
      this.controller.set('responseMessage', false);
    }
  }
});