import styled from "styled-components";


const OverviewContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 7fr;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`

const PageMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 32px;
`


export {
	OverviewContainer,
	PageMain
};