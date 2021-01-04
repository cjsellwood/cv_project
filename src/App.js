import React, { Component } from "react";
import "./App.css";
import EditButton from "./components/EditButton/EditButton";
import Name from "./components/Name/Name";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Work from "./components/Work/Work";

class App extends Component {
  state = {
    editing: false,
    firstName: "First Name",
    lastName: "Last Name",
    contact: {
      email: "Email",
      phone: "Phone",
      city: "City",
      country: "Country",
    },
    education: [],
    work: [],
  };

  // Allow editing of all input fields
  editAll = () => {
    this.setState({
      editing: !this.state.editing,
    });
  };

  // Edit contact information
  editContact = (e) => {
    const id = e.target.getAttribute("data-id");
    const contact = this.state.contact;
    contact[id] = e.target.value;
    this.setState({ contact: contact });
  };

  // Edit first or last name
  editName = (e) => {
    const id = e.target.getAttribute("data-id");
    const newState = this.state;
    newState[id] = e.target.value;
    this.setState(newState);
  };

  // Add new education form
  addEducationForm = () => {
    const education = this.state.education;
    education.push({
      name: "",
      course: "",
      start: "",
      end: "",
      details: "",
    });
    this.setState({
      education: education,
    });
  };

  // Edit values of education forms
  editEducation = (e) => {
    const education = this.state.education;
    const id = e.target.getAttribute("data-id");
    const index = e.target.getAttribute("data-index");
    education[index][id] = e.target.value;
    this.setState({
      education: education,
    });
  };

  // Delete specific education form
  deleteEducationForm = (e) => {
    const education = this.state.education;
    const index = e.target.getAttribute("data-index");
    education.splice(index, 1);
    this.setState({
      education: education,
    });
  };

  // Add new work experience form
  addWorkForm = () => {
    const work = this.state.work;
    work.push({
      company: "",
      role: "",
      start: "",
      end: "",
      details: "",
    });
    this.setState({
      work: work,
    });
  };

  // Edit values of work forms
  editWork = (e) => {
    const work = this.state.work;
    const id = e.target.getAttribute("data-id");
    const index = e.target.getAttribute("data-index");
    work[index][id] = e.target.value;
    this.setState({
      work: work,
    });
  };

  // Delete specific education form
  deleteWorkForm = (e) => {
    const work = this.state.work;
    const index = e.target.getAttribute("data-index");
    work.splice(index, 1);
    this.setState({
      work: work,
    });
  };

  render() {
    return (
      <React.Fragment>
        <main className="main">
          <section className="top-row">
            <Name
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              editing={this.state.editing}
              editName={(e) => this.editName(e)}
            ></Name>
            <Contact
              editing={this.state.editing}
              contact={this.state.contact}
              editContact={(e) => this.editContact(e)}
            ></Contact>
          </section>
          <Education
            addEducationForm={this.addEducationForm}
            editing={this.state.editing}
            education={this.state.education}
            editEducation={(e) => this.editEducation(e)}
            deleteEducationForm={(e) => this.deleteEducationForm(e)}
          ></Education>
          <Work
            editing={this.state.editing}
            work={this.state.work}
            addWorkForm={this.addWorkForm}
            editWork={(e) => this.editWork(e)}
            deleteWorkForm={(e) => this.deleteWorkForm(e)}
          ></Work>
        </main>

        <EditButton
          editAll={this.editAll}
          editing={this.state.editing}
        ></EditButton>
      </React.Fragment>
    );
  }
}

export default App;
