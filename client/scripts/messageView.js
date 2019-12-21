var MessageView = {

  render: _.template(
    "<div class='chat'>" +
      "<div class='username'>" + "<% message.username%>" + "</div>" +
      "<div class='text'>" + "<% message.text%>" + "</div>" +
      "<div class='roomname'>" + "<% message.roomname%>" + "</div>" +
    "</div>"
 )

};