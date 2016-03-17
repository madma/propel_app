console.log("classroom function js loaded")


//getting all the classroom
var $classroomInfoTemp = _.template(`
                                    <h4 id="<%= _id %>">
                                      <%= name %>
                                    </h4>
                                    `);
function renderClasses() {
  $.ajax({
    method: 'GET',
    url: '/api/classrooms'
  })
  .then(function(classrooms){
    "use strict";
    console.log(classrooms);
    classrooms.forEach(function(classroom){
      var $classTemp = $classroomInfoTemp(classroom);
      console.log($classTemp);
      $('#classroom-list').append($classTemp);
      // $classTemp.on('click', function(){
      //   console.log('classroom selected');
      //   var classId = this.attr('id');
      //   indexingQuestions();
      // })
    });
  })
    .then(function() {
      $('h4').on('click', function(){
        console.log('classroom selected', $(this).attr('id'));
        var classId = $(this).attr('id');
        indexingQuestions(classId);
      });
  });
}

$( document ).ready( function() {
  renderClasses();
  }
);



//rendering question according to each classroom
var $questionListEl; //<section> of where the question get posted
var renderQuestions = _.template(`
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
function postQuestions(question){
  var questionComponent  = renderQuestions(question);
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
      postQuestions(question);
    });
  })
}
