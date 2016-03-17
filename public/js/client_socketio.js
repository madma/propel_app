$(function() {
  var ioQSubmit = '';
  var $ioQSubmit = $(ioQSubmit);

  var socket = io()
  console.log(socket);



});

//BELOW IS PASTED


function ioQSubmitPost(userid, questionid, question) {

    $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/users/' + userId ,
    data: user
  }).then(function(user){
    // console.log(user);
  })
}
