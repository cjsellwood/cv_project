import "./Contact.css";

const Contact = (props) => {
  let contacts;
  if (!props.editing) {
    contacts = [
      <p key="email">{props.contact.email}</p>,
      <p key="phone">{props.contact.phone}</p>,
      <p key="city">{props.contact.city}</p>,
      <p key="country">{props.contact.country}</p>,
    ];
  } else {
    contacts = [
      <input
        type="text"
        key="email"
        data-id="email"
        value={props.contact.email}
        onChange={props.editContact}
      />,
      <input
        type="text"
        key="phone"
        data-id="phone"
        value={props.contact.phone}
        onChange={props.editContact}
      />,
      <input
        type="text"
        key="city"
        data-id="city"
        value={props.contact.city}
        onChange={props.editContact}
      />,
      <input
        type="text"
        key="country"
        data-id="country"
        value={props.contact.country}
        onChange={props.editContact}
      />,
    ];
  }

  return <div className="contact">{contacts}</div>;
};

export default Contact;
