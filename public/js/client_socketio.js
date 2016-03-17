var socket = io();

$(function() {

  var ioQSubmit = '#io-q-submit-btn';
  var $ioQSubmit = $(ioQSubmit);
  var ioASubmit = '#io-a-submit-btn';
  var $ioASubmit = $(ioASubmit);

  console.log('Logging socket.io from client: ', socket);

  $ioQSubmit.on('click', function(evt) {
    // evt.preventDefault();
    var qData = getQFormData();
    console.log(qData);
    socket.emit('io-q-submit', qData);
  });

  socket.on('io-q-added', function(data) {
    console.log("THE QUESTION WAS ADDED!!! QDATA: ", data);
    // render question data and append
    renderQuestion(data);
  });

  $ioASubmit.on('click', function(evt) {
    // evt.preventDefault();
    var aData = getAFormData();
    console.log(aData);
    socket.emit('io-a-submit', aData);
  });

  socket.on('io-q-added', function(data) {
    console.log("THE QUESTION WAS ADDED!!! QDATA: ", data);

  });

});


function getQFormData() {
  return {
      qClassroomId: classId,
      qAuthorId: userId,
      qTitle:    $('#q-form-title').val(),
      qBody:     $('#q-form-body').val(),
      // qTags:     [$('#q-form-tags').val()],
    };
}

function getAFormData() {
  return {
      //aClassroomId:
      //aQuestionId:
      aAuthorId: userId,
      aBody:     $('#a-form-body').val()
    };
}

//rendering question according to each classroom
var $questionListEl; //<section> of where the question get posted
var templateQuestion = _.template(`
        <article id="<%= _id %>" class="">
          <div class="question-title">
          <% if (upvotes.indexOf(userId) === -1) { %>
            <button type="button" class="btn btn-default btn-sm upvote" id="up-<%= _id %>">
          <% } else { %>
            <button type="button" class="btn btn-default btn-sm upvote btn-success" id="up-<%= _id %>">
          <% } %>
              <span class="thumb-up-<%= _id %>" id="up-<%= _id %>"><%= upvotes.length %></span>
              <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true" id="up-<%= _id %>"></span>
            </button>
            <a href="/users/<%= _id %>"><h3><%= title %></h3></a>
            <h6> Asked by<a href="/users/<%= author %>"> <%= displayName %>, <%= createdAt %></h6></a>
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
      $questionListEl    = $('#question-list');
      $questionListEl.append(templateQuestion(question));

}