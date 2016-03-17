console.log("SPIKING USER");

function editUser(user) {
  console.log("CLICKKKKKKK", user);
    $.ajax({
    type: 'PUT',
    url: 'http://localhost:3000/api/users/' + userId ,
    data: user
  }).then(function(user){
    // console.log(user);
  })
}

// jQuery
$(function() {
  // if the newUser is true then show
  // a modal to edit profile info pulled from LinkedIn
  if (newUser) {
    $(window).load(function() {
      $('#myModal').modal('show');
    });
  }

  $('#submit-edit').on('click', function(evt) {
    evt.preventDefault();
    var user = {
      firstName:   $("#edit-fn").val(),
      lastName:    $("#edit-ln").val(),
      email:       $("#edit-email").val(),
      institution: $("#edit-institution").val(),
      location:    $("#edit-location").val(),
    };

    editUser(user);
  });
});
