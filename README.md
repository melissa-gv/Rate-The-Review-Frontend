# Rate The Review

<p align="center"><img alt="Rate The Review Logo" src="public/Rate-the-Review-logos-white.png" width="400" /></p>

## Overview
Rate the Review is an online web-app game in which users enter a zipcode and are prompted with local restaurants' Yelp reviews and guess the review rating.

[Backend Repo](https://github.com/melissa-gv/Rate-The-Review-Backend)

## Tech Stack
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Javscript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HHTML 5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Node JS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![YELP Fusion API](https://img.shields.io/badge/Yelp%20Fusion%20API%20-red?style=for-the-badge&logo=appveyor&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)
![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)


## About the App
<p align="center"><img width="800" alt="fullscreen view of home page" src="https://user-images.githubusercontent.com/104800030/213286200-b640f118-e4ee-4be2-b72c-7f0a6e24095c.png"></p>

### Background
I developed this app while I was a student at Hack Reactor completing a Software Engineering Immersive program. This app was part of a solo-sprint in which we were tasked with creating a minimum viable product (MVP) in two days. I have added additonal functionality and other enhancements upon completion of the program. 

### Authentication
#### Firebase Authentication with multiple providers
Users have the option to sign-in with either their Google, Facebook, or email accounts. This will ensure that game data is saved for each user.

<p align="center"><img width="800" alt="firebase google authentication screen" src="https://user-images.githubusercontent.com/104800030/213815638-ccadd2be-80a5-4231-aceb-c570eee79b15.png"></p>

#### Guest Login and Validation
Alternatively, users can play as a guest without the need to create an account. The username form has input validation that enforces and provides instant feedback once a valid username has been entered.

<img width="450" alt="guest validation" src="https://user-images.githubusercontent.com/104800030/213288465-7b1ecb09-39ff-4cb7-b272-462134b0ff1e.png"> <img width="450" alt="guest validation success" src="https://user-images.githubusercontent.com/104800030/213288475-b706615a-be7f-4c97-b3db-f10a6a2fbbe8.png">

### Accessibility Features:
- A key focus of the code was to use semantically correct HTML tags to make it screenreader-friendly.
- User input feedback uses icons and does not rely on color alone to relay a response back to the user.
- Descriptive alt tags are added to images to convey meaning for visually-impaired players.
- Usage of adequate color contrasts (passes [WCAG AA standards](https://www.w3.org/WAI/WCAG2AA-Conformance)) throughout.


### Responsive Resizing
Responsive Resizing was kept in mind to accomodate various types of mobile devices.

#### iPhone
<p align="center"><img width="250" alt="home-iphone12Pro" src="https://user-images.githubusercontent.com/104800030/214650148-27fab73e-9122-490b-aad1-1607e3da6f2d.png"> <img width="250" alt="play-iphone12ProMax" src="https://user-images.githubusercontent.com/104800030/214651459-b4dd8c09-f29d-4444-b38b-932b5a9ff414.png"></p>

#### Galaxy S12 Ultra
<p align="center"><img width="250" alt="play-galaxy-S21-Ultra" src="https://user-images.githubusercontent.com/104800030/214646172-da273f4b-9bb3-45e8-812f-c48338ba8af2.png"> <img width="250" alt="results-galaxy-S21-Ultra" src="https://user-images.githubusercontent.com/104800030/214646353-70ee7e02-a470-4748-973a-5a796e88defb.png"></p>

#### Google Pixel 6 Pro
<p align="center"><img width="400" alt="leaderboard-Google-Pixel-6Pro" src="https://user-images.githubusercontent.com/104800030/214646457-194e4ac8-02d7-4d1b-a95d-4cd87d61a3fc.gif"></p>

### How to Play
#### Game setup:
Users enter the zipcode for the location in which they'd like to play.

<p align="center"><img width="800" alt="game-setup screen" src="https://user-images.githubusercontent.com/104800030/213586319-78c6f097-0e23-433b-b2cc-be8f818d671b.png"></p>

#### Game Play:
Once the reviews have loaded, users have 15 seconds to read and guess the reviews' rating. Once a response is submitted, descriptive feedback is provided to relay if the guess was correct, incorrect, or close. It also communicates the number of points gained for the round as well as total points for the current game. Emoticons were added to the results alert to clearly show the round's result so as to not rely on color alone to convey a response.

<img width="333" alt="correct-response-screen" src="https://user-images.githubusercontent.com/104800030/213590524-71459e9f-298d-4679-bbc8-3111664825f2.png"> <img width="333" alt="close-response-screen" src="https://user-images.githubusercontent.com/104800030/213590559-f4428f6d-e00b-4a41-8c71-b79cf1e5b461.png"> <img width="333" alt="incorrect-response-screen" src="https://user-images.githubusercontent.com/104800030/213590691-eb99b1f3-39a2-4027-9ef1-c1f07036cfcf.png">

#### Results Page:
Upon completion of the game, the interactive results page displays the restaurants that were played along with any relevant information about the restaurant, links to the full Yelp page, and an accordion that shows the the reviews. 
<p align="center"><img width="800" alt="results-page-reviews-collapsed" src="https://user-images.githubusercontent.com/104800030/213817858-d18e5926-caaf-4740-9983-552bdf691e9e.png"> <img width="800" alt="results-page-reviews-expanded" src="https://user-images.githubusercontent.com/104800030/213817805-2b1547e5-9948-4d0d-9bef-09f844c3b5fe.png"></p>

#### Leaderboard:
The leaderboard shows the Top Ten scores. This was created by querying the MongoDB database for the top scores usings an aggregate function.

<p align="center"><img width="800" alt="leaderboard" src="https://user-images.githubusercontent.com/104800030/213587955-8d07dab9-48d2-4cf6-9d01-c2684bd4f031.png"></p>


## Challenges
1. The Yelp Fusion API provides review excerpts that are capped at ~155 characters. As this was not conducive to an enjoyable playing experience, I opted to perform a hybrid approach in which I obtained the business information from the Yelp API and then use the response data to perform a query on the site to obtain the full review text. I used the [jsdom](https://github.com/jsdom/jsdom) library to emulate a browser and extract the necessary information.
2. Per [Yelp display requirements](https://www.yelp.com/developers/display_requirements), Yelp-branded stars must be used when representing a Yelp rating. As such, I overlayed Yelp's stars imagery over radion buttons and label, which where then heavily customized using CSS to utilize the stars as voting buttons. 
3. To ensure a consistent game experience across various devices, including mobile, I wanted to make the design responsive to all viewports. Bootstrap faciliated much of the process, but it was also necessary to use custom breakpoints and CSS media queries to show a clean UI for varying screen sizes.


## Contact Me
💬 You can reach me at melissagilv@gmail.com or message me on [LinkedIn](https://www.linkedin.com/in/melissa-gv/).
