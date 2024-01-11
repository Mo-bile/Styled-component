import styled from "styled-components";
import searchImg from './search.png';
import Input4 from "./Input4";

const Input = styled(Input4)`
  background-image: url(${searchImg});
  background-position: 12px 50%;
  background-repeat: no-repeat;
  background-size: 16px;
  padding-left: 40px;
`;

function SearchInput(){
    return (
        <div>
            <Input />
        </div>
    )
}

export default SearchInput;