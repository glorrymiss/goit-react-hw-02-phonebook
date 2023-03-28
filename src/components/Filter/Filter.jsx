import { Component } from 'react';
import { Input, Title } from './Filter.styled';
// import PropTypes from 'prop-types';

export class Filter extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <>
        <Title>Find contacts by name</Title>
        <Input type="text" value={value} onChange={onChange} />
      </>
    );
  }
}

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   value: PropTypes.string.isRequired,
// };
