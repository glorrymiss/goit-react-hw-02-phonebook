import { Item, List, Button } from './ContactList.styled';
// import PropTypes from 'prop-types';

export function ContactList({ resultData, onDelete }) {
  return (
    <List>
      {resultData.map(({ id, name, number }) => {
        return (
          <Item key={id}>
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
      })}
    </List>
  );
}
