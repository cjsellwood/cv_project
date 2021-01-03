import "./Name.css";

const Name = (props) => {
  let names;
  if (!props.editing) {
    names = (
      <h1>
        {props.firstName} {props.lastName}
      </h1>
    );
  } else {
    names = [
      <input
        type="text"
        key="firstName"
        data-id="firstName"
        value={props.firstName}
        onChange={props.editName}
      />,
      <input
      type="text"
      key="lastName"
      data-id="lastName"
      value={props.lastName}
      onChange={props.editName}
    />,
    ];
  }
  return <div className="name">{names}</div>;
};

export default Name;
