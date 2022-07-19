import React from "react";
import Header from "./header/Header";
import {
	AppContainer,
	AppContent,
	AppWrapper,
	Card
} from "./style";

type Props = {
	children?: JSX.Element | JSX.Element[];
};

const AppLayout: React.FC<Props> = ({children}) => {
	return (
		<AppWrapper>
			<Card>
				<AppContainer>
					<Header/>
					<AppContent>
						{children}
					</AppContent>
				</AppContainer>
			</Card>
		</AppWrapper>
	);
}

export default AppLayout;