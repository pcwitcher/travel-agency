import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css';

class OrderOptionDate extends React.Component {
  static propTypes = {
    setOptionValue: PropTypes.any,
  };

  state = {
    startDate: new Date(),
  };

  handleChange = date => {
    const { setOptionValue } = this.props;

    this.setState(
      {
        startDate: date,
      },
      () => {
        setOptionValue(date);
      },
    );
  };

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

export default OrderOptionDate;
