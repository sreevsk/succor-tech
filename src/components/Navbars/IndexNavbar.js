import React from "react";
import data from "../../assets/properties/data.json";
import classnames from "classnames";
import "./IndexNavbar.scss";
import { Link } from "react-router-dom";
import { motion, MotionConfig } from "framer-motion";

// reactstrap components
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  Navbar,
  NavItem,
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
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1, transition: { delay: 0.5 } }}
              whileHover={{
                letterSpacing: "2px",
                x: -20,
              }}
              transition={{ duration: 0.4 }}
            >
              {data.title}
            </motion.div>
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
            <MotionConfig
              whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
              whileTap={{ y: 3 }}
            >
              <NavItem>
                <Link className="nav-link" style={styles.nav_link} to="/home">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.6, delay: 0.5 },
                    }}
                  >
                    Home
                  </motion.div>
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link"
                  style={styles.nav_link}
                  to="/about-us"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.6, delay: 0.5 },
                    }}
                  >
                    About Us
                  </motion.div>
                </Link>
              </NavItem>
              <UncontrolledDropdown nav>
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.6, delay: 0.5 },
                  }}
                >
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
                </motion.div>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                  <DropdownItem>
                    <Link to="/it-consulting">IT Consulting Services</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/it-project">IT Project Services</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/gis-services"> GIS Services</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link
                  className="nav-link"
                  style={styles.nav_link}
                  to="/support"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.6, delay: 0.5 },
                    }}
                  >
                    Support
                  </motion.div>
                </Link>
              </NavItem>
              <UncontrolledDropdown nav>
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.6, delay: 0.5 },
                  }}
                >
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
                </motion.div>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Our Portfolio
                  </DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Our Jobs
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link
                  className="nav-link"
                  to="/contact-us"
                  style={styles.nav_link}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.6, delay: 0.5 },
                    }}
                  >
                    Contact Us
                  </motion.div>
                </Link>
              </NavItem>
            </MotionConfig>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
