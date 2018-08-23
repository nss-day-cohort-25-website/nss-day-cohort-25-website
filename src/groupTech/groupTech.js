import React, { Component } from "react"
import "./groupTech.css"
// this is not the correct logo from mandy
import groupFunny from '../img/finalgroup/groupFunny.jpg'
import groupSerious from '../img/finalgroup/groupSerious.jpg'

// tech images
// images 
import aws from '../img/languages/aws.svg'
import css3 from '../img/languages/css3-original.svg'
import git from '../img/languages/git-square.svg'
import gitHub from '../img/languages/github.svg'
import grunt from '../img/languages/grunt.svg'
import html5 from '../img/languages/html5.svg'
import jquery from '../img/languages/jquery-filled.svg'
import js from '../img/languages/js-square.svg'
import react from '../img/languages/react.svg'
import python from '../img/languages/python.svg'
import django from '../img/languages/django-line.svg'
import sqlite from '../img/languages/Sqlite-square-icon.png'




export default class GroupTech extends Component {

    state = {
        languages: [
            {
              title: "Vanilla Javascript",
              alt: "Vanilla Javascript",
              src: js
            },
            {
              title: "CSS",
              alt: "CSS",
              src: css3
            },
            {
              title: "git & Version Control",
              alt: "git & Version Control",
              src: git
            },
            {
              title: "gitHub Cloud Version Control",
              alt: "gitHub Cloud Version Control",
              src: gitHub
            },
            {
              title: "Grunt.js Tool",
              alt: "Grunt.js Tool",
              src: grunt
            },
            {
              title: "html5 web",
              alt: "html5 web",
              src: html5
            },
            {
              title: "jquery tool",
              alt: "jquery tool",
              src: jquery
            },
            {
              title: "React.js Framework",
              alt: "React.js Framework",
              src: react
            },
            {
              title: "Amazon Web Services",
              alt: "Amazon Web Services",
              src: aws
            },
            {
              title: "Python",
              alt: "Python",
              src: python
            },
            {
              title: "Django Framework",
              alt: "Django",
              src: django
            },
            {
              title: "SQLite",
              alt: "SQLite",
              src: sqlite
            }
          ],
      groupImage :
          {serious: groupSerious,
           fun: groupFunny } 
    }
    uniqueKey = 1

    render() {
        return (
            <section>
                {/* this img will need to change based on party mode */}
                <img className="groupImage" src={this.props.partyOn ? this.state.groupImage.fun : this.state.groupImage.serious } alt='groupImage' title='groupImage'/>
                    <div className="lang__container" id="skills">
                    {this.state.languages.map(lang => (
                        <img src={lang.src} key={this.uniqueKey++} alt={lang.alt} title={lang.title} />
                    ))}
                    </div>
            </section>
        )
    }
}
