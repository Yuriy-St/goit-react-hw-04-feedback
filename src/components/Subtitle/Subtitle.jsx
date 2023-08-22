import PropTypes from 'prop-types';
import { StyledSubtitle } from './Subtitle.styled';

export default function Subtitle({ children }) {
  return <StyledSubtitle>{children}</StyledSubtitle>;
}

Subtitle.propTypes = {
  children: PropTypes.node,
};
