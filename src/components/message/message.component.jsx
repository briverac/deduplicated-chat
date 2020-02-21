import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import FormattedDate from '../formatted_date/formatted-date.component';

import './message.styles.css';

const Message = (props) => {
  const { message, onRemoveMessageClick } = props;
  const {
    sentAt,
    content,
    senderUuid,
    uuid,
  } = message;

  return (
    <div className="message">
      <Table bordered responsive>
        <tbody>
          <tr>
            <td>
              <img alt="uuid" src={`https://robohash.org/${senderUuid}?set=set5&size=120x120`} />
            </td>
            <td className="data-row">
              <tr>
                <h5 className="content">{content}</h5>
              </tr>
              <tr>
                <FormattedDate sentAt={sentAt} />
              </tr>
            </td>
            <td rowSpan={2}>
              <Button variant="primary" onClick={() => onRemoveMessageClick({ uuid })}>Remove</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Message;
