import React from 'react';
import { Styled } from './styled';
import { ReactNode } from 'react';

export enum TextType {
  H4 = 'h4',
  H6 = 'h6',
  DEFAULT = 'default'
}

type TextProps = {
  textType?: 'h4' | 'h6' | 'default';
  children?: ReactNode;
};

const textTemplates = {
  [TextType.H4]: (children: any) => (
    <Styled.Heading4>{children}</Styled.Heading4>
  ),
  [TextType.H6]: (children: any) => (
    <Styled.Heading6>{children}</Styled.Heading6>
  ),
  [TextType.DEFAULT]: (children: any) => (
    <Styled.Paragraph>{children}</Styled.Paragraph>
  )
};

export const Text = ({ textType = 'default', children }: TextProps) => {
  return textTemplates[textType](children);
};
