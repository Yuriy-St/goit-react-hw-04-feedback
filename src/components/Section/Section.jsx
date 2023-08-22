import PropTypes from 'prop-types';
import Subtitle from 'components/Subtitle';
import { StyledSection } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <StyledSection>
      <Subtitle>{title}</Subtitle>
      {children}
    </StyledSection>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
