console.log("classroom function js loaded")

var classrooms = [];

//getting all the classroom
var $classroomInfoTemp = _.template(`
                                    <h4 class="class-list" id="<%= _id %>">
                                      <%= name %>
                                    </h4>
                                    `);
function renderClasses() {
  classrooms.forEach(function(classroom){
    var $classTemp = $classroomInfoTemp(classroom);
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
    console.log(classrooms);
  });
}

$( document ).ready( function() {
  loadClasses()
  .then(renderClasses);
});



//rendering question according to each classroom
var $questionListEl; //<section> of where the question get posted
var tempQuestions = _.template(`
      <article id="<%= _id %>" class="">
        <div class="question-title">
          <a href="/users/<%= _id %>"><h3><%= title %></h3></a>
          <h6> Asked by<a href="/users/<%= author %>"> %%= author fullname %%, <%= createdAt %></h6></a>
        </div>
        <p><%= body %></p>
        <!-- <br> -->
        <!-- <button>upvote</button> VoteCount <button>downvote</button> -->
        <!-- <br> -->
        <!-- <button>delete this question (only delete user own question)</button> -->
      </article>
    `);

//using put info in template and append to page
function renderQuestion(question){
  var questionComponent  = tempQuestions(question);
  var $questionComponent = $(questionComponent);
      $questionListEl    = $('#question-list');
      $questionListEl.append($questionComponent);
}

 //$questionList = <section> of where the question get posted}

function indexingQuestions(classId) {
  $.ajax({
    method: "GET",
    url: "api/classrooms/" + classId,
  }).then(function(classroom){
    console.log("RENDERING Classrooms", classroom);
    $questionListEl    = $('#question-list');
    $questionListEl.empty();
    classroom.questions.forEach(function(question){
      renderQuestion(question);
    });
  })
}
