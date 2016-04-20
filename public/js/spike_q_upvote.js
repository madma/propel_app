
function questionUpvote(questionId){
  $.ajax({
    method: "PUT",
    url: "api/questions/" + questionId + "/upvote"
  })
  .then(function(data){

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
