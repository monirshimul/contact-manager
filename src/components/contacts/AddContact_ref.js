import React, { Component } from "react";

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  onSubmit = e => {
    e.preventDefault();
    //console.log(this.state);

    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
    console.log(contact);
  };

  static defaultProps = {
    name: "Monir",
    email: "monir@gmail.com",
    phone: "123456987"
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header bg bg-info ">
          <h2 className="text-white text-center">
            <i className="far fa-address-card" /> Add Contact
          </h2>
        </div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                <h5 className="text-info">
                  <i className="fas fa-user-tie" /> Name
                </h5>
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <h5 className="text-info">
                  <i className="fas fa-envelope" /> Email
                </h5>
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                <h5 className="text-info">
                  <i className="fas fa-mobile-alt" /> Phone
                </h5>
              </label>
              <input
                type="text"
                className="form-control"
                name="phone"
                defaultValue={phone}
                ref={this.phoneInput}
              />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-block btn-outline-info"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
