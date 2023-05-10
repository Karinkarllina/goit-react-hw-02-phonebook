import React, { Component } from 'react';
import contacts from './contacts.json'
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';


export class App extends Component {

state = {
  contacts: contacts,
  name: '',
  number: '',
  filter: '',
}

  
  
  
  
  
  getFormValue = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value })  
  }

  



  hendleSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };

    console.log(newContact.name)
    
      this.setState((prevState) => ({
         contacts: [newContact, ...prevState.contacts],
        name: '',
        number: '', 
      }));      

  }





    changeFilter = event => {
    this.setState({ filter: event.currentTarget.value.toLowerCase() });
  };





    deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };



  render() {
    const visibleContact = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    return (
      <div>
        <form onSubmit={this.hendleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.getFormValue }
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.getFormValue }
            />
          </label>
          <button type='submit'> Add Contact </button>
        </form>
        <Filter
          value={this.state.filter}
          onChange={this.changeFilter}
        />
        <ContactList
          contacts={visibleContact}
          onDelete={this.deleteContact}
          />
      </div>
    );
  };
}


















  // getFormName = event => {
  // this.setState({name: event.currentTarget.value})
  // }

  // getFormTelNumber = event => {
  //   this.setState({number: event.currentTarget.value})
  // }



         
    // addContact = newContact => {
  //   this.state.contacts( this.setState(prevState => {
  //         return {
  //           contacts: [newContact, ...prevState.contacts],
  //         };
  //     }))
  // };


      // if (this.state.name.length === 0) {
    //      return
    // }