import styled from 'styled-components';
import theme from '../../theme';

export const CardFrame = styled.div`
  border-radius: 4px;
  background: ${theme.palette.background.base};
  padding: 16px;

  p {
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  column-gap: 8px;
  margin-top: 8px;
`;

export const Grid = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
`;
