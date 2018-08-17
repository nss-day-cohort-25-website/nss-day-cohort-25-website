import React, { Component } from 'react';
import './App.css';
import NavBar from './nav/NavBar';
import MainView from './mainView/Main'
import StudentProfile from './profile/StudentProfile'

// image import
import agobertFun from './img/finalsindividuals1/agobertFun.jpg'
import agobertSerious from './img/finalsindividuals1/agobertSerious.jpg'
import babcockFun from './img/finalsindividuals1/babcockFun.jpg'
import babcockSerious from './img/finalsindividuals1/babcockSerious.jpg'
import bartonFun from './img/finalsindividuals1/bartonFun.jpg'
import bartonSerious from './img/finalsindividuals1/bartonSerious.jpg'
import beecroftSerious from './img/finalsindividuals1/beecroftSerious.jpg'
import carterFun from './img/finalsindividuals1/carterFun.jpg'
import carterSerious from './img/finalsindividuals1/carterSerious.jpg'
import cashewFun from './img/finalsindividuals1/cashewFun.jpg'
import cashewSerious from './img/finalsindividuals1/cashewSerious.jpg'
import debityFun from './img/finalsindividuals1/debityFun.jpg'
import debitySerious from './img/finalsindividuals1/debitySerious.jpg'
import dosterFun from './img/finalsindividuals1/dosterFun.jpg'
import dosterSerious from './img/finalsindividuals1/dosterSerious.jpg'
import fordFun from './img/finalsindividuals1/fordFun.jpg'
import fordSerious from './img/finalsindividuals1/fordSerious.jpg'
import irwinFun from './img/finalsindividuals1/irwinFun.jpg'
import irwinSerious from './img/finalsindividuals1/irwinSerious.jpg'
import kellyFun from './img/finalsindividuals1/kellyFun.jpg'
import kellySerious from './img/finalsindividuals1/kellySerious.jpg'
import landsbergFun from './img/finalsindividuals1/landsbergFun.jpg'
import landsbergSerious from './img/finalsindividuals1/landsbergSerious.jpg'
import matthewsFun from './img/finalsindividuals1/matthewsFun.jpg'
import matthewsSerious from './img/finalsindividuals1/matthewsSerious.jpg'
import meakerFun from './img/finalsindividuals1/meakerFun.jpg'
import meakerSerious from './img/finalsindividuals1/meakerSerious.jpg'
import murphyFun from './img/finalsindividuals1/murphyFun.jpg'
import murphySerious from './img/finalsindividuals1/murphySerious.jpg'
import paulFun from './img/finalsindividuals1/paulFun.jpg'
import paulSerious from './img/finalsindividuals1/paulSerious.jpg'
import pzcFun from './img/finalsindividuals1/pzcFun.jpg'
import pzcSerious from './img/finalsindividuals1/pzcSerious.jpg'
import rafPlaceHolder from './img/finalsindividuals1/rafPlaceHolder.jpg'
import riggsFun from './img/finalsindividuals1/riggsFun.jpg'
import riggsSerious from './img/finalsindividuals1/riggsSerious.jpg'
import schubertFun from './img/finalsindividuals1/schubertFun.jpg'
import schubertSerious from './img/finalsindividuals1/schubertSerious.jpg'
import smithFun from './img/finalsindividuals1/smithFun.jpg'
import smithSerious from './img/finalsindividuals1/smithSerious.jpg'
import swiftFun from './img/finalsindividuals1/swiftFun.jpg'
import swiftSerious from './img/finalsindividuals1/swiftSerious.jpg'
import teagleSerious from './img/finalsindividuals1/teagleSerious.jpg'
import vickersFun from './img/finalsindividuals1/vickersFun.jpg'
import vickersSerious from './img/finalsindividuals1/vickersSerious.jpg'
import youngFun from './img/finalsindividuals1/youngFun.jpg'
import youngSerious from './img/finalsindividuals1/youngSerious.jpg'


class App extends Component {

  // initial state of application, holds student information
  state = {
    modalShown: false,
    modalStudent: null,
    students: [
      { id: 1, first_name: 'Cashew', last_name: 'Agnoletti', serious_photo: cashewSerious, fun_photo: cashewFun, github: 'https://github.com/CashewRose', linkedin: 'https://www.linkedin.com/in/cashew-agnoletti', email: 'danieagnoletti@gmail.com', personal_website: 'URL TK', other_website: '', other_website_description: '', preferred_skill: 'React and JavaScript', bio: 'As an avid gamer who is familiar with a computer I fell in love with programming.' },
      { id: 2, first_name: 'Erin', last_name: 'Agobert', serious_photo: agobertSerious, fun_photo: agobertFun, github: 'https://github.com/eagobert', linkedin: 'https://www.linkedin.com/in/eagobert/', email: 'eagobert@hotmail.com', personal_website: 'www.erinagobert.com', other_website: '', other_website_description: '', preferred_skill: "I'm very interested in exploring how different technologies and programming languages are used for data exploration. I would like to expand on my training in Python and C#, delving into the various packages for data management and analysis", bio: "Air Force veteran and former federal administrator turned budding full-stack software developer. I have a passion for designing and developing information retrieval systems and data visualizations" },
      { id: 3, first_name: 'Rachael', last_name: 'Babcock', serious_photo: babcockSerious, fun_photo: babcockFun, github: 'https://github.com/rsbabcock', linkedin: 'https://www.linkedin.com/in/rachael-babcock/', email: 'rachael.s.babcock@gmail.com', personal_website: 'http://rachaelbabcock.com/', other_website: 'https://twitter.com/r_s_babcock', other_website_description: 'Twitter', preferred_skill: "I'm interested in Full-Stack Development, VR and 3D Animation", bio: 'A former Animation Producer turned Software Developer, development is where my need to create and passion for solving problems meet. Passionate about fun design and delivering clear, readable and efficient code.' },
      { id: 4, first_name: 'Josh', last_name: 'Barton', serious_photo: bartonSerious, fun_photo: bartonFun, github: 'https://github.com/joshdbarton', linkedin: 'https://www.linkedin.com/in/joshdbarton/', email: 'joshdbarton@gmail.com', personal_website: 'joshdbarton.me', other_website: '', other_website_description: '', preferred_skill: 'Full-Stack, React.js, Python', bio: "A former rabbi, I'm interested in being part of a thoughtful and deliberate software development team, and excited about making software that help people lead healthier, more skillful lives." },
      { id: 5, first_name: 'Daniel', last_name: 'Beecroft', serious_photo: beecroftSerious, fun_photo: beecroftSerious, github: 'https://github.com/binauralbeat', linkedin: 'https://www.linkedin.com/in/daniel-beecroft-2081a7102/', email: 'binauralbeat001@gmail.com', personal_website: 'binauralbeat.github.io', other_website: '', other_website_description: '', preferred_skill: 'full stack with Python/Django, JavaScript/React and Adobe Creative Cloud', bio: 'Graphic designer and musician turned developer. Always looking for creative solutions for marketing, design and software development.' },
      { id: 6, first_name: 'Jake', last_name: 'Carter', serious_photo: carterSerious, fun_photo: carterFun, github: 'https://github.com/jcarter0149', linkedin: 'https://www.linkedin.com/in/jake-carter/', email: 'jacobraycarter@gmail.com', personal_website: '', other_website: '', other_website_description: '', preferred_skill: 'Security Clearance, Javascript, React, WordPress, Python, Django, Data mining', bio: 'Former military intelligence analyst looking to bring my unique skillset and outlook of life to the world of software development. You can probably find me in the gym.' },
      { id: 7, first_name: 'Rafael', last_name: 'Cevallos', serious_photo: rafPlaceHolder, fun_photo: rafPlaceHolder, github: 'https://github.com/rafcevallos', linkedin: 'https://www.linkedin.com/in/rafaelcevallos/', email: 'rafael.cevallos81@gmail.com', personal_website: 'https://www.rafcevallos.com/', other_website: '', other_website_description: '', preferred_skill: 'JavaScript, React, Python, and Django', bio: 'Native Nashvillian, musician, teacher, comic book lover, film aficionado, nature enthusiast, and lifelong learner turned software developer who dreams of Tasmania, navigating different cultures and ideas, advocating for the marginalized, being better than the day before, and living life with purpose.' },
      { id: 8, first_name: 'Meghan', last_name: 'Debity', serious_photo: debitySerious, fun_photo: debityFun, github: 'https://github.com/Megraohoh', linkedin: 'https://www.linkedin.com/in/meghan-debity/', email: 'mdebity@gmail.com', personal_website: 'meghandebity.com', other_website: 'https://www.facebook.com/meghan.debity', other_website_description: 'Facebook', preferred_skill: 'Javascript, jQuery, Python, Django, pointing out things', bio: "Problem solving and puzzles have become my daily passion, whether it's in code or a Sudoku book. I have found that finding solutions is a natural way for me to help others." },
      { id: 9, first_name: 'Cole', last_name: 'Doster', serious_photo: dosterSerious, fun_photo: dosterFun, github: 'https://github.com/wcdoster', linkedin: 'https://www.linkedin.com/in/cole-doster-990149aa/', email: 'wcdoster@gmail.com', personal_website: 'URL TK', other_website: '', other_website_description: '', preferred_skill: 'JavaScript, Python', bio: 'I am Nashville native, who graduated from the University of Tennessee, Knoxville, with a degree in Civil/Environmental Engineering. After spending the last few years managing a restaurant, I am excited to jumpstart my new career in software development.' },
      { id: 10, first_name: 'Katheryn', last_name: 'Ford', serious_photo: fordSerious, fun_photo: fordFun, github: 'https://github.com/AnEvilHerbivore', linkedin: 'https://www.linkedin.com/in/katheryn-ford-273286166/', email: 'AnEvilHerbivoreLP@gmail.com', personal_website: '', other_website: '', other_website_description: '', preferred_skill: 'Javascript, Python, Django', bio: 'Excitable, passionate girl with an interest in both front end and back end programming.' },
      { id: 11, first_name: 'Sean', last_name: 'Irwin', serious_photo: irwinSerious, fun_photo: irwinFun, github: 'https://github.com/sirwin4', linkedin: 'https://www.linkedin.com/in/sean-irwin-7278b0167/', email: 'sean.irwinxc@gmail.com', personal_website: '', other_website: '', other_website_description: '', preferred_skill: 'JavaScript, Python, Django, React', bio: 'New developer ready to apply research skills from a soil microbiology background to another field of study' },
      { id: 12, first_name: 'Matthew', last_name: 'Kelly', serious_photo: kellySerious, fun_photo: kellyFun, github: 'https://github.com/MatthewKelly12', linkedin: 'https://www.linkedin.com/in/matthew-kelly-22465915b/', email: 'mkonabike@gmail.com', personal_website: '', other_website: '', other_website_description: '', preferred_skill: 'JavaScript, Canvas, Animation', bio: 'I was born and raised in Nashville, TN and I enjoy math, music, gardening, mountain biking, and dogs.' },
      { id: 13, first_name: 'Hayley', last_name: 'Landsberg', serious_photo: landsbergSerious, fun_photo: landsbergFun, github: 'https://github.com/hayleylandsberg', linkedin: 'www.linkedin.com/in/hayleyvheath', email: 'hayleylandsberg@gmail.com', personal_website: 'www.hayleylandsberg.com', other_website: 'dribbble.com/hayleylandsberg', other_website_description: 'Dribbble', preferred_skill: 'Front End Development, React, Javascript, CSS', bio: "A risk management professional turned UX/UI Designer & Developer. I'm passionate about the user's experience and appreciate design thinking." },
      { id: 14, first_name: 'Riley', last_name: 'Mathews', serious_photo: matthewsSerious, fun_photo: matthewsFun, github: 'https://github.com/RileyMathews', linkedin: 'https://www.linkedin.com/in/riley-mathews-12a243b4/', email: 'riley@rileymathews.com', personal_website: 'rileymathews.com', other_website: '', other_website_description: '', preferred_skill: 'Javascript. Python/Django', bio: "I am a musician and producer turned software developer. I'm looking forward to what this new journey has in store." },
      { id: 15, first_name: 'Erin', last_name: 'Meaker', serious_photo: meakerSerious, fun_photo: meakerFun, github: 'https://github.com/MrErin', linkedin: 'www.linkedin.com/in/erin-meaker', email: 'erinmeaker@gmail.com', personal_website: 'erinmeaker.com', other_website: '', other_website_description: '', preferred_skill: 'I love working through any problem that involves data analysis or complex logic. ', bio: 'Chaos tamer. Problem solver. Data spelunker. Insatiable learner. Optimizer. Innovator. Slayer of bugs.' },
      { id: 16, first_name: 'Patrick', last_name: 'Murphy', serious_photo: murphySerious, fun_photo: murphyFun, github: 'https://github.com/pwmurphy89', linkedin: 'https://www.linkedin.com/in/patrick-murphy-12561166/', email: 'pwmurphy89@gmail.com', personal_website: 'www.pwmurphy.com', other_website: '', other_website_description: '', preferred_skill: 'JavaScript', bio: 'I have a lot of interests.' },
      { id: 17, first_name: 'David', last_name: 'Paul', serious_photo: paulSerious, fun_photo: paulFun, github: 'https://github.com/obscure-shadow', linkedin: 'https://www.linkedin.com/in/david-paul-93267079/', email: 'dfp333@gmail.com', personal_website: 'URL TK', other_website: '', other_website_description: '', preferred_skill: 'DevOps and Security', bio: 'I like things. Sometimes I also like stuff. Also, learn vim.' },
      { id: 18, first_name: 'Jonny', last_name: 'Riggs', serious_photo: riggsSerious, fun_photo: riggsFun, github: 'https://github.com/Jonny-Riggs', linkedin: 'www.linkedin.com/in/jonnyriggs615', email: 'jonny.riggs615@gmail.com', personal_website: 'URL TK', other_website: 'https://twitter.com/_jonny_riggs', other_website_description: 'Twitter', preferred_skill: 'Full Stack - Javascript/React and Python/Django', bio: 'Nashville native and musician with a serious passion for all things software development.' },
      { id: 19, first_name: 'Levi', last_name: 'Schubert', serious_photo: schubertSerious, fun_photo: schubertFun, github: 'https://github.com/Levi-Schubert', linkedin: 'www.linkedin.com/in/Levi-Schubert', email: 'me@LeviSchubert.com', personal_website: 'http://levischubert.com', other_website: '', other_website_description: '', preferred_skill: 'Python, Django, TDD, React, Javascript', bio: 'Helping others and creating large scale, interesting, and useful applications are important goals and passions. I hold high standards for myself and continually aim to improve and learn.' },
      { id: 20, first_name: 'Jacob Andrew', last_name: 'Smith', serious_photo: smithSerious, fun_photo: smithFun, github: 'https://github.com/JacobAndrewSmith92', linkedin: 'https://www.linkedin.com/in/jacob-smith-847201b2/', email: 'jacobandrewsmith92@gmail.com', personal_website: 'jacobandrew.co', other_website: '', other_website_description: '', preferred_skill: 'Javascript | React.js | Design | Product Development | Python | Django', bio: 'My name is Jacob and I am a relation-centered software developer. Motivated to build useful, systematic software that solves problems and keeps the focus on what really matters, people.' },
      { id: 21, first_name: 'Jessica', last_name: 'Swift', serious_photo: swiftSerious, fun_photo: swiftFun, github: 'https://github.com/jessnswift', linkedin: 'https://www.linkedin.com/in/jessica-swift-4b549623/', email: 'jessica.nicole.swift@gmail.com', personal_website: 'https://jessicaswift.codes', other_website: '', other_website_description: '', preferred_skill: 'Front End Web Developer, Python, Javascript, bootstrap, React, django, sqlite, css.....the list goes on....', bio: "Hi, I'm Jessica." },
      { id: 22, first_name: 'Dillan', last_name: 'Teagle', serious_photo: teagleSerious, fun_photo: teagleSerious, github: 'https://github.com/teaglebuilt', linkedin: 'https://www.linkedin.com/in/teaglebuilt', email: 'dillan.teagle.va@gmail.com', personal_website: 'dillanteagle.me', other_website: '', other_website_description: '', preferred_skill: 'javascript, react, python, django, sql, css, adobe creative cloud', bio: 'Typical veteran that found out he would rather be a nerd than a soldier. To have a career where I always have more to learn and achieve sets me on a constant pursuit of progression, this is more than I could ever ask for in a career.' },
      { id: 23, first_name: 'Deanna', last_name: 'Vickers', serious_photo: vickersSerious, fun_photo: vickersFun, github: 'https://github.com/Deanna2000', linkedin: 'https://www.linkedin.com/in/deannavickers/', email: 'deanna2000@gmail.com', personal_website: 'www.deannavickers.com', other_website: 'https://twitter.com/Deanna2000', other_website_description: 'Twitter', preferred_skill: 'I like learning new technologies and frameworks and I really enjoy creating fun user experiences. I also love pair programming.', bio: "I am a maker and I'm thrilled to be learning another medium for making things." },
      { id: 24, first_name: 'Ronnie', last_name: 'Young', serious_photo: youngSerious, fun_photo: youngFun, github: 'https://github.com/Ryoung27', linkedin: 'https://www.linkedin.com/in/ronnie-young-bb59a2119/', email: 'RRYoung89@gmail.com', personal_website: 'https://ryoung27.github.io/', other_website: '', other_website_description: '', preferred_skill: 'I want to work with things that are technically challenging in the software field. I am an extrovert and enjoy the humanities.', bio: 'I arise in the morning torn between a desire to improve the world and a desire to enjoy the world. This makes it difficult to plan the day.' },
      { id: 25, first_name: 'Paul', last_name: 'Zimmerman-Clayton', serious_photo: pzcSerious, fun_photo: pzcFun, github: 'https://github.com/paulzimmclay', linkedin: 'https://www.linkedin.com/in//paulzc', email: 'paul.zimmerman.clayton@gmail.com', personal_website: 'URL TK', other_website: '', other_website_description: '', preferred_skill: 'Want to work with: JavaScript, React, Python, Django. Existing skills in: Operations, Implementation, Customer Support, Documentation', bio: "Ask questions, listen, and understand as completely as possible the problem to be solved - these are the most important things I've learned while working directly with customers and enabling my teammates. I'm excited to work with an experienced development team to learn how to define and solve a new set of challenges." }
    ],
    searchTerms: "",
    currentView: 'home',
    searchResults: {}
  }

  showModal = (studentId) => {
    // function to show the student modal and pass it a student id to show
    this.setState({
      modalShown: true,
      modalStudent: studentId,
    })
  }

  hideModal = (evt) => {
    // method to close modal
    // only runs set state if the target
    // of the event has the class 'close'
    if (evt.target.classList.contains("close")) {
      this.setState({
        modalShown: false,
        modalStudent: null,
      })
    }
  }

  searchingView = () => (<h1 style={{ marginTop: '125px' }}>Searching ... </h1>)
  
  // handleFieldChange = (evt) => {
  //   console.log(evt.target.value)
  //   const stateToChange = {}
  //   stateToChange[evt.target.id] = evt.target.value
  //   this.setState(stateToChange)
  // }
  // Search handler -> passed to NavBar
  findStudent = function (terms) {
    // when first typed in it goes to searching view
    // if first name is equal to a student as well as last name
    // return that student as an object and set view to that profle page
    console.log(terms)
    // const searchTerms = terms.charAt(0).toUpperCase()
    this.setState({
      searchTerms: terms,
      currentView: 'searching'
    })
    this.state.students.forEach(student => {
      console.log(student)
      // debugger
      const fullName = student.first_name + ' ' + student.last_name
      if (student.first_name.toLowerCase() === terms || student.last_name.toLowerCase() === terms || fullName.toLowerCase() === terms){
        this.setState({
          searchResults: student,
          currentView: 'profile'
        }) 
      }
    });
  }.bind(this)

  showView = function (e) {
    let view = null

    // Click event triggered switching view
    if (e.hasOwnProperty("target")) {
      view = e.target.id.split("__")[1]

      // View switch manually triggered by passing in string
    } else {
      view = e
    }

    // Update state to correct view will be rendered
    this.setState({
      currentView: view
    })

  }.bind(this)

  View = () => {
    switch (this.state.currentView) {
      case "profile":
        return <StudentProfile student={this.state.searchResults} />
      case "searching":
        return <this.searchingView />
      case "home":
      default:
        return <MainView
          students={this.state.students}
          showView={this.state.showView}
          showModal={this.showModal}
          hideModal={this.hideModal}
          modalShown={this.state.modalShown}
          modalStudent={this.state.modalStudent}
        />
    }
  }


  render() {
    return (
      <div>
        <NavBar viewHandler={this.showView} 
        searchHandler={this.findStudent} 
        fieldHandler={this.handleFieldChange}/>
        {this.View()}
      </div>
    )
  }

}

export default App;
