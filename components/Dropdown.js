import React, { useRef } from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import { NavLinkStyles } from "./Buttons";

const Container = styled.span`
    position: relative;
    text-align: center;
    ${(props) =>
        (props.type =
            "navbar" &&
            css`
                margin: 0 1rem;
                @media (max-width: ${(props) => props.theme.breakpoint.md}) {
                    margin: 0 0.3rem;
                }
                @media (max-width: ${(props) => props.theme.breakpoint.sm}) {
                    margin: 0;
                }
            `)}
`;

const Menu = styled.div`
    position: absolute;
    top: 130%;
    left: 0;
    width: 100%;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
    transition: max-height 200ms ease, opacity 200ms ease;
    max-height: 0;
    /* to ensure that the links are not tabbable when the menu is closed, css visibility is set to hidden */
    &[data-menu="false"] a {
        visibility: hidden;
    }
    &[data-menu="true"] {
        max-height: 6rem;
        opacity: 1;
    }
    ${(props) =>
        (props.type =
            "navbar" &&
            css`
                @media (max-width: ${(props) => props.theme.breakpoint.sm}) {
                    position: relative;
                    top: 0;
                }
            `)}
`;

const MenuItem = styled.a`
    ${NavLinkStyles}
    border: 0.1rem solid ${(props) => props.theme.colors.black};
    margin: 0.3rem 0;
    width: 100%;
    ${(props) =>
        (props.type =
            "navbar" &&
            css`
                @media (max-width: ${(props) => props.theme.breakpoint.md}) {
                    margin: 0.3rem 0;
                }
                @media (max-width: ${(props) => props.theme.breakpoint.sm}) {
                    margin: 0;
                    border: 0.1rem solid ${(props) => props.theme.colors.white};
                    background-color: ${(props) => props.theme.colors.white};
                    color: ${(props) => props.theme.colors.grey};
                }
            `)}
`;

export default function Dropdown({ children, links, attr }) {
    const menu = useRef(null);
    const openMenu = (event) => {};
    const closeMenu = (event) => {};
    const handleMenuClick = (event) => {
        if (event.target.getAttribute("aria-controls") !== attr.id) return;
        event.preventDefault();
        event.stopPropagation();
        if (menu.current.dataset.menu === "false") {
            menu.current.setAttribute("data-menu", "true");
            event.target.setAttribute("aria-expanded", "true");
            //first element child of menu
        } else if (menu.current.dataset.menu === "true") {
            menu.current.setAttribute("data-menu", "false");
            event.target.setAttribute("aria-expanded", "false");
            event.target.focus();
        }
    };
    const handleMenuLinkClick = (event) => {
        if (event.target.tagName !== "A") return;
        event.preventDefault();
    };
    return (
        <Container type="navbar" onClick={handleMenuClick}>
            {children}
            <Menu onClick={handleMenuLinkClick} data-menu="false" role="menu" id={attr.id} aria-labelledby={attr["aria-labelledby"]} ref={menu}>
                {links.map((item, index) => {
                    return (
                        <Link href={item.href} passHref key={`dropdown${index}item`}>
                            <MenuItem role="menuitem">{item.title}</MenuItem>
                        </Link>
                    );
                })}
            </Menu>
        </Container>
    );
}
