import PropTypes from 'prop-types';
import { Component } from 'react';
import css from '../ContactForm/ContactForm.module.css';

class ContactForm extends Component {
  handleClick() {
    const { onAddContact } = this.props;
    onAddContact && onAddContact();
  }
  handleChangeName(e) {
    const { value } = e.currentTarget;
    const { onChangeName } = this.props;
    onChangeName && onChangeName(value);
  }
  handleChangePhone(e) {
    const { value } = e.currentTarget;
    const { onChangePhone } = this.props;
    onChangePhone && onChangePhone(value);
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label className={css.label}>Name</label>
          <input
            className={css.input}
            onChange={e => {
              this.handleChangeName(e);
            }}
            type="text"
            name="name"
            pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label className={css.label}>Number</label>
          <input
            className={css.input}
            onChange={e => {
              this.handleChangePhone(e);
            }}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <button
            type="submit"
            className={css.button}
            onClick={e => this.handleClick(e)}
          >
            Add contacts
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangePhone: PropTypes.func.isRequired,
};

export default ContactForm;
