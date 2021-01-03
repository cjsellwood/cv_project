import React, { Component } from "react";
import "./App.css";
import EditButton from "./components/EditButton/EditButton";
import Name from "./components/Name/Name";
import Contact from "./components/Contact/Contact";

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
          <section className="education">
            <h2>Education</h2>
          </section>
          <section className="work">
            <h2>Work Experience</h2>
          </section>
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
