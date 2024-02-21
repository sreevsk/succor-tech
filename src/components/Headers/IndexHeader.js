import React from "react";
import { Container } from "reactstrap";
import { motion } from "framer-motion";
import CustomScrollTranslate from "components/LandingPage/CustomScrollTransform";

function IndexHeader() {
  const scaleTranslate = CustomScrollTranslate(1, 10, 0, 15);
  const opacityTranslate = CustomScrollTranslate(1, -15, 0, 15);
  const yTranslate = CustomScrollTranslate(0, -500, -100, 0);
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
              <motion.h1
                style={{
                  scale: scaleTranslate,
                  opacity: opacityTranslate,
                  translateY: yTranslate,
                }}
                className="presentation-title font-weight-bolder"
              >
                Succor
              </motion.h1>
              <motion.h1
                style={{
                  scale: scaleTranslate,
                  opacity: opacityTranslate,
                  translateY: yTranslate,
                }}
                className="presentation-title "
              >
                Technologies
              </motion.h1>
            </div>
            <motion.h2
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              style={{
                opacity: opacityTranslate,
              }}
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
