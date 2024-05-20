import PropTypes from "prop-types";
export const Button = ({ name = "Create" }) => {
  return (
    <div>
      <button>{name}</button>
    </div>
  );
};
Button.propTypes = {
  name: PropTypes.string,
};
