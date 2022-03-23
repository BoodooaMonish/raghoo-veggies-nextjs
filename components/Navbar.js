import React from "react";
import { useRef } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import Logo from "../logos/Logo";
import ArrowDown from "../logos/ArrowDown";
import Hamburger from "../logos/Hamburger";
import { NavLinkStyles } from "./Buttons";
import Dropdown from "./Dropdown";

// Styled Components - Start
const MainNavigation = styled.nav`
    padding-top: 1rem;
    position: relative;
    z-index: 3;
    & > .menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        flex-wrap: nowrap;
        position: relative;
    }
    @media (max-width: ${(props) => props.theme.breakpoint.sm}) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row-reverse;
        flex-wrap: nowrap;
        & > .menu {
            position: absolute;
            top: 125%;
            left: 0;
            flex-direction: column;
            align-items: stretch;
            width: 100%;
            background-color: ${(props) => props.theme.colors.grey};
            border: 0.1rem solid ${(props) => props.theme.colors.grey};
            transition: transform 200ms linear;
            transform: translate(0%, -50%) scale(1, 0);
            /* to ensure that the links are not tabbable when the menu is closed, css visibility is set to hidden */
            &[data-menu="false"] a {
                visibility: hidden;
            }
            &[data-menu="true"] {
                transform: translate(0%, 0%) scale(1, 1);
            }
            & div {
                display: flex;
                flex-direction: column;
            }
        }
    }
`;

const NavLink = styled.a`
    ${NavLinkStyles}
`;

const Brand = styled.a`
    display: block;
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    & .leaf {
        fill: ${(props) => props.theme.colors.green};
    }
    & .letter {
        fill: ${(props) => props.theme.colors.grey};
    }
    @media (max-width: ${(props) => props.theme.breakpoint.md}) {
        width: 2.5rem;
        height: 2.5rem;
    }
    @media (max-width: ${(props) => props.theme.breakpoint.sm}) {
        position: static;
        transform: none;
        margin-left: 0.6rem;
    }
`;

const HamburgerIcon = styled.button`
    display: none;
    @media (max-width: ${(props) => props.theme.breakpoint.sm}) {
        display: block;
        width: 2.8rem;
        height: 2.8rem;
        margin-right: 0.6rem;
        background-color: ${(props) => props.theme.colors.white};
        border: 0.1rem solid ${(props) => props.theme.colors.grey};
        padding: 0.5rem;
        border-radius: 0.5rem;
        font-size: 0;
        transition: background-color 100ms ease;
        & .bar {
            fill: ${(props) => props.theme.colors.grey};
            transition: transform 100ms ease;
        }
        /* when aria-expanded is set to true, the bars in the icon is change to a cross */
        &[aria-expanded="true"] .top {
            transform: translate(20%, 10%) rotate(45deg);
        }
        &[aria-expanded="true"] .bottom {
            transform: translate(-50%, 25%) rotate(-45deg);
        }
        &[aria-expanded="true"] .middle {
            opacity: 0;
        }
        &:hover,
        &:focus {
            background-color: ${(props) => props.theme.colors.black};
        }
        &:hover .bar,
        &:focus .bar {
            fill: ${(props) => props.theme.colors.white};
        }
    }
`;

const Backdrop = styled.div`
    display: none;
    @media (max-width: ${(props) => props.theme.breakpoint.sm}) {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2;
        background-color: ${(props) => props.theme.colors.black};
        opacity: 0.2;
        width: 100%;
        height: 100%;
        &[data-backdrop="true"] {
            display: block;
        }
    }
`;
// Styled Components - End

// Render Function
export default function Navbar() {
    //DOM References
    const menu = useRef(null);
    const button = useRef(null);
    const menuBackdrop = useRef(null);
    const links = useRef([]);

    //Menu Operations Functions

    // The menu uses css transitions/transforms to show/hide itself
    // The menu's 'data-menu' attribute is used as the pointer the determine the menu's state
    const closeMenu = () => {
        menu.current.setAttribute("data-menu", "false");
        button.current.setAttribute("aria-expanded", "false");
        menuBackdrop.current.setAttribute("data-backdrop", "false");
        button.current.focus();
    };
    const openMenu = () => {
        menu.current.setAttribute("data-menu", "true");
        button.current.setAttribute("aria-expanded", "true");
        menuBackdrop.current.setAttribute("data-backdrop", "true");
        const linkfocus = window.setTimeout(() => {
            links.current[0].focus();
            return clearTimeout(linkfocus);
        }, 201);
    };

    //Event Listener Functions

    // toggles the menu by onClick of the hamburger button
    const handleMenuIconClick = (event) => {
        event.preventDefault();
        if (menu.current.dataset.menu === "false") {
            openMenu();
        } else if (menu.current.dataset.menu === "true") {
            closeMenu();
        } else {
            return false;
        }
    };

    // when a link is clicked the menu is closed
    const handleMenuClick = (event) => {
        if (window.getComputedStyle(button.current).display === "none") return;
        if (event.target.tagName === "A") {
            closeMenu();
        }
    };

    // keyboard support --> up/down to change focus on links -- home/end to skip to each end of links -- escape/tab closes the menu
    const handleMenuLinkFocus = (event) => {
        event.stopPropagation();
        // if hamburger button is not availble, cancel the event function
        if (window.getComputedStyle(button.current).display === "none") return;
        // if the event target is not a link, cancel the event function
        if (event.target.tagName !== "A") return;
        event.preventDefault();
        switch (event.key) {
            case "Escape":
            case "Tab":
                closeMenu();
                break;
            case "Home":
                links.current[0].focus();
                break;
            case "End":
                links.current[links.current.length - 1].focus();
                break;
            case "ArrowUp":
                if (+event.target.dataset.index === 0) {
                    links.current[links.current.length - 1].focus();
                } else {
                    links.current[+event.target.dataset.index - 1].focus();
                }
                break;
            case "ArrowDown":
                if (+event.target.dataset.index === links.current.length - 1) {
                    links.current[0].focus();
                } else {
                    links.current[+event.target.dataset.index + 1].focus();
                }
                break;
            default:
                break;
        }
    };

    // onClick on the Backdrop cause the menu to close
    const handleBackdropClick = () => {
        closeMenu();
    };
    return (
        <>
            <MainNavigation aria-label="main navigation">
                <HamburgerIcon
                    id="main-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={handleMenuIconClick}
                    ref={button}
                    aria-controls="main-menu"
                >
                    Toggle Menu
                    <Hamburger />
                </HamburgerIcon>
                <Link href="#" passHref>
                    <Brand>
                        <Logo />
                    </Brand>
                </Link>
                <div
                    id="main-menu"
                    role="menu"
                    className="menu"
                    data-menu="false"
                    ref={menu}
                    onClick={handleMenuClick}
                    onKeyUp={handleMenuLinkFocus}
                    aria-labelledby="main-menu-button"
                >
                    <div>
                        <Link href="#" passHref>
                            <NavLink
                                data-index="0"
                                ref={(element) => {
                                    links.current[0] = element;
                                }}
                            >
                                Home
                            </NavLink>
                        </Link>
                        <Link href="#" passHref>
                            <NavLink
                                data-index="1"
                                ref={(element) => {
                                    links.current[1] = element;
                                }}
                            >
                                Shop
                            </NavLink>
                        </Link>
                        <Link href="#" passHref>
                            <NavLink
                                data-index="2"
                                ref={(element) => {
                                    links.current[2] = element;
                                }}
                            >
                                About
                            </NavLink>
                        </Link>
                    </div>
                    <div>
                        <Link href="#" passHref>
                            <NavLink
                                data-index="3"
                                ref={(element) => {
                                    links.current[3] = element;
                                }}
                            >
                                Faqs
                            </NavLink>
                        </Link>
                        <Link href="#" passHref>
                            <NavLink
                                data-index="4"
                                ref={(element) => {
                                    links.current[4] = element;
                                }}
                            >
                                Cart
                            </NavLink>
                        </Link>
                        <Dropdown
                            type="navbar"
                            links={[
                                { title: "Register", href: "#" },
                                { title: "Login", href: "#" },
                            ]}
                            attr={{ id: "menu-account", "aria-labelledby": "menu-account-button" }}
                        >
                            <Link href="#" passHref>
                                <NavLink
                                    data-index="5"
                                    ref={(element) => {
                                        links.current[5] = element;
                                    }}
                                    secondary
                                    dropdown
                                    id="menu-account-button"
                                    aria-haspopup="menu"
                                    aria-expanded="false"
                                    aria-controls="menu-account"
                                >
                                    Account
                                    <span className="arrow" aria-hidden="true">
                                        <ArrowDown />
                                    </span>
                                </NavLink>
                            </Link>
                        </Dropdown>
                    </div>
                </div>
            </MainNavigation>
            <Backdrop data-backdrop="false" aria-hidden="true" ref={menuBackdrop} onClick={handleBackdropClick} />
        </>
    );
}
