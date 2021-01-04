import "./Work.css";

const Work = (props) => {
  // form - Company Name, Role, Start Date, End Date
  const formsArray = [];
  const displayArray = [];
  for (let i = 0; i < props.work.length; i++) {
    formsArray.push(
      <form className="workForm" key={i}>
        <div>
          <label>Role</label>
          <input
            type="text"
            key="role"
            data-id="role"
            data-index={i}
            value={props.work[i].role}
            onChange={props.editWork}
          />
        </div>

        <div>
          <label>Company</label>
          <input
            type="text"
            key="company"
            data-id="company"
            data-index={i}
            value={props.work[i].company}
            onChange={props.editWork}
          />
        </div>
        <div>
          <label>Start Year</label>
          <input
            type="text"
            key="start"
            data-id="start"
            data-index={i}
            value={props.work[i].start}
            onChange={props.editWork}
          />
        </div>
        <div>
          <label>Finish Year</label>
          <input
            type="text"
            key="end"
            data-id="end"
            data-index={i}
            value={props.work[i].end}
            onChange={props.editWork}
          />
        </div>
        <div className="details">
          <label>Details</label>
          <textarea
            type="text"
            key="details"
            data-id="details"
            data-index={i}
            value={props.work[i].details}
            onChange={props.editWork}
          />
        </div>
        <button
          className="deleteButton"
          type="button"
          data-index={i}
          onClick={props.deleteWorkForm}
        >
          Delete
        </button>
      </form>
    );
    displayArray.push(
      <div className="displayDiv" key={i}>
        <div>
          <h3>{props.work[i].role}</h3>
          <span>
            {props.work[i].start} {props.work[i].start !== "" ? "-" : ""}{" "}
            {props.work[i].end}
          </span>
        </div>
        <h4>{props.work[i].company}</h4>

        <p>{props.work[i].details}</p>
      </div>
    );
  }

  return (
    <section className="work">
      <h2 className="section-title">Work Experience</h2>
      {props.editing ? formsArray : displayArray}
      {props.editing ? (
        <button className="addButton" onClick={props.addWorkForm} type="button">
          Add
        </button>
      ) : null}
    </section>
  );
};

export default Work;
