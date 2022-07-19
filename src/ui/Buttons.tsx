import styled from "styled-components";


const SmallButton = styled.button`

  background-color: #090505;;
  padding-inline: 1em;
  padding-top: 0.3em;
  border-radius: 3px;
  padding-bottom: 0.7em;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: white;
`

const AddElementBtn = styled(SmallButton)`
  width: 100px;
  margin: 1em auto;
  text-align: center;
  transition: all 320ms ease-in-out;

  :hover {
    scale: 104%;
  }
`

export {
	SmallButton,
	AddElementBtn
}