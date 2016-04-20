
function createClassroom(classroom) {
    $.ajax({
    type: 'POST',
    url: '/api/classroom/',
    data: classroom
  }).then(function(classroom){
  })
}

// jQuery
$(function() {

  $('#new-classroom-submit').on('click', function(evt) {
    evt.preventDefault();

    var classroom = {
      name:        $("#new-classroom-name").val(),
      type:        $("#new-classroom-type").val(),
      admins:      $("#new-classroom-admins").val(),
      description: $("#new-classroom-description").val(),
    };

    createClassroom(classroom);
  });

})
