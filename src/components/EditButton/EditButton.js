import "./EditButton.css";

const EditButton = (props) => {
  return (
    <button className="editButton" onClick={props.editAll}>
      {props.editing ? "Save" : "Edit"}
    </button>
  );
};

export default EditButton;
