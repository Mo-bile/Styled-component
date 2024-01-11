import styled, {css} from 'styled-components';
import Button from './Button';
import Input from './Input';
import StyleButton from './StyledButton'
import Input2 from './Input2';
import TermsOfService from './TermsOfService';
import Button2 from './Button2';
import SearchInput from './SearchInput';
import Input4 from './Input4';

const StyledTermsOfService = styled(TermsOfService)`
  background-color: #ededed;
  border-radius: 8px;
  padding: 16px;
  margin: 40px auto;
  width: 400px;
`;

const SubmitButton = styled(Button2)`
  background-color: #de117d;
  display: block;
  margin: 0 auto;
  width: 200px;

  &:hover {
    background-color: #f5070f;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  width: 400px;

  ${Input}{
    box-sizing: border-box;
    display: block;
    margin: 8px 0 16px;
    width: 100%;
  }

`;

const Container2 = styled.div`
  ${Button} {
    margin: 10px;
  }
`;
const Container3 = styled.div`
  ${Input} {
    margin: 8px;
  }
`;

const SIZES = {
  large: 24,
  medium: 20,
  small: 16
};

const fontSize = css`
  font-size: ${({ size }) => SIZES[size] ?? SIZES['medium']}px;
`;

const Button3 = styled.button`
  background-color: #6750a4; 
  border: none;
  color: #ffffff;
  padding: 16px;
  ${fontSize}
`;

const Input3 = styled.input`
  border: 2px solid #eeeeee;
  border-radius: 4px;
  outline: none;
  padding: 16px;
  ${fontSize}
`;

const Container4 = styled.div`
  ${Button3}, ${Input3} {
    margin: 10px;
  }
`;

const Container5 = styled.div`

`;


function App() {
  return (
    <div>
        <Button>Hello styled!</Button>
        <StyleButton>Hello styled!</StyleButton>
        <Input />

        <Container>
          <h1>로그인</h1>
          <label for="email">이메일</label>
          <Input type="email" id="email" class="input" placeholder="jym2013@drminside.com" />
          <label for="password">비밀번호</label>
          <Input type="password" id="password" class="input" placeholder="비밀번호" />
        </Container>

        <Container2>
          <h1>기본 버튼</h1>
          <Button size="small">small</Button>
          <Button size="medium">medium</Button>
          <Button size="large">large</Button>
          <h1>둥근 버튼</h1>
          <Button size="small" round>
            round small
          </Button>
          <Button size="medium" round>
            round medium
          </Button>
          <Button size="large" round>
            round large
          </Button>
        </Container2>

        <Container3>
          <h2>Size</h2>
          <Input2 size="small" />
          <Input2 size="medium" />
          <Input2 size="large" />
          <h2>Round</h2>
          <Input2 round />
          <h2>Error</h2>
          <Input2 error />
        </Container3>

        <div>
          <StyledTermsOfService />
          <SubmitButton>계속하기</SubmitButton>
        </div>

        <Container4>
          <h2>Button</h2>
          <Button3 size="small">small</Button3>
          <Button3 size="medium">medium</Button3>
          <Button3 size="large">large</Button3>

          <h2>Input</h2>
          <Input3 size="small" />
          <Input3 size="medium" />
          <Input3 size="large" />
        </Container4>

        <Container5>
          <h2>Input</h2>
          <Input4 />
          <h2>Search Input</h2>
          <SearchInput />
        </Container5>

    </div>
  );
}

export default App;
