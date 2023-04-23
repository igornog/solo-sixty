import { Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import React from 'react';
import styled from 'styled-components';

interface StyledTypographyProps {
  bold?: boolean;
  color?: string;
  fontSize?: string;
  opacity?: number;
}

const StyledTypography = styled(Typography)<StyledTypographyProps>`
  font-size: ${({ fontSize }) => fontSize && fontSize};
  font-weight: ${({ bold }) => (bold ? 'bold' : null)};
  color: ${({ color }) => (color ? color : null)};
  opacity: ${({ opacity }) => opacity ?? opacity};
`;

const CustomTypography: React.FunctionComponent<TypographyProps> = (
  props: TypographyProps,
) => {
  return (
    <StyledTypography
      bold={props.bold}
      variant={props.variant ?? 'body2'}
      color={props.color}
      opacity={props.opacity}
      {...props}
    >
      {props.children}
    </StyledTypography>
  );
};

interface TypographyProps {
  children: any;
  bold?: boolean;
  variant?: Variant;
  color?: string;
  fontSize?: string;
  opacity?: number;
}

export default CustomTypography;
