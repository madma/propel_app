var socket = io();

$(function() {

  var ioQSubmit = '#io-q-submit-btn';
  var $ioQSubmit = $(ioQSubmit);

  console.log('Logging socket.io from client: ', socket);

  $ioQSubmit.on('click', function(evt) {
    // evt.preventDefault();
    var qData = getQFormData();
    console.log(qData);
    socket.emit('io-q-submit', qData);
  });

  socket.on('io-q-added', function(data) {
    console.log("THE QUESTION WAS ADDED!!! QDATA: ", data);
  });

});


function getQFormData() {
  return {
      //qClassroomId:
      qAuthorId: userId,
      qTitle:    $('#q-form-title').val(),
      qBody:     $('#q-form-body').val(),
      qTags:     $('#q-form-tags').val(),
    };
}
