/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import './ChatApp.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPaginate from 'react-paginate';
import MessageList from './components/message-list/message-list.component';
import OrderingButtons from './components/ordering-buttons/ordering-buttons.component';

class ChatApp extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      paginatedMessages: [],
      offset: 1,
      ordering: '',
    };
  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/briverac/dummy-messages/data')
      .then((response) => response.json())
      .then((data) => this.setState({
        messages: this.deduplicateMessages(data.messages),
        paginatedMessages: data.messages.slice(0, 5),
      }));
  }

  deduplicateMessages = (messages) => {
    return messages.filter((item, i) => messages.findIndex((ele) => ele.uuid === item.uuid) === i);
  }

  onRemoveMessageClick = (element) => {
    const { uuid } = element;
    const { messages } = this.state;
    const newMessages = messages.filter((item) => item.uuid !== uuid);
    this.setState({ messages: newMessages }, () => this.setPaginatedMessages());
  }

  handlePageChange = (offsets) => {
    const offset = offsets.selected;
    this.setState({ offset }, () => this.setPaginatedMessages());
  }

  setPaginatedMessages = () => {
    const { offset } = this.state;
    const start = offset * 5;
    const end = start + 5;
    const orderedMessages = this.orderMessages();
    const paginatedMessages = orderedMessages.slice(start, end);
    this.setState({ paginatedMessages });
  }

  onOrderClick = (order) => {
    this.setState({ ordering: order }, () => this.setPaginatedMessages());
  }

  orderMessages = () => {
    const { messages, ordering } = this.state;
    let orderedMessages = [];
    switch (ordering) {
      case 'desc':
        orderedMessages = messages.sort((a, b) => this.sortDescending(a, b));
        break;
      case 'asc':
        orderedMessages = messages.sort((a, b) => this.sortAscending(a, b));
        break;
      default:
        orderedMessages = messages;
    }
    return orderedMessages;
  }

  sortDescending = (a, b) => {
    const x = a.sentAt; const y = b.sentAt;
    let order = 0;
    if (x < y) {
      order = -1;
    } else if (x > y) {
      order = 1;
    }
    return order;
  }

  sortAscending = (a, b) => {
    const x = a.sentAt; const y = b.sentAt;
    let order = 0;
    if (x > y) {
      order = -1;
    } else if (x < y) {
      order = 1;
    }
    return order;
  }

  render() {
    const { paginatedMessages, messages } = this.state;
    return (
      <div className="ChatApp">
        <h1>Modern Health chat</h1>
        <MessageList
          messages={paginatedMessages}
          onRemoveMessageClick={this.onRemoveMessageClick}
        />
        <div className="button-area">
          <ReactPaginate
            previousClassName="btn btn-secondary"
            nextClassName="btn btn-secondary"
            pageLinkClassName="btn btn-secondary"
            pageRangeDisplayed={5}
            marginPagesDisplayed={1}
            initialPage={1}
            pageCount={Math.ceil(messages.length / 5)}
            onPageChange={this.handlePageChange}
            containerClassName="pagination"
            subContainerClassName="pages pagination"
            activeClassName="active"
          />
          <OrderingButtons onOrderClick={this.onOrderClick} />
        </div>
      </div>
    );
  }
}

export default ChatApp;
