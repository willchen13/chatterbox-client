var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {

  },
  renderMessage: function(message) {
    var messageX = MessageView.render(message);
    //console.log(messageX);
    this.$chats.append(messageX);
  },
};