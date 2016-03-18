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
    <div class="class-title">
      <h3 class="class-title-h3"><strong><%= name %></strong> (Sign Up Code: <%= signUpCode %>)</h3>
    </div>
    `)
var $askQuestionBtn = $('<button type="button" class="btn btn-primary btn" data-toggle="modal" data-target="#qAddModal" id="q-add-btn"><strong>Ask a Question?</strong></button>');
var templateQuestions = _.template(`
      <% questions.forEach(function(q) { %>

        <article id="<%= q._id %>" class="question-article">
          <div class="question-title">
                <div class="row question-row">
                      <% if (q.upvotes.indexOf(userId) === -1) { %>
                        <button type="button" class="btn btn-default btn-sm upvote button-question" id="up-<%= q._id %>">
                      <% } else { %>
                        <button type="button" class="btn btn-default btn-sm upvote btn-success button-question" id="up-<%= q._id %>">
                      <% } %>
                          <span class="thumb-up-<%= q._id %> button-question" id="up-<%= q._id %>"><%= q.upvotes.length %></span>
                          <span class="glyphicon glyphicon-thumbs-up button-question" aria-hidden="true" id="up-<%= q._id %>"></span>
                        </button>

                    <a href="/users/<%= q._id %>"><h3 class="button-question"><%= q.title %></h3></a>
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
    sortRoom.questions = _.orderBy(sortRoom.questions, ['createdAt'], ['asc', 'desc']);
  } else if ($sortSl.val() === "Upvotes") {
    sortRoom.questions = _.orderBy(sortRoom.questions, ['upvotes'], ['desc', 'asc']);
  } else if ($sortSl.val() === "Oldest") {
    sortRoom.questions = _.orderBy(sortRoom.questions, ['createdAt'], ['asc', 'desc']);
  }
  // else if ($sortSl.val() === "Your Questions") {
  //   sortRoom.questions = sortRoom.questions.filter( function(question){
  //     return question == userId
  //   });
  // }

  $questionListEl.html(templateQuestions(sortRoom));
  $('#ask-question').append($askQuestionBtn);
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
  renderQuestions(currentRoom);
});
