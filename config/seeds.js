var mongoose = require('./database');

var User = require('../models/user');
var Classroom = require('../models/classroom');

var users;

/*
 * Seed the database.
 */

console.log("Removing users…");
User.remove({})

.then(function() {
  process.stdout.write("Creating users: "); // like console.log!
  return User.create(definedUsers());
})

.then(function(createdUsers) {
  users = createdUsers; // save the users list!
  console.log("Database seeded with " + users.length  + " users.");
})

.then(function() {
  console.log("Removing classrooms...");
  Classroom.remove({});
})

.then(function() {
  process.stdout.write("Creating classrooms: ");
  return Classroom.create(definedClassrooms(users));
})

.then(function(classrooms) {
  console.log("Database seeded with " + classrooms.length  + " classrooms.");
  console.log(classrooms);
})

// Catch and log any errors along the chain.
.catch(function(err) {
  console.log("Error:", err);
})

// Finish the chain.
.then(
  closeMongoConnection, // when the chain is successful…
  closeMongoConnection  // when the chain has failed…
);


function closeMongoConnection() {
  mongoose.connection.close(function(err) {
    if (err) console.log(err);
    process.exit(0);
  });
}


function definedUsers() {
 return [
  { type: 'instructor',
    firstName: 'Phil',
    lastName: 'Hughes',
    email: 'pj@ga.co',
    institution: 'General Assembly',
  },
  { type: 'instructor',
    firstName: 'Ezra',
    lastName: 'Raez',
    email: 'ezra.raez@generalassemb.ly',
    institution: 'General Assembly',
  },
  { type: 'instructor',
    firstName: 'Jim',
    lastName: 'Clark',
    email: 'jim.clark@generalassemb.ly',
    institution: 'General Assembly',
  },
  { type: 'instructor',
    firstName: 'Casper',
    lastName: 'Purtlebaugh',
    email: 'cassie.purtlebaugh@gmail.com',
    institution: 'General Assembly',
  },
  { type: 'instructor',
    firstName: 'Melissa',
    lastName: 'Wilcox',
    email: 'melissa@emdubb.co',
    institution: 'General Assembly',
  },
  { type: 'instructor',
    firstName: 'Michael',
    lastName: 'Klophaus',
    email: 'mmklophaus@gmail.com',
    institution: 'General Assembly',
  },
  { type: 'instructor',
    firstName: 'Fernando',
    lastName: 'Orozco',
    email: 'forozco2085@gmail.com',
    institution: 'General Assembly',
  },
  { type: 'instructor',
    firstName: 'Rob',
    lastName: 'Gonnella',
    email: 'robgonnella@gmail.com',
    institution: 'General Assembly',
  },
  { type: 'instructor',
    firstName: 'Shanee',
    lastName: 'Gilboa',
    email: 'shanee85@gmail.com',
    institution: 'General Assembly',
  },
  { type: 'professional',
    firstName: 'Jude',
    lastName: 'Molke',
    email: 'jude@generalassemb.ly',
    institution: 'General Assembly',
  },
  { type: 'professional',
    firstName: 'Meredith',
    lastName: 'Bryan',
    email: 'meredith.bryan@ga.co',
    institution: 'General Assembly',
  },
  { type: 'professional',
    firstName: 'Kate',
    lastName: 'Rogers',
    email: 'kate.rogers@generalassemb.ly',
    institution: 'General Assembly',
  },
  { firstName: 'Claire',
    lastName: 'Savage',
    email: 'clairejsavage@gmail.com',
    institution: 'General Assembly',
  },
  { firstName: 'Karen',
    lastName: 'Quan',
    email: 'quan.karen@gmail.com',
    institution: 'General Assembly',
  },
  { firstName: 'Yael',
    lastName: 'Amir',
    email: 'yaelamir1@gmail.com',
    institution: 'General Assembly',
  },  ];
}

// function definedClassrooms() {
//   return [
//     {
//       name: 'WDI-DTLA-8',
//       creator: users[0],
//       admins: [users[0], users[1], users[2]],
//       students: users.slice(12),
//       professionals: [users[9], users[10], users[11]],
//     },
//   ];
// }
function definedClassrooms(users) {
  console.log("where stopped?")
  return [
    {
      name: 'WDI-DTLA-8',
      creator: users[0],
      admins: [users[0], users[1], users[2]],
      students: users.slice(8),
      professionals: [users[1], users[2], users[3]],
      signUpCode: "123456",
      questions: [
                  {
                    author: users[0],
                    body: "WDI body of question 1",
                    title: "working title"
                  },
                     {
                    author: users[1],
                    body: "WDI body of question 2",
                    title: "working title"
                  },
                     {
                    author: users[2],
                    body: "WDI body of question 3",
                    title: "working title"
                  }
                 ]
    },
    {
      name: 'UX-DTLA-6',
      creator: users[1],
      admins: [users[0], users[1], users[2]],
      students: users.slice(8),
      professionals: [users[1], users[2], users[3]],
      signUpCode: "123111",
      questions: [
                  {
                    author: users[0],
                    body: "UX body of question 1",
                    title: "working title"
                  },
                     {
                    author: users[1],
                    body: "UX body of question 2",
                    title: "working title"
                  },
                     {
                    author: users[2],
                    body: "UX body of question 3",
                    title: "working title"
                  }
                 ]
    },
    {
      name: 'DS-DTLA-1',
      creator: users[2],
      admins: [users[0], users[1], users[2]],
      students: users.slice(8),
      professionals: [users[1], users[2], users[3]],
      signUpCode: "llllll",
      questions: [
                  {
                    author: users[0],
                    body: "DS body of question 1",
                    title: "working title"
                  },
                     {
                    author: users[1],
                    body: "DS body of question 2",
                    title: "working title"
                  },
                     {
                    author: users[2],
                    body: "DS body of question 3",
                    title: "working title"
                  }
                 ]
    }
  ];
}


// {
//   author: users[0],
//   body: "body of question 1",
//   title: "testing 1"
// },
//    {
//   author: users[1],
//   body: "body of question 2",
//   title: "testing 2"
// },
//    {
//   author: users[2],
//   body: "body of question 3",
//   title: "testing 3"
// }


// function definedQuestions(users) {
//   return [
//     {
//       author: user[0],
//       body: "body of question 1"
//     },
//        {
//       author: user[1],
//       body: "body of question 2"
//     },
//        {
//       author: user[2],
//       body: "body of question 3"
//     }
//   ];
// }



