import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
    Box1,
} from "./FooterElements.js";

const Footer = () => {
    return (
        <div>
            <Box1>
            </Box1>
        <Box>
            <h1 style={{ color: "green",
                textAlign: "center",
                marginTop: "-50px" }}>
            </h1>
            <Container>
                <Row>
                    <Column>
                        <Heading>About</Heading>
                        <FooterLink href="/About">About Us</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact</Heading>
                        <FooterLink href="/Contact">Contact Us</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <FooterLink target="_blank" href="https://clearbit.com/">Clearbit API</FooterLink>

                    </Column>
                    <Column>
                        <p>&copy;ResearchU 2021</p>
                    </Column>
                </Row>
            </Container>
        </Box>
        </div>
    );
};
export default Footer;