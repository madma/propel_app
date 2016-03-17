var socket = io();

$(function() {

  var ioQSubmit = '#io-q-submit-btn';
  var $ioQSubmit = $(ioQSubmit);
  var ioASubmit = '#io-a-submit-btn';
  var $ioASubmit = $(ioASubmit);

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

  $ioASubmit.on('click', function(evt) {
    // evt.preventDefault();
    var aData = getAFormData();
    console.log(aData);
    socket.emit('io-a-submit', aData);
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

function getAFormData() {
  return {
      //aClassroomId:
      //aQuestionId:
      aAuthorId: userId,
      aBody:     $('#a-form-body').val()
    };
}

//server update classroom db doc

//task: find out how we will grab aQuestionId



