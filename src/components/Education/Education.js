import "./Education.css";

const Education = (props) => {
  // form - Institution Name, Course Name, Start Date, End Date
  const formsArray = [];
  const displayArray = [];
  
  for (let i = 0; i < props.education.length; i++) {
    formsArray.push(
      <form key={i}>
        <label>Course Name</label>
        <input
          type="text"
          key="course"
          data-id="course"
          data-index={i}
          value={props.education[i].course}
          onChange={props.editEducation}
        />
        <label>Institution Name</label>
        <input
          type="text"
          key="name"
          data-id="name"
          data-index={i}
          value={props.education[i].name}
          onChange={props.editEducation}
        />
        <label>Start Year</label>
        <input
          type="text"
          key="start"
          data-id="start"
          data-index={i}
          value={props.education[i].start}
          onChange={props.editEducation}
        />
        <label>Finish Year</label>
        <input
          type="text"
          key="end"
          data-id="end"
          data-index={i}
          value={props.education[i].end}
          onChange={props.editEducation}
        />
        <label>Details</label>
        <textarea
          type="text"
          key="details"
          data-id="details"
          data-index={i}
          value={props.education[i].details}
          onChange={props.editEducation}
        />
        <button
          type="button"
          data-index={i}
          onClick={props.deleteEducationForm}
        >
          Delete
        </button>
      </form>
    );
    displayArray.push(
      <div key={i}>
        <h3>{props.education[i].course}</h3>
        <h4>{props.education[i].name}</h4>
        <span>
          {props.education[i].start}{" "}
          {props.education[i].start !== "" ? "-" : ""} {props.education[i].end}
        </span>
        <p>{props.education[i].details}</p>
      </div>
    );
  }

  return (
    <section className="education">
      <h2>Education</h2>
      {props.editing ? formsArray : displayArray}
      {props.editing ? (
        <button onClick={props.addEducationForm} type="button">
          Add
        </button>
      ) : null}
    </section>
  );
};

export default Education;
