var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function() {
    '<option class=\'roomX\'>' + '<%roomname%>' + '</option>';
  },

  renderRoom: function(roomname) {


    render: _.template(
      '<div class=\'chat\'>' +
        '<div class=\'username\'>' + '<% message.username%>' + '</div>' +
        '<div class=\'text\'>' + '<% message.text%>' + '</div>' +
        '<div class=\'roomname\'>' + '<% message.roomname%>' + '</div>' +
      '</div>'
    );


    this.$select.append(roomname);

  }

};
