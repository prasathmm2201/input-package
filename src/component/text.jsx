import PropTypes from "prop-types";

export const Text = ({ name = "" }) => {
  return <article>{name}</article>;
};

Text.propTypes = {
  name: PropTypes.string,
};
