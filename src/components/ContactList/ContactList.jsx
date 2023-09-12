import style from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts, requestDeleteContact } from 'redux/operations';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const deleteContact = id => {
    dispatch(requestDeleteContact(id));
  };

  const filteredContacts = contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
    {contacts.isLoading && <Loader />}
    {contacts.error && <Error error={contacts.error}/>}
    <ul className={style.list}>
        {filteredContacts.map(contact => {
          const { id, name, phone } = contact;
          return (
            <li className={style.listEl} key={id}>
              {name}: {phone}
              <div className={style.listBtnWrap}>
                <button
                  type="button"
                  className={style.listBtn}
                  onClick={() => deleteContact(id)}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
     
    </>
  );
};

export default ContactList;
