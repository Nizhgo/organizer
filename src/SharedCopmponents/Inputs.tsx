import styled from "styled-components";

const Inputs = styled.input`
  //margin: auto;
  font-family: 'Raleway', sans-serif;
  font-weight: 800;
  font-size: 14px;
  display: block;
  box-sizing: border-box;
  width: auto;
  line-height: 24px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 2px 12px;
  cursor: auto;
  color: #0a0a0a;
  border: 1px solid #8C8C8CFF;
`

const TextArea = styled.textarea`
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  border: 1px solid #8C8C8CFF;
  padding: 2px 12px;
  box-sizing: border-box;
  background-color: #ffffff;
  font-size: 14px;
  width: 100%;
  resize: none;
  height: 86px;
  color: #000000;
  border-radius: 8px;
  line-height: 31px;

  :active, :hover, :focus {
    outline: 0;
    outline-offset: 13em;
  }
`

export {Inputs, TextArea};