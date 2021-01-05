import React, { useState, useEffect } from "react";
import "./App.css";
import EditButton from "./components/EditButton/EditButton";
import Name from "./components/Name/Name";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Work from "./components/Work/Work";

const App = () => {
  // Set states with hooks
  const [editing, setEditing] = useState(false);
  const [firstName, setFirstName] = useState("First Name");
  const [lastName, setLastName] = useState("Last Name");
  const [contact, setContact] = useState({
    email: "Email",
    phone: "Phone",
    city: "City",
    country: "Country",
  });
  const [education, setEducation] = useState([]);
  const [work, setWork] = useState([]);

  // Get data from local storage on first load
  useEffect(() => {
    const state = JSON.parse(localStorage.getItem("state"));
    if (state !== null) {
      setFirstName(state.firstName);
      setLastName(state.lastName);
      setContact(state.contact);
      setEducation(state.education);
      setWork(state.work);
    }
  }, []);

  // Allow editing of all input fields
  const editAll = () => {
    setEditing(!editing);
    localStorage.setItem(
      "state",
      JSON.stringify({ firstName, lastName, contact, education, work })
    );
  };

  // Edit contact information
  const editContact = (e) => {
    const id = e.target.getAttribute("data-id");
    setContact((prevState) => ({
      ...prevState,
      [id]: e.target.value,
    }));
  };

  // Edit first or last name
  const editName = (e) => {
    const id = e.target.getAttribute("data-id");
    if (id === "firstName") {
      setFirstName(e.target.value);
    } else {
      setLastName(e.target.value);
    }
  };

  // Add new education form
  const addEducationForm = () => {
    setEducation([
      ...education,
      {
        name: "",
        course: "",
        start: "",
        end: "",
        details: "",
      },
    ]);
  };

  // Edit values of education forms
  const editEducation = (e) => {
    const id = e.target.getAttribute("data-id");
    const index = e.target.getAttribute("data-index");
    const newEducation = [...education];
    newEducation[index][id] = e.target.value;
    setEducation(newEducation);
  };

  // Delete specific education form
  const deleteEducationForm = (e) => {
    const index = e.target.getAttribute("data-index");
    const newEducation = [...education];
    newEducation.splice(index, 1);
    setEducation(newEducation);
  };

  // Add new work experience form
  const addWorkForm = () => {
    setWork([
      ...work,
      {
        company: "",
        role: "",
        start: "",
        end: "",
        details: "",
      },
    ]);
  };

  // Edit values of work forms
  const editWork = (e) => {
    const id = e.target.getAttribute("data-id");
    const index = e.target.getAttribute("data-index");
    const newWork = [...work];
    newWork[index][id] = e.target.value;
    setWork(newWork);
  };

  // Delete specific education form
  const deleteWorkForm = (e) => {
    const index = e.target.getAttribute("data-index");
    const newWork = [...work];
    newWork.splice(index, 1);
    setWork(newWork);
  };

  return (
    <React.Fragment>
      <main className="main">
        <section className="top-row">
          <Name
            firstName={firstName}
            lastName={lastName}
            editing={editing}
            editName={(e) => editName(e)}
          ></Name>
          <Contact
            editing={editing}
            contact={contact}
            editContact={(e) => editContact(e)}
          ></Contact>
        </section>
        <Education
          addEducationForm={addEducationForm}
          editing={editing}
          education={education}
          editEducation={(e) => editEducation(e)}
          deleteEducationForm={(e) => deleteEducationForm(e)}
        ></Education>
        <Work
          editing={editing}
          work={work}
          addWorkForm={addWorkForm}
          editWork={(e) => editWork(e)}
          deleteWorkForm={(e) => deleteWorkForm(e)}
        ></Work>
      </main>

      <EditButton editAll={editAll} editing={editing}></EditButton>
    </React.Fragment>
  );
};

export default App;
