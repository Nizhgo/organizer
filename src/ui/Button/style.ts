import styled from "styled-components";

const SubmitButton = styled.button`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  padding: 8px 14px;
  gap: 10px;
  background: #672EE3;
  border: 1px solid #756391;
  border-radius: 8px;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  line-height: 98.9%;
  cursor: pointer;
  box-sizing: border-box;

  :hover {
    background: #6024de;
  }
`


const CancelButton = styled(SubmitButton)`
  background: transparent;
  color: #9D9D9D;
  border: 1px solid #9D9D9D;

  :hover {
    background: #D2D2D2;
  }
`

export {
	SubmitButton,
	CancelButton
}