$(function() {

  var ioQSubmit = '#io-q-submit-btn';
  var $ioQSubmit = $(ioQSubmit);

  var socket = io()
  console.log('Logging socket.io from client: ', socket);

  $ioQSubmit.on('click', function(evt) {
    // evt.preventDefault();
    var qData = getQFormData();
    console.log(qData);
    socket.emit('io-q-submit', qData);
  });

});

function getQFormData() {
  return {
      qAuthorId: userId,
      qTitle:    $('#q-form-title').val(),
      qBody:     $('#q-form-body').val(),
      qTags:     $('#q-form-tags').val()
    };
}
