var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {

   },

  render: function () {
  },

  renderRoom: function (roomname) {


    //var roomNameX = RoomView.render(roomname);


    this.$select.append(`<option value="${roomname}"> ${roomname} </option>`);

  }

};
