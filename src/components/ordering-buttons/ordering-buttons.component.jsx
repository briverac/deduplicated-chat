import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import './ordering-buttons.styles.css';

const OrderingButtons = (props) => {
  const { onOrderClick } = props;
  return (
    <div className="ordering-buttons">
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" onClick={() => onOrderClick('asc')}>Order Ascending</Button>
        <Button variant="secondary" onClick={() => onOrderClick('desc')}>Order Descending</Button>
      </ButtonGroup>
    </div>
  );
};

export default OrderingButtons;
