import React from 'react';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      cpf: 0,
      name: '',
      designation: '',
      email: '',
      password: '',
      password_confirm: '',
      errors: {}
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      cpf: this.state.cpf,
      name: this.state.name,
      designation: this.state.designation,
      email: this.state.email,
      password: this.state.password,
      password_confirm: this.state.password_confirm
    };
    console.log(user);
  }

  render() {
    return (
      <div className="container" style={{ marginTop: '50px', width: '700px'}}>
        <h2 style={{ marginBottom: '40px' }}>Registration</h2>
        <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <input type="number" placeholder="CPF" className="form-control" name="cpf" onChange={ this.handleInputChange } value={ this.state.cpf } />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Name" className="form-control" name="name" onChange={ this.handleInputChange } value={ this.state.name } />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Designation" className="form-control" name="designation" onChange={ this.handleInputChange } value={ this.state.designation } />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" className="form-control" name="email" onChange={ this.handleInputChange } value={ this.state.email } />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" className="form-control" name="password" onChange={ this.handleInputChange } value={ this.state.password } />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Confirm Password" className="form-control" name="password_confirm" onChange={ this.handleInputChange } value={ this.state.password_confirm } />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Register User</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;