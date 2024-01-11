import styled, {css} from "styled-components";

const SIZES = {
  large : 24,
  medium : 20,
  small : 16,
};

const fontSize = css`
  font-size : ${({size}) => SIZES[size] ?? SIZES['medium']}px;
`;

// button tag에 스타일 넣어준 방식임
const Button = styled.button` 
  background-color: #6750a4;
  border: none;
  border-radius: ${({round}) => round ? `9999px` : `3px`};
  color: #ffffff;
  ${fontSize}
  padding: 16px;

${'' /* 이것과 동일한것임 */}
  ${'' 
/* 
.Button:hover,
.Button:active {
  background-color: #463770;
} 
*/}

  &:hover,
  &active {
    background-color: #463770;
  }
`;

export default Button;