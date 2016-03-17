console.log('spike_q_upvote loaded!');


function questionUpvote(questionId){
  $.ajax({
    method: "PUT",
    url: "api/questions/" + questionId + "/upvote"
  })
  .then(function(data){
    console.log(data.upvoted);
    console.log(questionId);
    console.log(data.classroomId);
    var votes = $(`.thumb-up-${questionId}`).html();
    if (data.upvoted) {
      $(`#up-${questionId}`).addClass('btn-success');
      votes = parseInt(votes) + 1;
      $(`.thumb-up-${questionId}`).html(votes);
    } else {
      $(`#up-${questionId}`).removeClass('btn-success');
      votes = parseInt(votes) - 1;
      $(`.thumb-up-${questionId}`).html(votes);
    }
  });
}
