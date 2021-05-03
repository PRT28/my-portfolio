import React, { Component } from "react";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {

      return (
        <div key={id++} >
        <h3>{projects.title}</h3>
        <p className="info">
          {projects.category}
        </p>
        <p><a href={projects.url}>{projects.url}</a></p>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row education">
            <div className="twelve columns collapsed">
              <h1><span>Projects</span></h1>
            </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{projects}</div>
            </div>
          </div>
        </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
