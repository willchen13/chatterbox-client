var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var notifyMessageSent = function () { console.log("Message sent")};
    //console.log(message.valueOf());
    var Mymessage = {
      username: window.location.search.slice(10),
      text: message.value,
      roomname: "noroomyet"
    };
    Parse.create(Mymessage, notifyMessageSent);
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};