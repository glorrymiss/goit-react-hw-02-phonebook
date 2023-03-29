import { Item, Button } from './ComponentItem.styled';
import PropTypes from 'prop-types';

export function ComponentItem({ name, number, onDelete, id }) {
  return (
    <Item>
      {name}: {number}
      <Button
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </Button>
    </Item>
  );
}

ComponentItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
