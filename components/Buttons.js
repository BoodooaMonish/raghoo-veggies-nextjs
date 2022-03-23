import styled, { css } from "styled-components";

export const NavLinkStyles = css`
    margin: 0 1rem;
    padding: 0.2rem 0.8rem;
    border-radius: 1rem;
    border: 0.1rem solid transparent;
    transition: all 100ms ease;
    text-align: center;
    &:hover {
        background-color: ${(props) => props.theme.colors.white};
        border: 0.1rem solid ${(props) => props.theme.colors.grey};
        color: ${(props) => props.theme.colors.grey};
    }
    &:focus {
        background-color: ${(props) => props.theme.colors.grey};
        color: ${(props) => props.theme.colors.white};
        border: 0.1rem solid ${(props) => props.theme.colors.grey};
    }
    @media (max-width: ${(props) => props.theme.breakpoint.md}) {
        margin: 0 0.3rem;
        padding: 0.2rem 0.8rem;
    }
    @media (max-width: ${(props) => props.theme.breakpoint.sm}) {
        border-radius: 0;
        margin: 0;
        padding: 0.5rem 1rem;
        color: ${(props) => props.theme.colors.white};
        &:hover,
        &:focus {
            transform: none;
            background-color: ${(props) => props.theme.colors.white};
            color: ${(props) => props.theme.colors.black};
        }
    }
    ${(props) =>
        props.secondary &&
        css`
            background-color: ${(props) => props.theme.colors.grey};
            border: 0.1rem solid ${(props) => props.theme.colors.grey};
            color: ${(props) => props.theme.colors.white};
            &:focus {
                background-color: ${(props) => props.theme.colors.black};
                border: 0.1rem solid ${(props) => props.theme.colors.black};
                color: ${(props) => props.theme.colors.white};
            }
            &:hover {
                background-color: ${(props) => props.theme.colors.white};
                color: ${(props) => props.theme.colors.grey};
                border: 0.1rem solid ${(props) => props.theme.colors.grey};
            }
        `};
    ${(props) =>
        props.dropdown &&
        css`
            display: inherit;
            margin: 0;
            /* a child span with '.arrow' css class creates rotate animation and logo style for svg */
            & > .arrow {
                display: inline-block;
                transform: translateY(20%) rotateZ(0deg);
                transition: transform 100ms linear;
                width: 1rem;
                height: 1rem;
                margin-left: 0.3rem;
                & .logo {
                    fill: ${(props) => props.theme.colors.white};
                }
            }
            &:hover > .arrow {
                & .logo {
                    fill: ${(props) => props.theme.colors.grey};
                }
            }
            &[aria-haspopup="menu"][aria-expanded="true"] > .arrow {
                transform: translateY(30%) rotateZ(180deg);
            }
            @media (max-width: ${(props) => props.theme.breakpoint.md}) {
                margin: 0;
            }
        `}
`;
