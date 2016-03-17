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

function userCreateClassroom (classroom) {
  $.ajax({
    method: 'POST',
    url: 'api/classrooms/',
    dataType: 'JSON',
    data: classroom
  }).then(function(classroom){
    console.log("creating da classroom bruh",classroom);
    classrooms.push(classroom);
    renderClasses();
  })
}

// jQuery
$(function() {

  // listener to ensure user includes classroom name and description
  $('#new-class-name').keyup(function(){
    if ($('#new-class-name').val().length > 0) {
      $('#new-class-button').prop("disabled",false);
    } else {
      $('#new-class-button').prop("disabled",true);
    }
  });

  // button for user to create a new Classroom
  $("#new-class-button").on('click', function(evt) {
    evt.preventDefault();

    var classroom = {
      type:        $('#new-class-type').val(),
      name:        $('#new-class-name').val(),
      admins:      $('#new-class-admins').val(),
      description: $('#new-class-description').val()
    }

    userCreateClassroom(classroom);
  });

  // listener to prevent user from adding wrong classroom code
  $('#class-code').keyup(function(){
    if ($('#class-code').val().trim().length !== 6) {
      $('#add-class-button').prop("disabled",true);
    } else {
      $('#add-class-button').prop("disabled",false);
    }
  });

  // button for user to add a Classroom
  $('#add-class-button').on('click', function(evt) {
    evt.preventDefault();

    var user = {
      classroom: $("#class-code").val().trim(),
    };

    userAddClassroom(user);
  });
});


