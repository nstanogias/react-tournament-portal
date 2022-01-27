import React, { FC } from 'react';
import { Styled } from './styled';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({ children, onClick }: ButtonProps) => {
  return <Styled.Button onClick={onClick}>{children}</Styled.Button>;
};
