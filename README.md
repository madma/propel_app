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
