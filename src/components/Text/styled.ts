import styled from 'styled-components';
import theme from '../../theme';

const Heading4 = styled.h4`
  ${theme.typography.h4};
  margin: 0;
  margin-bottom: ${theme.spacing(6)};
`;

const Heading6 = styled.h6`
  ${theme.typography.h6};
  margin: 0;
  margin-bottom: ${theme.spacing(4)};
`;

const Paragraph = styled.p``;

const CenteredTextWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  p {
    margin: auto;
  }
`;

export const Styled = {
  Heading4,
  Heading6,
  Paragraph,
  CenteredTextWrapper
};
