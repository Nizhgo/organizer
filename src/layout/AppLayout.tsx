import React from "react";
import {AppContainer, AppContent, AppWrapper, Card} from "./style";
import Header from "./header/Header";

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