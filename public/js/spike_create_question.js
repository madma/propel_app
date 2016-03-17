
console.log("spike question loaded")

//event listener for classroom submit
$('#new-question-submit').on('click', function(evt) {
  evt.preventDefault();
  console.log("new question click!")
  createQuestion();
});

//grabing new classroom data from form
function newQuestionData() {
  return {
    // author: userId,
    // title: $('#new-question-title').val(),
    // body: $('#new-question-body').val(),
    // tags: $('#new-question-tags').val().split(" ")
    author: "56e9b437b459c5dd593ebbda",
    title: "Question Title",
    body: "why so many questions",
    tags: "html"
  }
}

//ajax to create classroom
function createQuestion(){
  console.log(newQuestionData());
  var classroomId = '56e9b41fcb3b16c659ce662c';
  return $.ajax({
    method: 'PUT',
    url: 'api/classrooms/' + classroomId,
    dataType: 'JSON',
    data: newQuestionData()
  });
}
