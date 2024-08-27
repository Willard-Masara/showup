import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="myImage">
        <img src="/willard.jpg" alt="Me" />
        </div>
 
        <p>
         Hi, call me Will...
        </p>
      </header>
      <section>
      <h2 className="first">SKILLS</h2>
      <p>C,PYTHON, JAVASCRIPT,C#,REACT,DJANGO,FLASK,SQL,MONGODB,NODE.JS EXPRESS</p>
      <h2 clasName="second">PROJECTS</h2>
      <ul>
        <a href="https://eva-quiz.netlify.app"><h2>QUIZ</h2></a>
        Tech Stack: React.js
        <p>Project Description: </p>
        This mini project is a revision on the go project, wherein a number of questions related to programming are asked and one has to answer. Very basic 
        project, but it pin points the very make up of React and the issue of state management.
       <p>On github : <a href="https:github.com/Willard-Masara/Quiz">quiz</a></p>
        <p>SCREENSHOT:</p>
        <div className="screenshot">
        <img src="/julius.jpg" alt="julio"/>
        </div>

        <a href="https://cleets.netlify.app"><h2>SportWear</h2></a>
        Tech Stack: React.js
        <p>Project Description: </p>
        This is a mini project that simplifies the underlyings of an ecommerce shop, specifically the workings of a user buying and how it could be happening.
        The project cements knowledge about state management using react.
        <p>On github: <a href="https://github/Willard-Masara/sportwear">sportwear</a></p>
        SCREENSHOT:
        <div className="screenshot">
        <img src="/boot.jpg" alt="cleets"/>
          </div>


        <a href="https://www.github.com/Willard-Masara/Menu-Master"><h2>MenuMaster</h2></a>
        Tech Stack: Python (Flask), React
        <p>Project Description:</p> 
        This is a web scraping project that seeks to enhance convenience for restaurant customers by bringing menus into one place and displays common meals and their prices 
        in different outlets in one page! This seeks to help a customer make an informed decision about where to eat. 
        <p>On github:</p><a href="https://www.github.com/Willard-Masara/Menu-Master">MenuMaster</a>
        SCREENSHOT:
        <div className="screenshot">
          <img src="/menu.png" alt="menuItem"/>
        </div>
        <a href="https://www.github.com/Willard-Masara/FindMe"><h2>FindMe</h2></a>
        Tech Stack: Node.js express, MongoDB, React
        <p>Project Description: Coming Soon</p>
        A website meant to help curb child trafficking in South Africa, it works as a public notice board whereby a user uploads a picture of a missing child and then
        to the site, with circumstances of disappearance. It is meant to alert the public and help reduce reaction time by the relevant authorities
        


      </ul>


      </section>
  <footer>&reg; MASARA DEVS 2024</footer>
  </div>
  );
}

export default App;
