console.log("classroom function js loaded")

var classrooms = [];
var classId    = "";

//getting all the classroom
var $classroomInfoTemp = _.template(
  `
  <h4 class="class-list" id="<%= _id %>">
    <%= name %>
  </h4>
  `);


function renderClasses() {
  $('#classroom-list').empty();
  console.log("before cm render", classrooms);
  classrooms = _.filter(classrooms, function(newOrder){
    return (newOrder.students.indexOf(userId) !== -1 ||
            newOrder.professionals.indexOf(userId) !== -1 ||
            newOrder.admins.indexOf(userId) !== -1 ||
            newOrder.creator._id === userId)
  });

  console.log("filtered class", classrooms)

  classrooms.forEach(function(classroom){
    var $classTemp = $classroomInfoTemp(classroom);
    // console.log($classTemp)
    $('#classroom-list').append($classTemp);
  });
  $('.class-list').on('click', function(){
    console.log('classroom selected', $(this).attr('id'));
    classId = $(this).attr('id');
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
  $('#question-list').on('click', '.upvote', function(evt){
    var questionId = evt.target.id.slice(3);
    questionUpvote(questionId);
  });
});



//rendering question according to each classroom
var $questionListEl; //<section> of where the question get posted
var templateTitle = _.template(`
      <h5><strong><%= name %></strong></h5>
    `)
var $askQuestionBtn = $('<button type="button" class="btn btn-primary btn" data-toggle="modal" data-target="#qAddModal" id="q-add-btn"><strong>Ask a Question?</strong></button>');
var templateQuestions = _.template(`
      <h4>Signup Code: <%= signUpCode %></h4>
      <% questions.forEach(function(q) { %>

        <article id="<%= q._id %>" class="">
          <div class="question-title">
          <% if (q.upvotes.indexOf(userId) === -1) { %>
            <button type="button" class="btn btn-default btn-sm upvote" id="up-<%= q._id %>">
          <% } else { %>
            <button type="button" class="btn btn-default btn-sm upvote btn-success" id="up-<%= q._id %>">
          <% } %>
              <span class="thumb-up-<%= q._id %>" id="up-<%= q._id %>"><%= q.upvotes.length %></span>
              <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true" id="up-<%= q._id %>"></span>
            </button>
            <a href="/users/<%= q._id %>"><h3><%= q.title %></h3></a>
            <h6> Asked by<a href="/users/<%= q.author %>"> <%= q.author.displayName %></a>, <span class="the-date" data-ts="<%= q.createdAt %>"></span></h6>
          </div>
          <p><%= q.body %></p>
          <% q.tags.forEach(function(tag) { %>
            <span class="label label-default"><%= tag.tag %></span>
          <% }) %>
          <!-- <br> -->
          <!-- <button>upvote</button> VoteCount <button>downvote</button> -->
          <!-- <br> -->
          <!-- <button>delete this question (only delete user own question)</button> -->
        </article>

      <% }) %>
    `);

//using put info in template and append to page
function renderQuestions(classroom){
  $titleEl           = $('#questionpanetop');
  $titleEl.html(templateTitle(classroom));
  $questionListEl    = $('#question-list');
  $questionListEl.html(templateQuestions(classroom));
  $('#ask-question').append($askQuestionBtn);
}

function indexingQuestions(classId) {
  $.ajax({
    method: "GET",
    url: "api/classrooms/" + classId,
  })
  .then(function(classroom){
    renderQuestions(classroom);
    startSetInterval();
  });
}

function startSetInterval() {
  updateTimestampEnglish();
  setInterval(updateTimestampEnglish, 20000);
}

function updateTimestampEnglish() {
  console.log("... updating timestamps ...");
  $('.the-date').each(function(i,e) {
    var ts = $(e).data('ts');
    $(this).text(moment(ts).fromNow());
  });
}
