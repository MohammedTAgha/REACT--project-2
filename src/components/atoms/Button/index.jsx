import React from 'react';
import { StyledButton } from './style';

const Button = ({ children, variant, ...props }) => {
  // variant :
  // primary ,secondary ,warning ,success ,orange
  // button take width 100% , make sure to wrap it with styled wrapper
  
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
