import PropTypes from 'prop-types';
import { StyledLine } from './StatLine.styled';

export default function StatLine({ children }) {
  return <StyledLine>{children}</StyledLine>;
}

StatLine.propTypes = {
  children: PropTypes.node,
};
