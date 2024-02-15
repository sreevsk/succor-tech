import React from "react";
import AnimatedTextCharacter from "components/Shared/AnimtedTextCharacter";
import { Container } from "reactstrap";
import { motion } from "framer-motion";

function IndexHeader() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="page-header section-dark"
        style={{
          backgroundImage: "url(" + require("assets/img/succor-img.jpg") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand" style={{ maxWidth: 780 + "px" }}>
              <AnimatedTextCharacter
                text="Succor"
                className="presentation-title text-center font-weight-bolder"
                style={{ fontSize: "6rem" }}
              />
              <AnimatedTextCharacter
                text="Technologies"
                className="presentation-title text-center font-weight-bolder"
                style={{ fontSize: "6rem" }}
              />
              {/* <h1 className="presentation-title">Technologies</h1> */}
            </div>
            <motion.h2
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="presentation-subtitle "
            >
              Virtual Bridge between Job Seekers, Project Developers, and
              Clients
            </motion.h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
          }}
        />
      </motion.div>
    </>
  );
}

export default IndexHeader;
