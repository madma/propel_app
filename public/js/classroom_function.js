console.log("classroom function js loaded")

var classrooms = [];
var currentRoom;
var classId    = "";
var $sortSl        = $('#sort');

//getting all the classroom
var $classroomInfoTemp = _.template(
  `
  <div class="class-list" id="<%= _id %>">
    <h5>
      <%= name %>
    </h5>
  </div>
  `);


function renderClasses() {
  $('#classroom-list').empty();
  console.log("before cm render", classrooms);
  classrooms = _.filter(classrooms, function(newOrder){
    console.log(newOrder);
    return (newOrder.students.indexOf(userId) !== -1 ||
            newOrder.professionals.indexOf(userId) !== -1 ||
            newOrder.admins.indexOf(userId) !== -1 ||
            newOrder.creator === userId );
  });


  classrooms.forEach(function(classroom){
    var $classTemp = $classroomInfoTemp(classroom);
    // console.log($classTemp)
    $('#classroom-list').append($classTemp);
  });
  $('.class-list').on('click', function(){
    // console.log('classroom selected', $(this).attr('id'));
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
    <div class="class-title">
      <h3 class="class-title-h3"><strong><%= name %></strong> (Sign Up Code: <%= signUpCode %>)</h3>
    </div>
    `)
var $askQuestionBtn = $('<button type="button" class="btn btn-primary btn" data-toggle="modal" data-target="#qAddModal" id="q-add-btn"><strong>Ask a Question?</strong></button>');
var templateQuestions = _.template(`
      <h4>Signup Code: <%= signUpCode %></h4>
      <% questions.forEach(function(q,index) { %>

        <article id="<%= q.id %>" class="question-article">
          <div class="question-title">
                <div class="row question-row">
                      <% if (q.upvotes.indexOf(userId) === -1) { %>
                        <button type="button" class="btn btn-default btn-sm upvote button-question" id="up-<%= q.id %>">
                      <% } else { %>
                        <button type="button" class="btn btn-default btn-sm upvote btn-success button-question" id="up-<%= q.id %>">
                      <% } %>
                          <span class="thumb-up-<%= q.id %> button-question" id="up-<%= q.id %>"><%= q.upvotes.length %></span>
                          <span class="glyphicon glyphicon-thumbs-up button-question" aria-hidden="true" id="up-<%= q.id %>"></span>
                        </button>

            <a href="#" class="question-expand" id="<%= index %>"><h3 class="button-question" data-toggle="modal" data-target="#qa-render-modal" id="<%= index %>"><%= q.title %></h3></a>
                </div>
                <p class="question-body"> Asked by<a href="/users/<%= q.author %>"> <%= q.author.displayName %></a>, <span class="the-date" data-ts="<%= q.createdAt %>"></span></p>
          </div>
          <p><%= q.body %></p>
          <% q.tags.forEach(function(tag) { %>
            <span class="label label-default"><%= tag.tag %></span>
          <% }) %>
        </article>
      <% }) %>
    `);

 // ['user', 'age'], ['asc', 'desc']);

//using put info in template and append to page
function renderQuestions(classroom){
  $titleEl           = $('#classroom-header');
  $titleEl.html(templateTitle(currentRoom));
  $questionListEl    = $('#question-list');
  var sortRoom = currentRoom;
  if ($sortSl.val() === "Newest") {
    sortRoom.questions = _.orderBy(sortRoom.questions, ['createdAt'], ['desc', 'asc']);
  } else if ($sortSl.val() === "Upvotes") {
    sortRoom.questions = _.orderBy(sortRoom.questions, ['upvotes'], ['desc', 'asc']);
  } else if ($sortSl.val() === "Oldest") {
    sortRoom.questions = _.orderBy(sortRoom.questions, ['createdAt'], ['asc', 'desc']);
  }

  $questionListEl.html(templateQuestions(sortRoom));
  $('#ask-question').append($askQuestionBtn);
  viewAns();
}

function indexingQuestions(classId) {
  $.ajax({
    method: "GET",
    url: "api/classrooms/" + classId,
  })
  .then(function(classroom){
    currentRoom = classroom;
    renderQuestions(currentRoom);
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

//sort question by upvotes and recent
$sortSl.change(function(){
  console.log("change")
  indexingQuestions(classId);
});









function viewAns(){

  var qaTemplate = _.template(`
<article id="<%= id %>" class="">
  <div class="question-title">
  <% if (upvotes.indexOf(userId) === -1) { %>
    <button type="button" class="btn btn-default btn-sm upvote" id="up-<%= id %>">
  <% } else { %>
    <button type="button" class="btn btn-default btn-sm upvote btn-success" id="up-<%= id %>">
  <% } %>
      <span class="thumb-up-<%= id %>" id="up-<%= id %>"><%= upvotes.length %></span>
      <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true" id="up-<%= id %>"></span>
    </button>
    <a href="/users/<%= id %>" ><h3><%= title %></h3></a>
    <h6> Asked by<a href="/users/<%= author %>"> <%= author.displayName %></a>, <span class="the-date" data-ts="<%= createdAt %>"></span></h6>
  </div>
  <p><%= body %></p>
  <% tags.forEach(function(tag) { %>
    <span class="label label-default"><%= tag.tag %></span>
  <% }) %>
</article>

<% answers.forEach(function(a){ %>
  <h4 id="<%= a._id %>"><%= a.body %></h4></a>
  <h6> Answered by<a href="/users/<%= a.author %>"> <%= a.author %></a>, <span class="the-date" data-ts="<%= a.createdAt %>"></span></h6>
<% }) %>`);


  $('.question-expand').click(function(evt){
    console.log('viewAns click', $(this).attr('id'));
  var index = $(this).attr('id');
  var q = currentRoom.questions[index];
  console.log("123", q);
  console.log(qaTemplate(q));
  $('#qa-anchor').html(qaTemplate(q));
  })

}


