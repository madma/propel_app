console.log('spike_questions_render loaded');

//also need to add delete function here too


// var $questionListEl; //<section> of where the question get posted
// var renderQuestions = _.template(`
//       <article id="<%= _id %>" class="">
//         <div class="question-title">
//           <a href="/users/<%= _id %>"><h3><%= title %></h3></a>
//           <h6> Asked by<a href="/users/<%= author %>"> %%= author fullname %%, <%= createdAt %></h6></a>
//         </div>
//         <p><%= body %></p>
//         <!-- <br> -->
//         <!-- <button>upvote</button> VoteCount <button>downvote</button> -->
//         <!-- <br> -->
//         <!-- <button>delete this question (only delete user own question)</button> -->
//       </article>
//     `);

// //using put info in template and append to page
// function postQuestions(question){
//   var questionComponent  = renderQuestions(question);
//   var $questionComponent = $(questionComponent);
//       $questionListEl    = $('#question-list');

//       $questionListEl.append($questionComponent);
// }

//  //$questionList = <section> of where the question get posted}

// function indexingQuestions() {
//   var classId = "56e9b41fcb3b16c659ce662c";
//   $.ajax({
//     method: "GET",
//     url: "api/classrooms/" + classId,
//   }).then(function(classroom){
//     console.log("RENDERING Classrooms", classroom);

//     classroom.questions.forEach(function(question){
//       postQuestions(question);
//     });
//   })
// }

// $( document ).ready( function() {
//   indexingQuestions();
//   }
// );



