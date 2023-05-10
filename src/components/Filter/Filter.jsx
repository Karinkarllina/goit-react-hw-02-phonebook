import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
    return (

     <form>
          <label>
            Filter
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
              value={value}
              onChange={onChange}
            />
          </label>
        </form>        
    )

}



Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};