import React from "react";
import styled, { css } from "styled-components";
import Telephone from "../logos/Telephone";
import CustomerCare from "../logos/CustomerCare";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0.5rem 1.5rem;
    @media (max-width: ${(props) => props.theme.breakpoint.md}) {
        padding: 0.5rem 1rem;
    }
    @media (max-width: ${(props) => props.theme.breakpoint.sm}) {
        justify-content: center;
        flex-direction: column;
    }
`;

const Tel = styled.p`
    text-align: center;
    & > span {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        transform: translateY(10%);
    }
    & .logo {
        fill: ${(props) => props.theme.colors.grey};
    }
    @media (max-width: ${(props) => props.theme.breakpoint.sm}) {
        margin-bottom: 0.3rem;
    }
`;

const Email = styled.p`
    text-align: center;
    & > span {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        transform: translate(-20%, 15%) scale(1.3);
    }
    & .logo {
        fill: ${(props) => props.theme.colors.grey};
    }
    @media (max-width: ${(props) => props.theme.breakpoint.sm}) {
        margin-bottom: 0.3rem;
    }
`;

const LineBreak = styled.hr`
    width: 100%;
    color: ${(props) => props.theme.colors.grey};
    border: none;
    border-top: 0.1rem solid ${(props) => props.theme.colors.greyRGBA};
`;

export default function ContactBanner() {
    return (
        <Container>
            <Tel title="Telephone">
                <span>
                    <Telephone />
                </span>
                : 240-RAGOOVEGGIES
            </Tel>
            <Email title="Customer Care">
                <span>
                    <CustomerCare />
                </span>
                : customer@rveggies.mu
            </Email>
            <LineBreak />
        </Container>
    );
}
