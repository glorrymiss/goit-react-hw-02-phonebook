import { Component } from 'react';
import { Item, List, Button } from './ContactList.styled';
import PropTypes from 'prop-types';

export class ContactList extends Component {
  render() {
    const { resultData, onDelete } = this.props;

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
}

ContactList.propType = {
  resultData: PropTypes.arrayOf(
    PropTypes.objectOf({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ).isRequired,

  onDelete: PropTypes.func.isRequired,
};
