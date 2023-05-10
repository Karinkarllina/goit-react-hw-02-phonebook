import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDelete }) => {
    return (
    <ul>
        {contacts.map(({ name, number, id }) => {
            return (
              <li key={id}>
                <p>{name}: <span>{number}</span></p>
                <button type='button'onClick={() => onDelete(id)}>X</button>
              </li>
            )
          })}
        
</ul>
    )
}