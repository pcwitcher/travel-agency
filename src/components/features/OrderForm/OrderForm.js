import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';

const OrderForm = ({ tripCost, options, setOrderOption }) => {

  return (
    <Row>
      {pricing.map(option => {
        return (
          <Col key={option.id} md={4}>
            <OrderOption
              currentValue={options[option.id]}
              setOrderOption={setOrderOption}
              {...option}
            />
          </Col>
        );
      })}
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} options={options} />
      </Col>
    </Row>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  setOrderOption: PropTypes.func.isRequired,
};

export default OrderForm;
