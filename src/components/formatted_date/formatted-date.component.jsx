import React from 'react';

import './formatted-date.styles.css';

const FormattedDate = (props) => {
  const { sentAt } = props;
  const date = new Date(sentAt);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const formattedDate = ''.concat(
    days[date.getDay()],
    ' ',
    months[date.getMonth()],
    ', ',
    date.getFullYear(),
    ' at ',
    date.getHours(),
    ':',
    date.getMinutes(),
  );
  return (
    <p className="date">{ formattedDate }</p>
  );
};

export default FormattedDate;
