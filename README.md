# Propel! learning, boosted.


Propel! is a real-time Questions and Answers app specifically created for in-class training for higher education.  It can be frustrating and a bit overwhelming to have a question during the class, and not having/taking the opportunity to ask in that moment.  Now students can seize that moment, and receive answers immediately from the instructor or their peers...and even industry professionals, instantly.  While there are sites such as Stack Overflow that have a Q/A forums, it's sometimes extremely difficult to sift through the things that are irrelevant to a student's precise question, or to interpret the answers for their own purpose.  Propel! offers the student the unique opportunity to receive answers from his/her peers, instructor(s), and industry professionals immediately and tailored specifically for their enrichment.


## Who benefits and how?

* Obviously, the student who initiates the question has instant access to answers and avoids the potential to either forget about their question or waste valuable time searching for an answer that may lead them to having even more questions.  Also, that student could start open dialogue with someone currently working in their chosen field, thus building their professional network.
* The instructor can answer the questions they may have normally missed. Also, if there's a subject matter that has a particularly high volume of the same type of questions, she/he can take the proper steps to rearrange the way they disseminate, or further elucidate that information.
* Students who answer the questions, have the chance to reinforce what they've learned by explaining the principles incorporated into the subject matter. Their peers can also submit an upvote on answers that are deemed sound, and the more a student receives upvotes for the various questions answered, they'll be awarded higher status as a user with technical expertise.

## Ambitious? Yes.

One of the beautiful things about Propel! is its potential to grow and emerge.  A couple of features that will be implemented in the near future are:

* A working professional, via our LinkedIn API, gets a chance to stay sharp on basic skills and add an element of mentorship to the students. If that professional is a part of the talent acquisition element of his/her company, they can tap into a valuable resource of promising talent, as well.
* Multiple institutions will be able to join the discussions, offering a view into their course work, and providing a different perspective in the learning process.

Ambition is what draws you to Propel! in the first place!



## Get started now!
It's as easy as clicking our login button and granting LinkedIn authorization to release the information you agree to.  Propel! will ask a for a few extra bits of information to ensure you're able to participate in your proper class or subject matter.  You don't have to worry about creating a new password, only to forget it later.

If you're ready for a fast-paced, thorough, and engaging learning experience, that will most certainly add a boost to your future endeavors, Propel! is just the vehicle for you!
 
=======
# Propel!
###Learning, boosted.

[Check out Propel's Trello Board](https://trello.com/b/vsHXqFEq/wdi-project-3-propel)

[Also, check out our Pitch Deck:]
(https://drive.google.com/file/d/0B-gPQrW54-ySSXk1NGZ2NGYybHM/view?usp=sharing)

Propel! is a real-time Question and Answer app for classrooms. Speaking out in class is tough: the pace of a lesson might be too fast for pausing to ask questions, or a student simply might not feel comfortable.

Propel! changes that by ofering a forum for students to speak up, be heard, and have their questions answered. Instructors are better able to guage classroom learning live by seeing exactly how many students are having trouble grasping specific concepts. Students are encouraged to gain reputation points by posting insightful answers, and instructors can tailor lessons precisely toward students’ needs. 

Propel!’s LinkedIn integration also gives instructors the option to connect their professional networks with their classrooms, opening the class dialog to outside experts and helping students make industry connections.

##How To Use Propel! to Boost Your Classroom Experience

Propel! features a landing page/home page that displays and links to product information, information about the Propel! project, and most importantly invites users to sign in with LinkedIn.

Once signed in, users are brought to the Propel! classroom, where they are prompted to add personal information. Users can then click a button to join a class their instructor or organization administrator has provided them a sign in code for. 

Once signed in, users can click on any class they are a member of, click a button to ask a question (complete with question title and body). After submitting the question, anybody who is a member of the class may answer the question and comment on the answers. Users may upvote quality questions and answers to lend popularity to those questions and answers.

The effect is to generate a running FAQ of student questions that makes learning more efficient, and fun!

##Technologies Utilized

A variety of languages, frameworks, libraries, and other technologies were used to create Propel. 

* HTML: Used to create page elements

* CSS: Used to style page elements

  Twitter Bootstrap: a framework for creating responsive and organized page layouts
* Javascript: Used for DOM manipulation, authentication, routing, controlling, and most dynamic page actions, among other functions

  jQuery: framework useful for easing the task of manipulating the DOM

  SocketIO: framework that enables real-time rendering for multiple viewers

  Ajax: asynchronous real-time rendering, among other capabilities

  MEN Stack:

   MongoDB: non-relational database system on which all user and classroom data is stored and organized. Mongoose was used as an intermediary for manipulating databases

   Express.js: Server framework for node.js

   Node.js: Runtime environment for the application   

* In addition, LinkedIn's OAuth was used to sign up and authenticate users of Propel.
* Other Technologies: Sublime Text (composition), Git (version control), Bootply (views testing), Heroku (deployment), Lodash (text parsing), and others.

##General Approach for Assembly

Our team took advantage of the AGILE approach to development. AGILE encourages developers to envision project features in terms of the needs of site users. To this end, we generated numerous "user stories": what users would want to do or see on the site, and why.

> As a user, I want to receive answers to my questions from my fellow students, my instructors and professionals working in the industry.

We then made diagrams of our data model (ERD):

![alt text](http://i.imgur.com/16wq2gY.png)

We then generated static visuals to begin realizing our user stories. These included wireframes, or diagrams, of site views. 

![alt text](http://i.imgur.com/9HfYKVH.jpg?1)

![alt text](http://i.imgur.com/07rP4Mg.jpg)

Concurrently, we developed a "pitch deck" that expressed our developing vision for Propel in terms of a business proposition to be pitched to investors.

Development then proceeded along two parallel paths: front-end web design beside back-end functionality. Once front-end views were templated, they were converted into embedded javascript files, a requirement for making our website a dynamic entity. At the same time, a great deal of applied logic went into creating seed data, routes, controller actions, and other computational structures.

Gradually these two halves came together to form a site we hope you enjoy.

##Installation Instructions

Javascript: Used for DOM manipulation, authentication, routing, controlling, and most dynamic page actions, among other functions
    jQuery: framework useful for easing the task of manipulating the DOM
    SocketIO: framework that enables real-time rendering for multiple viewers
    Ajax: asynchronous real-time rendering, among other capabilities
    MEN Stack:
        MongoDB: non-relational database system on which all user and classroom data is stored and organized. Mongoose was used as an intermediary for manipulating databases
        Express.js: Server framework for node.js
        Node.js: Runtime environment for the application
    
In addition, LinkedIn's OAuth was used to sign up and authenticate users of Propel.

Other Technologies: Sublime Text (composition), Git (version control), Bootply (views testing), Heroku (deployment), among others.

-

General Approach for Assembly

Our team took advantage of the AGILE approach to development. AGILE encourages developers to envision project features in terms of the needs of site users. To this end, we generated numerous "user stories": what users would want to do or see on the site, and why.

We then generated static visuals to begin realizing our user stories. These included wireframes, or diagrams, of site views. Concurrently, we developed a "pitch deck" that expressed our developing vision for Propel in terms of a business proposition to be pitched to investors.

Development then proceeded along two parallel paths: front-end web design beside back-end functionality. Once front-end views were templated, they were converted into embedded javascript files, a requirement for making our website a dynamic entity. At the same time, a great deal of applied logic went into creating seed data, routes, controller actions, and other computational structures.

Gradually these two halves came together to form a site we very much hope you enjoy.

-

Installation Instructions

Don't use IE.

--

Planning Documents and Business Information

[Links to your planning docs, including data models, wireframes, and your presentation deck.]

-

Unsolved Problems and Features to Be Added...

... are to be determined is the end of that sentence.
Descriptions of any unsolved problems or major hurdles your team had to overcome.

--

Propel! runs in all modern browsers without the need for special software.

We recommend that you don't use IE.

##Planning Documents and Business Information

[Links to your planning docs, including data models, wireframes, and your presentation deck.]

##Unsolved Problems and Features to Be Added

Propel will be expanded in the future with the following cool features:

* Authentication through Google as an additional option to LinkedIn
* Instructors will be able to upload lesson outlines so that students will be able to interact with their classes with greater levels of precision
* Although classrooms in Propel! are currently private, features will be added in the future to allow for public Q&A

##Team
Contributing to Propel! are:

Keith To

Jerry Lee

Tony Estese

Michael Duran

James Coslett
