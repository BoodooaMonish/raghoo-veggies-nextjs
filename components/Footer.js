import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import { NavLinkStyles } from "./Buttons";
import Facebook from "../logos/Facebook";
import Instagram from "../logos/Instagram";
import Twitter from "../logos/Twitter";

// styled components - start
const Container = styled.footer`
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    position: absolute;
    bottom: 1%;
    left: 0;
    z-index: 1;
`;

const NavLink = styled.a`
    ${NavLinkStyles}
    @media (max-width: ${(props) => props.theme.breakpoint.sm}) {
        margin: 0;
        padding: 0.3rem 1rem;
        color: unset;
        border-radius: 1rem;
        border: 0.1rem solid transparent;
        &:focus {
            background-color: ${(props) => props.theme.colors.grey};
            color: ${(props) => props.theme.colors.white};
            border: 0.1rem solid ${(props) => props.theme.colors.grey};
        }
    }
`;

const Copyright = styled.p`
    text-align: center;
    color: ${(props) => props.theme.colors.primaryDark};
    @media (max-width: ${(props) => props.theme.breakpoint.sm}) {
        order: 2;
    }
`;

const Navigation = styled.nav`
    display: flex;
    justify-content: center;
    align-items: stretch;
    margin-bottom: 1rem;
    @media (max-width: ${(props) => props.theme.breakpoint.sm}) {
        flex-direction: column;
        align-items: center;
    }
`;

const BottomPanel = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0 0.5rem;
    @media (max-width: ${(props) => props.theme.breakpoint.sm}) {
        flex-direction: column;
    }
`;
const SocialLinksContainer = styled.div`
    text-align: center;
    margin-bottom: 1rem;
`;

const SocialLink = styled.a`
    display: inline-block;
    vertical-align: middle;
    font-size: 0;
    padding: 0.5rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin: 0 1rem;
    border: 0.1rem solid ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.white};
    &:hover {
        border: 0.1rem solid ${(props) => props.theme.colors.grey};
        background-color: ${(props) => props.theme.colors.grey};
    }
    &:focus {
        border: 0.1rem solid ${(props) => props.theme.colors.black};
        background-color: ${(props) => props.theme.colors.black};
    }

    & .logo {
        fill: ${(props) => props.theme.colors.black};
    }
    &:hover .logo,
    &:focus .logo {
        fill: ${(props) => props.theme.colors.white};
    }
`;

const PolicyLinks = styled.div`
    @media (max-width: ${(props) => props.theme.breakpoint.sm}) {
        margin-bottom: 1rem;
    }
`;

const TermOfUse = styled.a`
    display: inline;
    border-right: 0.1rem solid ${(props) => props.theme.colors.greyRGBA};
    padding-right: 0.5rem;
    &:hover,
    &:focus {
        color: ${(props) => props.theme.colors.grey};
    }
`;

const PrivacyPolicy = styled.a`
    display: inline;
    padding-left: 0.5rem;
    &:hover,
    &:focus {
        color: ${(props) => props.theme.colors.grey};
    }
`;

const LineBreak = styled.hr`
    width: 98.5%;
    color: ${(props) => props.theme.colors.grey};
    border: none;
    border-top: 0.1rem solid ${(props) => props.theme.colors.greyRGBA};
    @media (max-width: ${(props) => props.theme.breakpoint.sm}) {
        display: none;
    }
`;

// styled components - end

export default function Footer() {
    return (
        <Container aria-label="Content Information">
            <Navigation aria-label="Footer Navigation">
                <Link href="#" passHref>
                    <NavLink>Home</NavLink>
                </Link>
                <Link href="#" passHref>
                    <NavLink>Shop</NavLink>
                </Link>
                <Link href="#" passHref>
                    <NavLink>About</NavLink>
                </Link>
                <Link href="#" passHref>
                    <NavLink>Faqs</NavLink>
                </Link>
                <Link href="#" passHref>
                    <NavLink>Cart</NavLink>
                </Link>
            </Navigation>
            <SocialLinksContainer>
                <Link href="#" passHref>
                    <SocialLink title="facebook">
                        Facebook
                        <Facebook />
                    </SocialLink>
                </Link>
                <Link href="#" passHref>
                    <SocialLink title="twitter">
                        Twitter
                        <Twitter />
                    </SocialLink>
                </Link>
                <Link href="#" passHref>
                    <SocialLink title="instagram">
                        Instagram
                        <Instagram />
                    </SocialLink>
                </Link>
            </SocialLinksContainer>
            <LineBreak />
            <BottomPanel>
                <PolicyLinks>
                    <Link href="#" passHref>
                        <TermOfUse>Terms of Use</TermOfUse>
                    </Link>
                    <Link href="#" passHref>
                        <PrivacyPolicy>Privacy Policy</PrivacyPolicy>
                    </Link>
                </PolicyLinks>
                <Copyright>&copy; Copyright Boodooa Monish {new Date().getFullYear()}</Copyright>
            </BottomPanel>
        </Container>
    );
}
