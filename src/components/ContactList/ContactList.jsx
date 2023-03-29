import { List } from './ContactList.styled';
import { ComponentItem } from 'ComponentItem/ComponentItem';
import PropTypes from 'prop-types';

export function ContactList({ resultData, onDelete }) {
  return (
    <List>
      {resultData.map(({ id, name, number }) => {
        return (
          <ComponentItem
            key={id}
            name={name}
            number={number}
            onDelete={onDelete}
            id={id}
          />
        );
      })}
    </List>
  );
}

ContactList.propTypes = {
  resultData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
