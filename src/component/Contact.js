import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>궁금하신 점이 있나요?</h2>
        <p className="contact-email">이메일: <a href="mailto: contact@kooslab.com">contact@kooslab.com</a>
        </p>
      </div>
    );
  }
}

export default Contact;
