import styled from "styled-components";

const Card = styled.div`
  margin-top: 1em;
  border-radius: 8px;
  background: #FDFDFD;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 968px) {
    margin-top: 0;
  }
`

const AppContainer = styled.div`
  max-width: 1324px;
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
  display: grid;
  grid-template-columns: 8fr 2.5fr;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`

export {AppContainer, AppWrapper, Card, AppContent};