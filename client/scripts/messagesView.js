var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //get messages from the server
    
    //display them on the screen
  },

  render: function() {

  },
  renderMessage: function(message) {
    var messageX = MessageView.render(message);
    //console.log(messageX);
    this.$chats.append(messageX);
  },
};