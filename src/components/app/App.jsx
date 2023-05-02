import React, { Component } from 'react';
import css from './App.module.css';
import ContactForm from '../сontactForm/ContactForm';
import Filter from '../filter/Filter';
import ContactList from '../contactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    const isExistContact = this.state.contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isExistContact) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  filterChange = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== contactId.id
      ),
    }));
  };
  getVisibleContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };
  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <div className={css.main}>
        <div>
          <h1 className={css.title}>Phonebook</h1>
        </div>
        <ContactForm
          addContact={this.addContact}
          contacts={this.state.contacts}
        />
        <div>
          <h2 className={css.title}>Contacts</h2>
          <Filter value={this.state.filter} onChange={this.filterChange} />
          <ContactList
            onDelete={this.deleteContact}
            contacts={visibleContacts}
          />
        </div>
      </div>
    );
  }
}

export default App;
