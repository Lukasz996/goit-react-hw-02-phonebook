import { nanoid } from 'nanoid';
import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    name: '',
    number: '',
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  handleChangeName(name) {
    this.setState({ name });
  }
  handleChangeNumber(number) {
    this.setState({ number });
  }
  handleFilter(filter) {
    this.setState({ filter });
  }

  handleAddContact() {
    !this.contactExists()
      ? this.setState({
          contacts: [
            ...this.state.contacts,
            { id: nanoid(), name: this.state.name, number: this.state.number },
          ],
        })
      : alert(`${this.state.name} is already in contacts`);
  }

  render() {
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm
          onAddContact={e => this.handleAddContact(e)}
          onChangeName={e => this.handleChangeName(e)}
          onChangePhone={e => this.handleChangePhone(e)}
        />
        <h2>Contacts</h2>
        {/* <Filter
          contacts={this.state.contacts}
          onChangeFilter={e => this.handleFilter(e)}
        />
        <ContactList
          filter={this.state.filter}
          contacts={this.state.contacts}
          onDelete={id => this.handleDeleteContact(id)}
        /> */}
      </div>
    );
  }
}
