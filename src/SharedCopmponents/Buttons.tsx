import styled from "styled-components";


const SmallButton = styled.button`

    border-radius: 20px;
    background-color: #DA654D;;
    padding-inline: 1em;
    padding-top: 0.3em;
    padding-bottom: 0.7em;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color: white;
`

const AddElementBtn = styled(SmallButton)`
  width: 100px;
  margin: auto;
  text-align: center;
`

export {SmallButton, AddElementBtn}