import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";
import axios from "axios";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };

  render() {
    const { contactt } = this.props;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h5 className="text-secondary">
                {contactt.name}
                <i
                  onClick={() => {
                    this.setState({ showContactInfo: !showContactInfo });
                  }}
                  className="fas fa-sort-down text-info"
                  style={{ cursor: "pointer", paddingLeft: "10px" }}
                />
                <i
                  className="fas fa-times text-info"
                  style={{
                    cursor: "pointer",
                    float: "right"
                  }}
                  onClick={this.onDeleteClick.bind(this, contactt.id, dispatch)}
                />
                <Link to={`contact/edit/${contactt.id}`}>
                  <i
                    className="fas fa-pencil-alt text-info"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
              </h5>
              {showContactInfo ? (
                <ul className="list-group text-secondary">
                  <li className="list-group-item">Email: {contactt.email}</li>
                  <li className="list-group-item">Phone: {contactt.phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contactt: PropTypes.object.isRequired
};

export default Contact;

// "editor.formatOnSave": true,
// "emmet.excludeLanguages": ["markdown"],
// "emmet.includeLanguages": {
//   "javascript": "javascriptreact"
// },
// "emmet.syntaxProfiles": {
//   "javascript": "jsx",
//   "javascript": "html"
// }
// }
