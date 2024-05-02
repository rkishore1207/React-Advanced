/* eslint-disable @typescript-eslint/no-explicit-any */
import { css } from "styled-components";
import styled from "styled-components";

const sizes:any = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations : any = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

interface ButtonAppProps{
  size?:string,
  variation?:string
}

export const ButtonApp = styled.button<ButtonAppProps>`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border:none;
  cursor: pointer;
  color:var(--color-brand-50);

  ${props => props.size && sizes[props.size]}
  ${props => props.variation && variations[props.variation]}

`;

ButtonApp.defaultProps = {
  size:"medium",
  variation:"primary"
}

interface ButtonProps{
  variation:string,
  disabled:boolean,
  children:any
}

function Button({variation,disabled=false,children}:ButtonProps) {
  console.log(variation,disabled);
  return (
    <button>{children}</button>
  );
}

export default Button;