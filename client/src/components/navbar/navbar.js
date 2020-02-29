import React, { Component } from "react";
import {
<<<<<<< HEAD
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
=======
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
>>>>>>> 452d966c00f848a2d7c67b7a12f897d457564aa7
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../images/aceitLogo.png";
import "./navbar.css";

const links = [
<<<<<<< HEAD
    { href: "/", text: "Home" },
    { href: "/card", text: "Card" },
    { href: "#about", text: "About" },
    { href: "#cata", text: "Categories" },
    { href: "#test", text: "Blogs" },
    { href: "#test2", text: "News" },
    { href: "#busns", text: "Adds", className: "btnadd" },
    { href: "/login", text: "LOGIN" }
=======
  { href: "/", text: "Home" },
  { href: "/card", text: "Card" },
  { href: "/signup", text: "Signup" },
  { href: "/settings", text: "Settings" },
  { href: "/userprofile", text: "User Profile" },
  { href: "#test", text: "Blogs" },
  { href: "#test2", text: "News" },
  { href: "#busns", text: "Adds", className: "btnadd" },
  { href: "/login", text: "LOGIN" }
>>>>>>> 452d966c00f848a2d7c67b7a12f897d457564aa7
];

const createNavItem = ({ href, text, className, index }) => (
    <NavItem key={index}>
        <NavLink href={href} className={className}>
            {text}
        </NavLink>
    </NavItem>
);

export default class Example extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div key="navdiv">
                <Navbar id="nav" color="light" light expand="md">
                    <NavbarBrand href="/">
                        <img id="logo" alt="Logo" src={logo} />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {links.map(createNavItem)}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
