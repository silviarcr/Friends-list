import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('friend');
  },

  actions: {
    saveFriend(newFriend) {
      if (!newFriend.get("isValidName")) {
        alert("É preciso preencher o campo nome com mais de 3 caracteres.");
      }
      else if (!newFriend.get("isValidLastName")) {
        alert("É preciso preencher o campo sobrenome com mais de 3 caracteres.");
      }
      else {
        let friendsSince = moment(newFriend.get("friendsSince")).format("DD/MM/YYYY");
        newFriend.set("friendsSince", friendsSince);
        newFriend.save().then(() => this.controller.set('responseMessage', true));
      }
    },
    willTransition() {
      this.controller.get('model').rollbackAttributes();
      this.controller.set('responseMessage', false);
    }
  }
});