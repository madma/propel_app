
// console.log("spike NCR loaded");
// "use strict";



// //event listener for classroom submit
// $('#new-classroom-submit').on('click', function(evt) {
//   evt.preventDefault();
//   console.log("new classroom click!")
//   createClassroom();
// });

// //grabing new classroom data from form
// function newThreadData() {
//   return {
//     type: $('#new-classroom-type').val(),
//     name: $('#new-classroom-name').val(),
//     // creator: user._id,
//     admins: $('#new-classroom-admins').val(),
//     description: $('#new-classroom-description').val()
//   }
// }

// //ajax to create classroom
// function createClassroom(){
//   console.log(newThreadData());
//   return $.ajax({
//     method: 'POST',
//     url: '/api/classrooms',
//     dataType: 'JSON',
//     data: newThreadData()
//   })
// }

// // //Rendering classes on to classroom page
// // var $classroomInfoTemp = _.template(`
// //                                     <h4 id="<%= _id %>">
// //                                       <%= name %>
// //                                     </h4>
// //                                     `);
// // //getting all the classroom
// // function renderClasses() {
// //   $.ajax({
// //     method: 'GET',
// //     url: '/api/classrooms'
// //   }).then(function(classrooms){
// //     "use strict";
// //     console.log(classrooms);
// //     classrooms.forEach(function(classroom){
// //       var $classTemp = $classroomInfoTemp(classroom);
// //       console.log($classTemp)
// //       $('#classroom-list').append($classTemp);
// //     });
// //   });
// // }

// // $( document ).ready( function() {
// //   renderClasses();
// //   }
// // );











