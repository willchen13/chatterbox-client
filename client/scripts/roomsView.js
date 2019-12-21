var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {

    // Parse.readAll((data) => {
      // // examine the response from the server request:
      // console.log(data);

      // callback();
  //     data.forEach((user)=>{

  //     }
  //   });
   },

  render: function () {
  },

  renderRoom: function (roomname) {


    //var roomNameX = RoomView.render(roomname);


    this.$select.append(`<option value="${roomname}"> ${roomname} </option>`);

  }

};
