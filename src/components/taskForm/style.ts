import styled from "styled-components";

const ErrorMessage = styled.div`
  color: #FF8B8B;
  font-size: 12px;
  height: 100%;
`


const TaskDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 0.1em;
`

const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5em;
  justify-content: end;
  align-items: center;
`



const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.44em;
`

const TaskTitle = styled.input`
  width: 100%;
  font-size: 14px;
  line-height: 98.9%;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 600;
  color: #181818;
  height: auto;

`

const TaskDescription = styled.textarea`
  width: 100%;
  height: max-content;
  border: none;
  resize: none;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 150%;
  color: #000;
  padding: 5px;
  border-radius: 4px;
  box-sizing: border-box;
`

const TaskTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  border-radius: 4px;
  width: 100%;
  min-height: 40px;
  height: auto;
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  padding: 5px;
`

export {
	TaskTitleWrapper,
	TaskTitle,
	TaskDescription,
	TaskDescriptionWrapper,
	ButtonsContainer,
	ErrorMessage,
	FormContainer,
};