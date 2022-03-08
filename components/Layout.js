import Navbar from "./Navbar";
import styled from "styled-components";
import Footer from "./Footer";
import ContactBanner from "./ContactBanner";

// Styled Components - Start
const Wrapper = styled.div`
    position: relative;
    margin: 0 auto;
    max-width: 1280px;
    min-height: 100vh;
    /* background-color: rosybrown; */
`;
const Content = styled.main``;

// Styled Components - End

export default function Layout({ children }) {
    //Render Function
    return (
        <Wrapper>
            <header>
                <ContactBanner />
                <Navbar />
            </header>
            <Content>{children}</Content>
            <Footer />
        </Wrapper>
    );
}
