console.log('JS loaded!');

// user adds classroom
function userAddClassroom (user) {
  $.ajax({
    method: 'PUT',
    url: 'api/users/' + userId + '/addclass',
    dataType: 'JSON',
    data: user
  }).then(function(user){
    console.log(user);
  })
}



$(function() {

  $("#class-code").keyup(function(){
    if ($("#class-code").val().trim().length !== 6) {
      $('#add-class-button').prop("disabled",true);
    } else {
      $('#add-class-button').prop("disabled",false);
    }
  });


  $('#add-class-button').on('click', function(evt) {
    evt.preventDefault();

    var user = {
      classroom: $("#class-code").val().trim(),
    };

    userAddClassroom(user);
  });
});


