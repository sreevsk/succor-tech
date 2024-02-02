/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import data from "../../assets/properties/data.json";
// nodejs library that concatenates strings
import classnames from "classnames";
import "./IndexNavbar.scss";
import { Link } from "react-router-dom";

// reactstrap components
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const styles = {
    nav_link: {
      fontWeight: "bolder",
      textTransform: "capitalize",
      fontSize: "medium",
    },
  };
  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor, "p-1")} expand="lg">
      <Container>
        <div className="navbar-translate">
          <Link className="navbar-brand font-weight-bolder" to="/index">
            {data.title}
          </Link>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <Link className="nav-link" style={styles.nav_link} to="/home">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" style={styles.nav_link} to="/about-us">
                About Us
              </Link>
            </NavItem>
            <UncontrolledDropdown nav>
              <DropdownToggle
                style={styles.nav_link}
                aria-haspopup={true}
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                id="navbarDropdownMenuLink"
                nav
                onClick={(e) => e.preventDefault()}
              >
                Services
              </DropdownToggle>
              <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  IT Consulting Services
                </DropdownItem>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  IT Project Services
                </DropdownItem>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  GIS Services
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink data-placement="bottom" style={styles.nav_link}>
                Support
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav>
              <DropdownToggle
                style={styles.nav_link}
                aria-haspopup={true}
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                id="navbarDropdownMenuLink"
                nav
                onClick={(e) => e.preventDefault()}
              >
                Our Catalogue
              </DropdownToggle>
              <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  Our Portfolio
                </DropdownItem>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  Our Jobs
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink style={styles.nav_link}>Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
