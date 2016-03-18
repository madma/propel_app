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
                        body: "This is an official denial."
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






// ///reseeding classroom with old stuff end here
// function definedClassrooms(users) {
//   console.log("where stopped?")
//   return
// //below and until the next comment are seeds before editing for a fully fledged classroom

// /*
//   [
//   {
//     name: 'WDI-DTLA-8',
//     creator: users[0],
//     admins: [users[0], users[1], users[2]],
//     students: users.slice(-3),  //this .slice returns an array object
//     professionals: [users[1], users[2], users[3]],
//     signUpCode: "8888888",
//     questions: [
//     {
//       author: users[0],
//       body: "WDI body of question 1",
//       title: "working title"
//     },
//     {
//       author: users[1],
//       body: "WDI body of question 2",
//       title: "working title"
//     },
//     {
//       author: users[2],
//       body: "WDI body of question 3",
//       title: "working title"
//     }
//     ]
//   },
//   {
//     name: 'UX-DTLA-6',
//     creator: users[1],
//     admins: [users[0], users[1], users[2]],
//     students: users.slice(8),
//     professionals: [users[1], users[2], users[3]],
//     signUpCode: "123111",
//     questions: [
//     {
//       author: users[0],
//       body: "UX body of question 1",
//       title: "working title"
//     },
//     {
//       author: users[1],
//       body: "UX body of question 2",
//       title: "working title"
//     },
//     {
//       author: users[2],
//       body: "UX body of question 3",
//       title: "working title"
//     }
//     ]
//   },
// */
//   //above are seeds before editing for a fully fledged classroom

//     [
//       { //beginning of classroom object fully fledged
//         name: 'WDI-DTLA-8',
//         creator: users[0],
//         admins: [users[0], users[1], users[2]],
//         students: users.slice(-3),
//         professionals: [users[1], users[2], users[3]],
//         signUpCode: "111111",
//         questions: [
//         {
//           author: users[14],
//           body: "That's not to say I don't have my suspicions. It all started with the fun facts. Some wiseaccre logged in as Tanuga Falls and ripped my world report. Who are they? Where do they come from? Where are they coding? My investigation has gone international, with some deep and mysterious instruments of statecraft apparently at work to thwart my quest for the truth and bury the answer forever. This forum is my last recourse. Who is Tanuga Falls?",
//           title: "This is driving me crazy. Who's Tanuga Falls?",
//           answers: [
//           {
//             author: users[9],
//             body: "It's Phil, lol. Camp Tanuga is his ancestral summer camp, a mere 380 miles from Cleveland. ",
//             comments: [
//             {
//               author: users[0],
//               body: "This is an official denial."
//             }
//             ],
//             tags: [{taggy},{tag}]
//           }
//           ]
//         },
//         {
//           author: users[12],
//           body: "Move Hamburger with Sidebar?",
//           title: "I'm doing a sidebar; when tracing the button it shows, but when tracing back it's hidden. THE PROBLEM: What happens? What I want is:depending on the screen resolution, get it to remain in the same place without pressing the button. Now when I go to another PC with a resolution, 1400x by 800x, say, it is not in place. Also when clicking the button, I extand the sidebar and it's right next to the window button. What happens now is that when I click on the button, it magically becomes a hamburger. Huh?",
//           answers: [
//           {
//             author: users[2],
//             body: 'Dude you gotta frame this in terms of a hamburger user story, I cannot make heads or tails of this without it, sorry bro',
//             comments: [
//             {
//               author: users[0],
//               body: "Sacre bleu! I'll just roll with it; try setting some absolute dimensions. That might solve your issue if I'm taking your meaning correctly."
//             }
//             ],
//             tags: [{hamburgers},{wootbeer}]
//           }
//           ]
//         },
//         {
//           author: users[13],
//           body: "I ACCIDENTALLY TURNED IT ON YESTERDAY AND DON'T KNOW HOW TO TURN IT BACK OFF. ALL MY FRIENDS ARE MAD BEDAUSE THEY THINK I AM SHOUTING AT THEM OVER THE INTERNET, THIS PROBLEM IS LITERALLY RUINING MY LIFE, MY CAREER, AND TEARING MY FAMILY APART. XI JINPING WANTS TO KICK ME OUT OF CHINA. I JUST WANT TO BE WHOLE AGAIN, PLEASE HELP",
//           title: "HOW DO I TURN OFF MY CAPS LOCK?",
//           answers: [
//           {
//             author: users[jim],
//             body: "YES, CAPS LOCK IS A REALLY SERIOUS PROBLEM NOWADAYS AND THEN YOU GET ADDICTED TO IT. I THINK PEOPLE SHOULD BE MORE CAREFUL AND SENSIBLE WITH CAPSLOCKADDICTED PEOPLE. WITH A STRONG WILL, I THINK YOU CAN OVERCOME IT AND PRESS THE CAPSLOCK BUTTON AT LAST",
//             comments: [
//             {
//               author: users[13],
//               body: "WORKED LIKE A CHARM THANKS"
//             }
//             ],
//             tags: [{CAPSLOCK}]
//           }
//           ]
//         }]
//       },
//       { //beginning of classroom object fully fledged
//         name: 'WDI-DTLA-10',
//         creator: users[0],
//         admins: [users[0], users[1], users[2]],
//         students: users.slice(-3),
//         professionals: [users[1], users[2], users[3]],
//         signUpCode: "222222",
//         questions: [
//         {
//           author: users[14],
//           body: "That's not to say I don't have my suspicions. It all started with the fun facts. Some wiseaccre logged in as Tanuga Falls and ripped my world report. Who are they? Where do they come from? Where are they coding? My investigation has gone international, with some deep and mysterious instruments of statecraft apparently at work to thwart my quest for the truth and bury the answer forever. This forum is my last recourse. Who is Tanuga Falls?",
//           title: "This is driving me crazy. Who's Tanuga Falls?",
//           answers: [
//           {
//             author: users[9],
//             body: "It's Phil, lol. Camp Tanuga is his ancestral summer camp, a mere 380 miles from Cleveland. ",
//             comments: [
//             {
//               author: users[0],
//               body: "This is an official denial."
//             }
//             ],
//             tags: [{taggy},{tag}]
//           }
//           ]
//         },
//         {
//           author: users[12],
//           body: "Move Hamburger with Sidebar?",
//           title: "I'm doing a sidebar; when tracing the button it shows, but when tracing back it's hidden. THE PROBLEM: What happens? What I want is:depending on the screen resolution, get it to remain in the same place without pressing the button. Now when I go to another PC with a resolution, 1400x by 800x, say, it is not in place. Also when clicking the button, I extand the sidebar and it's right next to the window button. What happens now is that when I click on the button, it magically becomes a hamburger. Huh?",
//           answers: [
//           {
//             author: users[2],
//             body: 'Dude you gotta frame this in terms of a hamburger user story, I cannot make heads or tails of this without it, sorry bro',
//             comments: [
//             {
//               author: users[0],
//               body: "Sacre bleu! I'll just roll with it; try setting some absolute dimensions. That might solve your issue if I'm taking your meaning correctly."
//             }
//             ],
//             tags: [{hamburgers},{wootbeer}]
//           }
//           ]
//         },
//         {
//           author: users[13],
//           body: "I ACCIDENTALLY TURNED IT ON YESTERDAY AND DON'T KNOW HOW TO TURN IT BACK OFF. ALL MY FRIENDS ARE MAD BEDAUSE THEY THINK I AM SHOUTING AT THEM OVER THE INTERNET, THIS PROBLEM IS LITERALLY RUINING MY LIFE, MY CAREER, AND TEARING MY FAMILY APART. XI JINPING WANTS TO KICK ME OUT OF CHINA. I JUST WANT TO BE WHOLE AGAIN, PLEASE HELP",
//           title: "HOW DO I TURN OFF MY CAPS LOCK?",
//           answers: [
//           {
//             author: users[jim],
//             body: "YES, CAPS LOCK IS A REALLY SERIOUS PROBLEM NOWADAYS AND THEN YOU GET ADDICTED TO IT. I THINK PEOPLE SHOULD BE MORE CAREFUL AND SENSIBLE WITH CAPSLOCKADDICTED PEOPLE. WITH A STRONG WILL, I THINK YOU CAN OVERCOME IT AND PRESS THE CAPSLOCK BUTTON AT LAST",
//             comments: [
//             {
//               author: users[13],
//               body: "WORKED LIKE A CHARM THANKS"
//             }
//             ],
//             tags: [{CAPSLOCK}]
//           }
//           ]
//         }]
//       },
//       { //beginning of classroom object fully fledged
//         name: 'WDI-DTLA-11',
//         creator: users[0],
//         admins: [users[0], users[1], users[2]],
//         students: users.slice(-3),
//         professionals: [users[1], users[2], users[3]],
//         signUpCode: "333333",
//         questions: [
//         {
//           author: users[14],
//           body: "That's not to say I don't have my suspicions. It all started with the fun facts. Some wiseaccre logged in as Tanuga Falls and ripped my world report. Who are they? Where do they come from? Where are they coding? My investigation has gone international, with some deep and mysterious instruments of statecraft apparently at work to thwart my quest for the truth and bury the answer forever. This forum is my last recourse. Who is Tanuga Falls?",
//           title: "This is driving me crazy. Who's Tanuga Falls?",
//           answers: [
//           {
//             author: users[9],
//             body: "It's Phil, lol. Camp Tanuga is his ancestral summer camp, a mere 380 miles from Cleveland. ",
//             comments: [
//             {
//               author: users[0],
//               body: "This is an official denial."
//             }
//             ],
//             tags: [{taggy},{tag}]
//           }
//           ]
//         },
//         {
//           author: users[12],
//           body: "Move Hamburger with Sidebar?",
//           title: "I'm doing a sidebar; when tracing the button it shows, but when tracing back it's hidden. THE PROBLEM: What happens? What I want is:depending on the screen resolution, get it to remain in the same place without pressing the button. Now when I go to another PC with a resolution, 1400x by 800x, say, it is not in place. Also when clicking the button, I extand the sidebar and it's right next to the window button. What happens now is that when I click on the button, it magically becomes a hamburger. Huh?",
//           answers: [
//           {
//             author: users[2],
//             body: 'Dude you gotta frame this in terms of a hamburger user story, I cannot make heads or tails of this without it, sorry bro',
//             comments: [
//             {
//               author: users[0],
//               body: "Sacre bleu! I'll just roll with it; try setting some absolute dimensions. That might solve your issue if I'm taking your meaning correctly."
//             }
//             ],
//             tags: [{hamburgers},{wootbeer}]
//           }
//           ]
//         },
//         {
//           author: users[13],
//           body: "I ACCIDENTALLY TURNED IT ON YESTERDAY AND DON'T KNOW HOW TO TURN IT BACK OFF. ALL MY FRIENDS ARE MAD BEDAUSE THEY THINK I AM SHOUTING AT THEM OVER THE INTERNET, THIS PROBLEM IS LITERALLY RUINING MY LIFE, MY CAREER, AND TEARING MY FAMILY APART. XI JINPING WANTS TO KICK ME OUT OF CHINA. I JUST WANT TO BE WHOLE AGAIN, PLEASE HELP",
//           title: "HOW DO I TURN OFF MY CAPS LOCK?",
//           answers: [
//           {
//             author: users[jim],
//             body: "YES, CAPS LOCK IS A REALLY SERIOUS PROBLEM NOWADAYS AND THEN YOU GET ADDICTED TO IT. I THINK PEOPLE SHOULD BE MORE CAREFUL AND SENSIBLE WITH CAPSLOCKADDICTED PEOPLE. WITH A STRONG WILL, I THINK YOU CAN OVERCOME IT AND PRESS THE CAPSLOCK BUTTON AT LAST",
//             comments: [
//             {
//               author: users[13],
//               body: "WORKED LIKE A CHARM THANKS"
//             }
//             ],
//             tags: [{CAPSLOCK}]
//           }
//           ]
//         }]
//       }
//     ];
//   }

//above is one complete classroom with three questions
//one answer per question, and one comment per answer




