import styled from "styled-components";

const Input = styled.input`
  //margin: auto;
  font-family: 'Raleway', sans-serif;
  font-weight: 800;
  font-size: 14px;
  display: block;
  box-sizing: border-box;
  width: auto;
  line-height: 24px;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 2px 12px;
  cursor: auto;
  color: #0a0a0a;
  border: 1px solid #c7c6c6;
`

const TextArea = styled.textarea`
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  border: 1px solid #C7C6C6FF;
  padding: 2px 12px;
  box-sizing: border-box;
  background-color: #ffffff;
  font-size: 14px;
  width: 100%;
  height: 86px;
  resize: none;
  color: #000000;
  border-radius: 4px;
  line-height: 24px;

  :active, :hover, :focus {
    outline: 0;
    outline-offset: 13em;
  }
`

export {
	Input,
	TextArea
};