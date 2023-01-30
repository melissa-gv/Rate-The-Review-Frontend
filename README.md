# Rate The Review

<p align="center"><img alt="Rate The Review Logo" src="public/Rate-the-Review-logos-white.png" width="400" /></p>

## Overview
Rate the Review is a web app game in which users enter a zipcode and are prompted with local restaurants' Yelp reviews and guess the review rating.

[Backend Repo](https://github.com/melissa-gv/Rate-The-Review-Backend)

## Tech Stack
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Javscript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
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
I developed this app while I was a student at Hack Reactor completing a Software Engineering Immersive program. This app was part of a solo-sprint in which we were tasked with creating a minimum viable product (MVP) in two days. I have added additional functionality and other enhancements upon completion of the program. 

### How to Play
#### Game setup:
Once a user sets up a username or is authenticated they can begin a game. In the game setup screen, they can enter a zipcode for their preferred playing location. Once a zipcode is submitted, the app then fetches restaurants and reviews from the Yelp Fusion API. For the full backend code, please refer to [Backend Repo](https://github.com/melissa-gv/Rate-The-Review-Backend).

<p align="center"><img width="800" alt="home page and google authentication demo" src="https://user-images.githubusercontent.com/104800030/214932415-88b6e2fe-eb3a-4523-b3f9-878b66d09f85.gif"></p>

#### Game Play:
Once the reviews have loaded, users have 15 seconds to read and guess the reviews' rating. Once a response is submitted, descriptive feedback is provided to relay if the guess was correct, incorrect, or close. It also communicates the number of points gained for the round as well as total points for the current game. Emoticons were added to the results alert to clearly show the round's result so as to not rely on color alone to convey a response.

<p align="center"><img width="800" alt="game play demo" src="https://user-images.githubusercontent.com/104800030/214956781-948cbfe4-252f-440d-a4da-11dc8da185f9.gif"></p>


#### Results Page:
Upon completion of the game, the interactive results page displays the restaurants that were played along with any relevant information about the restaurant, links to the full Yelp page, and an accordion that shows the reviews. 
<p align="center"><img alt="results page demo" src="public/results-5x.gif" width="800" /></p>


#### Leaderboard:
The leaderboard shows the Top Ten scores. This was created by querying the MongoDB database for the top scores usings an aggregate function.

<p align="center"><img width="800" alt="leaderboard" src="https://user-images.githubusercontent.com/104800030/213587955-8d07dab9-48d2-4cf6-9d01-c2684bd4f031.png"></p>

### Authentication
#### Firebase Authentication with multiple providers
Users have the option to sign-in with either their Google, Facebook, or email accounts. This will ensure that game data is saved for each user.

<p align="center"><img width="700" alt="firebase google authentication screen" src="https://user-images.githubusercontent.com/104800030/215582907-832b4c8e-fa1a-4354-977c-50b992c4db6e.png"></p>
<p align="center"><img width="700" alt="facebook authentication screen" src="https://user-images.githubusercontent.com/104800030/215582889-cdec815b-4609-429d-8d82-2b2f8697d4ca.png"></p>
<p align="center"><img width="700" alt="email authentication screen" src="https://user-images.githubusercontent.com/104800030/215583512-cf94abad-1f1c-49c8-9b31-81fbc18206fc.png"></p>


#### Guest Login and Validation
Alternatively, users can play as a guest without the need to create an account. The username form has input validation that enforces and provides instant feedback once a valid username has been entered.

<p align="center"><img width="400" alt="guest validation error" src="https://user-images.githubusercontent.com/104800030/213288465-7b1ecb09-39ff-4cb7-b272-462134b0ff1e.png"> <img width="400" alt="guest validation success" src="https://user-images.githubusercontent.com/104800030/213288475-b706615a-be7f-4c97-b3db-f10a6a2fbbe8.png"></p>

### Accessibility Features:
- A key focus of the code was to use semantically correct HTML tags to make it screenreader-friendly.
- User input feedback uses icons and does not rely on color alone to relay a response back to the user.
- Descriptive alt tags are added to images to convey meaning for visually-impaired players.
- Usage of adequate color contrasts (passes [WCAG AA standards](https://www.w3.org/WAI/WCAG2AA-Conformance)) throughout.


### Responsive Resizing
Responsive Resizing was kept in mind to accommodate various types of mobile devices.

#### iPhone
<p align="center"><img width="250" alt="homepage on iPhone 12 Pro" src="https://user-images.githubusercontent.com/104800030/214650148-27fab73e-9122-490b-aad1-1607e3da6f2d.png"> <img width="250" alt="play demo on iPhone 12 Pro Max" src="https://user-images.githubusercontent.com/104800030/214651459-b4dd8c09-f29d-4444-b38b-932b5a9ff414.png"></p>

#### Galaxy S12 Ultra
<p align="center"><img width="250" alt="play demo on Galaxy S21 Ultra" src="https://user-images.githubusercontent.com/104800030/214985292-09e0a21b-9475-44f2-88dd-64b21e47ddde.png"> <img width="250" alt="Results page on Galaxy S21 Ultra" src="https://user-images.githubusercontent.com/104800030/214985321-d9d7e776-c21f-47c0-9df9-b451099b836a.png"></p>

#### Google Pixel 6 Pro
<p align="center"><img width="400" alt="Leaderboard page on GooglePixel 6 Pro" src="https://user-images.githubusercontent.com/104800030/215159425-b5544265-b05f-4ae4-a1b9-35b38ea9b8db.gif"></p>


## Challenges
1. The Yelp Fusion API provides review excerpts that are capped at ~155 characters. As this was not conducive to an enjoyable playing experience, I opted to perform a hybrid approach in which I obtained the business information from the Yelp API and then used the response data to perform a query on the site to obtain the full review text. I used the [jsdom](https://github.com/jsdom/jsdom) library to emulate a browser and extract the necessary information.
2. Per [Yelp display requirements](https://www.yelp.com/developers/display_requirements), Yelp-branded stars must be used when representing a Yelp rating. As such, I overlayed Yelp's stars imagery over radio buttons and labels, which were then heavily customized using CSS to utilize the stars as voting buttons.
3. To ensure a consistent game experience across various devices, including mobile, I wanted to make the design responsive to all viewports. Bootstrap facilitated much of the process, but it was also necessary to use custom breakpoints and CSS media queries to show a clean UI for varying screen sizes.


## Contact Me
💬 Want to connect? I'd love to hear from you! I can be reached at melissagilv@gmail.com on messaged on [LinkedIn](https://www.linkedin.com/in/melissa-gv/).

<a href = "mailto: melissagilv@gmail.com"><img width="30" alt="Gmail logo" src="https://user-images.githubusercontent.com/104800030/215161154-e4a97901-299e-4668-8036-4eaa88887c44.png"></a>   <a href = "https://www.linkedin.com/in/melissa-gv/"><img width="30" alt="LinkedIn logo" src="https://user-images.githubusercontent.com/104800030/215161128-8e4efd05-efe1-4e2e-8e35-9b18650b5f49.png"></a>
