import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextInputGroup = ({
  label,
  name,
  value,
  type,
  onChange,
  className,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        <h5 className="text-info">
          <i className={className} /> {label}
        </h5>
      </label>
      <input
        type={type}
        className={classnames("form-control", {
          "is-invalid": error
        })}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  error: PropTypes.string
};

TextInputGroup.defaultProps = {
  type: "text"
};

export default TextInputGroup;
