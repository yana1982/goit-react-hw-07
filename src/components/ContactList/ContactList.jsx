import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

import { useSelector } from "react-redux";
import { getContacts } from "../../redux/contactsSlice";
import { getNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getNameFilter);
  const contactsFilter = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
      contact.number.includes(filter)
  );
  return (
    <div>
      <ul className={css.list}>
        {contactsFilter.map((contact) => {
          return (
            <li className={css.item} key={contact.id}>
              <Contact contact={contact} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ContactList;
