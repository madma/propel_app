console.log("classroom function js loaded")

var classrooms = [];

//getting all the classroom
var $classroomInfoTemp = _.template(
  `
  <h4 class="class-list" id="<%= _id %>">
    <%= name %>
  </h4>
  `);

function renderClasses() {
  $('#classroom-list').empty();
  classrooms.forEach(function(classroom){
    var $classTemp = $classroomInfoTemp(classroom);
    // console.log($classTemp)
    $('#classroom-list').append($classTemp);
  });
  $('.class-list').on('click', function(){
    console.log('classroom selected', $(this).attr('id'));
    var classId = $(this).attr('id');
    indexingQuestions(classId);
  });
}


function loadClasses(){
  return $.ajax({
    method: 'GET',
    url: '/api/classrooms'
  })
  .then(function(rooms){
    classrooms = rooms;
  });
}

$( document ).ready( function() {
  loadClasses()
  .then(renderClasses);
});



//rendering question according to each classroom
var $questionListEl; //<section> of where the question get posted
var templateQuestions = _.template(`
      <h4>Signup Code: <%= signUpCode %></h4>
      <% questions.forEach(function(q) { %>

        <article id="<%= q._id %>" class="">
          <div class="question-title">
            <a href="/users/<%= q._id %>"><h3><%= q.title %></h3></a>
            <h6> Asked by<a href="/users/<%= q.author %>"> %%= q.author fullname %%, <%= q.createdAt %></h6></a>
          </div>
          <p><%= q.body %></p>
          <!-- <br> -->
          <!-- <button>upvote</button> VoteCount <button>downvote</button> -->
          <!-- <br> -->
          <!-- <button>delete this question (only delete user own question)</button> -->
        </article>

      <% }) %>
    `);

//using put info in template and append to page
function renderQuestions(classroom){
      $questionListEl    = $('#question-list');
      $questionListEl.html(templateQuestions(classroom));

}

function indexingQuestions(classId) {
  $.ajax({
    method: "GET",
    url: "api/classrooms/" + classId,
  })
  .then(function(classroom){
    renderQuestions(classroom);
  });
}
