var mongoose = require('./database');

var User = require('../models/user');
var Classroom = require('../models/classroom');

var users;
var classrooms;

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
  Classroom.remove({})
  // continue chaining after mongodb remove method on second model
  .then(function() {
    process.stdout.write("Creating classrooms: ");
    return Classroom.create(definedClassrooms(users));
  })

  .then(function(createdClassrooms) {
    classrooms = createdClassrooms;
    console.log("Database seeded with " + createdClassrooms.length  + " createdClassrooms.");
    console.log(classrooms);
  })

  .catch(function(err) {
    console.log("Error:", err);
  })
  .then(
    closeMongoConnection, // when the chain is successful…
    closeMongoConnection  // when the chain has failed…
  )
});

function closeMongoConnection() {
  mongoose.connection.close(function(err) {
    if (err) console.log(err);
    process.exit(0);
  });
}

function definedUsers() {
 return [
  { type: 'instructor',
    firstName: 'Phil',                  //0
    lastName: 'Hughes',
    email: 'pj@ga.co',
    institution: 'General Assembly',
  },
  { type: 'instructor',
    firstName: 'Ezra',
    lastName: 'Raez',                 //1
    email: 'ezra.raez@generalassemb.ly',
    institution: 'General Assembly',
  },
  { type: 'instructor',
    firstName: 'Jim',
    lastName: 'Clark',                 //2
    email: 'jim.clark@generalassemb.ly',
    institution: 'General Assembly',
  },
  { type: 'instructor',
    firstName: 'Casper',
    lastName: 'Purtlebaugh',                 //3
    email: 'cassie.purtlebaugh@gmail.com',
    institution: 'General Assembly',
  },
  { type: 'instructor',
    firstName: 'Melissa',                 //4
    lastName: 'Wilcox',
    email: 'melissa@emdubb.co',
    institution: 'General Assembly',
  },
  { type: 'instructor',
    firstName: 'Michael',                 //5
    lastName: 'Klophaus',
    email: 'mmklophaus@gmail.com',
    institution: 'General Assembly',
  },
  { type: 'instructor',
    firstName: 'Fernando',
    lastName: 'Orozco',                 //6
    email: 'forozco2085@gmail.com',
    institution: 'General Assembly',
  },
  { type: 'instructor',
    firstName: 'Rob',
    lastName: 'Gonnella',                 //7
    email: 'robgonnella@gmail.com',
    institution: 'General Assembly',
  },
  { type: 'instructor',
    firstName: 'Shanee',                 //8
    lastName: 'Gilboa',
    email: 'shanee85@gmail.com',
    institution: 'General Assembly',
  },
  { type: 'professional',
    firstName: 'Jude',
    lastName: 'Molke',                 //9
    email: 'jude@generalassemb.ly',
    institution: 'General Assembly',
  },
  { type: 'professional',
    firstName: 'Meredith',
    lastName: 'Bryan',                 //10
    email: 'meredith.bryan@ga.co',
    institution: 'General Assembly',
  },
  { type: 'professional',
    firstName: 'Kate',
    lastName: 'Rogers',
    email: 'kate.rogers@generalassemb.ly',                 //11
    institution: 'General Assembly',
  },
  { firstName: 'James',
    lastName: 'Coslett',
    email: 'james.coslett@gmail.com',                 //12
    institution: 'General Assembly',
  },
  { firstName: 'Markus',
    lastName: 'Dioguardi',
    email: 'markus.dioguardi@gmail.com',                 //13
    institution: 'General Assembly',
  },
  { firstName: 'Duane',
    lastName: 'Than',
    email: 'duanethangmail.com',                 //14
    institution: 'General Assembly',
  },  ];
}
//reseeding classroom

function definedClassrooms(users) {
  console.log("where stopped?")
  return [
    {
      name: 'WDI-DTLA-8',
      creator: users[0],
      admins: [users[0], users[1], users[2]],
      students: users.slice(8),
      professionals: [users[1], users[2], users[3]],
      signUpCode: "111111",
      questions: [
                  {
                    author: users[0],
                    body: "WDI body of question 1",
                    title: "working title",
                    answers: [
                    {
                      author: users[9],
                      body: "It's Phil, lol. Camp Tanuga is his ancestral summer camp, a mere 380 miles from Cleveland. ",
                      comments: [
                      {
                        author: users[0],
                        body: "answers.answers.answers.answers.answers.answers."
                      }
                      ],
                      tags: ["tag1","tag2"]
                    }, {
                      author: users[9],
                      body: "It's Phil, lol. Camp Tanuga is his ancestral summer camp, a mere 380 miles from Cleveland. ",
                      comments: [
                      {
                        author: users[0],
                        body: "answers.answers.answers.answers.answers.answers."
                      }
                      ],
                      tags: ["tag1","tag2"]
                    }, {
                      author: users[9],
                      body: "It's Phil, lol. Camp Tanuga is his ancestral summer camp, a mere 380 miles from Cleveland. ",
                      comments: [
                      {
                        author: users[0],
                        body: "answers.answers.answers.answers.answers.answers."
                      }
                      ],
                      tags: ["tag1","tag2"]
                    }
                    ]
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
                 ],

    },
    {
      name: 'UX-DTLA-6',
      creator: users[1],
      admins: [users[0], users[1], users[2]],
      students: users.slice(8),
      professionals: [users[1], users[2], users[3]],
      signUpCode: "222222",
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
      signUpCode: "333333",
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

