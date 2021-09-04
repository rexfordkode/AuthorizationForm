import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {

    //The login variable holds a form with password input and submit button
    let login = <form action='#' onSubmit={this.authorize}>
    <input type="password" placeholder="Password"/>
    <input type="submit"/>
    </form>;
    //Contact information to show to user when enter correct password
    let contactInfo = (
  <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>
    );
    return (
      //The h1 holds a condidtion that check authorization if false will display enter password vice versa
      <div id="authorization">
      
        <h1>{this.state.authorized ? 'Contact':'Enter the Password'}</h1>
        {this.state.authorized ? contactInfo : login}
      
      </div>
    );
  }
}

ReactDOM.render(
  <Contact />, 
  document.getElementById('app')
);