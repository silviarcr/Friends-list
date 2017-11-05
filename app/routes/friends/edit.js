import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('friend', params.friend_id);
  },

  actions: {

    saveFriend(friend) {
      // friend.save().then(() => this.transitionTo('friends'));
      let confirmation = confirm("Deseja realmente salvar?");

      if (confirmation) {
        friend.save().then(() => this.transitionTo('friends'));
      }
      else {
          willDestroyElement();
      }

    },

    willTransition(transition) {

      this.controller.get('model').rollbackAttributes();

    }
  }
});