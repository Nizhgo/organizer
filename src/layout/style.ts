import styled from "styled-components";

const Card = styled.div`
  margin-top: 1em;
  border-radius: 8px;
  background: #F7F6F9;
  display: block;
  

  @media (max-width: 968px) {
    margin-top: 0;
  }
`

const AppContainer = styled.div`
  width: 100%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  padding-block: initial;
  padding-inline: 5px;
  margin-bottom: 45px;
`

const AppWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`

const AppContent = styled.div`
  margin-top: 3em;
  display: grid;
  grid-template-columns: 7.5fr 3fr;
    grid-gap: 1em;
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`

export {AppContainer, AppWrapper, Card, AppContent};