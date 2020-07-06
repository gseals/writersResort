# NSS Evening Cohort 10 Capstone: writersResort

## Demo Link

[Check out the Project](https://writersresort-97d54.firebaseapp.com/auth)

## Requirements

* React
* CRUD using Firebase
* Bootstrap
* Github Projects for planning

## Technologies Used

* [Axios 0.19.1](https://www.npmjs.com/package/axios)
* [Bootstrap 4.4.1](https://getbootstrap.com/)
* [CSS3](https://www.w3.org/Style/CSS/Overview.en.html)
* [ESLint 14.0.0](https://eslint.org/)
* [Firebase 7.7.0](https://firebase.google.com/)
* [Fontawesome-svg-core 1.2.28](https://www.npmjs.com/package/@fortawesome/fontawesome-svg-core)
* [HTML5](https://html.spec.whatwg.org/multipage/)
* [JavaScript](https://www.javascript.com/)
* [Moment.js 2.24.0](https://momentjs.com/)
* [Prop-Types 15.7.2](https://www.npmjs.com/package/prop-types)
* [ReactDOM 16.12.0](https://www.npmjs.com/package/react-dom)
* [ReactJS 16.12.0](https://reactjs.org/docs/create-a-new-react-app.html)
* [React Flip Move 3.0.4](https://www.npmjs.com/package/react-flip-move)
* [React-fontawesome 0.1.9](https://www.npmjs.com/package/react-fontawesome)
* [React Router DOM 5.1.2](https://www.npmjs.com/package/react-router-dom)
* [Reactstrap 8.4.1](https://reactstrap.github.io/)
* [SCSS 4.13.1](https://sass-lang.com/)


## Description

* writersResort allows users to post poems and invite feedback on those poems. Each user has access to edit and delete their own posts or comments, via Axios calls. Each deleted post also deletes any comments associated with the post. Authentication occurs through Google and pulls user's displayURL and Google Username. Each post/comment is stamped with the time it was created and updated.

## Application Features

* Sign in with Google
* Users VIEW all postings upon logging in
* Each post bears its creator's Google displayURL
* Posts and comments ordered by newest first

### Users can

### Posts
* Create a new Post
* View all Posts regardless of creator
* Update a Post they created
* Delete any Post they created

### Comments
* Create Comments on a post
* View all Cmments regardless of creator
* Update a Comment they created
* Delete any Comment they created

## Screenshots

Auth Page
![Auth Page](https://raw.githubusercontent.com/gseals/writersResort/master/screenshots/auth.png)

About Page
![About Page](https://raw.githubusercontent.com/gseals/writersResort/master/screenshots/about.png)

All Posts/Logged In Landing Page
![All Posts/Logged In Landing Page](https://raw.githubusercontent.com/gseals/writersResort/master/screenshots/AllPosts.png)

Create Post
![Create Post](https://raw.githubusercontent.com/gseals/writersResort/master/screenshots/CreatePost.png)

Create Post (alert for no text)
![Create Post (alert for no text)](https://raw.githubusercontent.com/gseals/writersResort/master/screenshots/CreatePostNoText.png)

Edit Post
![Edit Post](https://raw.githubusercontent.com/gseals/writersResort/master/screenshots/EditPost.png)

All Posts with updated Post ("Last updated" now appears on the updated Post)
![All Posts with updated Post](https://raw.githubusercontent.com/gseals/writersResort/master/screenshots/AllPostsUpdatedPost.png)

Comments Page
![Comments Page](https://raw.githubusercontent.com/gseals/writersResort/master/screenshots/CommentsPage.png)

New Comment Added
![Adding Comment](https://raw.githubusercontent.com/gseals/writersResort/master/screenshots/NewComment.png)

Original Comment Field doubles as the Update Field
![Comments with updated Comment Field](https://raw.githubusercontent.com/gseals/writersResort/master/screenshots/UpdateCommentTrigger.png)

Comments with updated Comment ("Comment updated" now appears on the updated Comment)
![Comments with updated Comment](https://raw.githubusercontent.com/gseals/writersResort/master/screenshots/UpdatedComment.png)

Comments (alert for no text)
![Comments (alert for no text)](https://raw.githubusercontent.com/gseals/writersResort/master/screenshots/CommentNoText.png)

## How to Run

* Clone down this project from [GitHub](https://github.com/gseals/writersResort)
* Install [http-server](https://www.npmjs.com/package/http-server) from npm.
* In your browser, navigate to [https://localhost:3000/](https://localhost:3000/)

## Contributors

[Gabriel Seals](https://github.com/gseals)

#### Sources:

* typewriter on all pages: [unsplash](https://unsplash.com/photos/0gkw_9fy0eQ)

* textbook paper background: https://www.codesdope.com/blog/article/getting-notebook-paper-effect-with-css/

* original thumbtack code: https://codepen.io/selfpressed/pen/Aiqoy

* comment post it notes: [original](http://creative-punch.net/2014/02/create-css3-post-it-note/) [jsfiddle](https://jsfiddle.net/doug99collins/8v02zj5k/)

* image on Auth page: [unsplash](https://unsplash.com/photos/HzTJMkjctKE)

* notebook and key on About page: [unsplash](https://unsplash.com/photos/o9KNLaITFYw)

* Roger's profile photo: [unsplash](https://unsplash.com/photos/9R-CH7PR150)

* scattered paper in comments: [unsplash](https://unsplash.com/photos/aJTiW00qqtI)

* brown paper on make comment: [unsplash](https://unsplash.com/photos/Y3vPEuNlf7w)
