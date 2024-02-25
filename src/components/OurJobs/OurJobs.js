import React, { useState, useEffect } from "react";
import "./OurJobs.scss";
import jobData from "../../assets/properties/job-data.json";
import {
  Row,
  Col,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function OurJobs() {
  const [jobCategory, setJobCategory] = useState("Job Category");
  const [jobType, setJobType] = useState("Job Type");
  const [jobLocation, setJobLocation] = useState("Job Location");
  const [searchText, setSearchText] = useState("");
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };
  // const inputSearchRef = useRef(null);
  const [jobList, setJobList] = useState(jobData.jobs);
  const jobCategoryList = [
    "Job Category",
    ...Array.from(new Set(jobData.jobs.map((obj) => obj.jobCategory))),
  ];
  const jobTypeList = [
    "Job Type",
    ...Array.from(new Set(jobData.jobs.map((obj) => obj.type))),
  ];
  const jobLocationList = [
    "Job Location",
    ...Array.from(new Set(jobData.jobs.map((obj) => obj.location))),
  ];

  const [isHovered, setIsHovered] = useState(Array(jobData.length).fill(false));
  const handleMouseEnter = (index) => {
    setIsHovered((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };

  const handleMouseLeave = (index) => {
    setIsHovered((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

  const handleItemClick = (dropdown, selectedItem) => {
    if (dropdown === "category") setJobCategory(selectedItem);
    if (dropdown === "type") setJobType(selectedItem);
    if (dropdown === "location") setJobLocation(selectedItem);
  };

  useEffect(() => {
    setJobList(
      jobData.jobs.filter((obj) => {
        const a =
          (searchText === "" ||
            obj.title.toUpperCase().includes(searchText.toUpperCase())) &&
          (jobCategory === "Job Category" ||
            obj.jobCategory
              .toUpperCase()
              .includes(jobCategory.toUpperCase())) &&
          (jobType === "Job Type" ||
            obj.type.toUpperCase().includes(jobType.toUpperCase())) &&
          (jobLocation === "Job Location" ||
            obj.location.toUpperCase().includes(jobLocation.toUpperCase()));
        return a;
      })
    );
  }, [jobCategory, jobType, jobLocation, searchText]);

  return (
    <>
      <div className="our-jobs-section">
        <motion.div
          initial={{ y: -150 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="section-dark page-header page-header-xs"
          style={{
            backgroundImage:
              "url(" + require("assets/img/succor-img.jpg") + ")",
          }}
        >
          <div
            className="moving-clouds"
            style={{
              backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
            }}
          />
        </motion.div>
        <motion.div
          initial={{ y: 150 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className=" profile-content"
        >
          <motion.div
            className="container"
            initial={{ opacity: 0, scale: 1.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="owner">
              <div className="avatar"></div>
              <div className="name">
                <h4 className="font-weight-bolder mb-2">
                  Our Jobs <br />
                </h4>
                <h6 className="font-weight-normal pb-1">
                  Explore exciting career opportunities and join our talented
                  team.
                </h6>
              </div>
            </div>
            <Row>
              <Col className="ml-auto mr-auto">
                <p>
                  Welcome to our Jobs section, where exciting opportunities
                  await! At NascentTechnologies , we believe that great people
                  are the driving force behind our success. Join our talented
                  team and embark on a rewarding journey where innovation and
                  collaboration thrive. Whether you're a seasoned professional
                  or just starting your career, we offer a diverse range of
                  roles to suit your passion and skills. Explore our job
                  openings and take the next step towards a fulfilling career
                  with us.
                </p>
                <br />
              </Col>
            </Row>
          </motion.div>
        </motion.div>
        <div className="container pt-2 pb-4">
          <div className="row">
            <InputGroup className="col-md-3">
              <input
                placeholder="Search"
                type="text"
                id="search"
                className="form-control"
                value={searchText}
                onChange={handleInputChange}
              />
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  <i aria-hidden={true} className="fa fa-search" />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <div className="col-md-2">
              <UncontrolledDropdown>
                <DropdownToggle
                  aria-expanded={false}
                  aria-haspopup={true}
                  caret
                  color="info"
                  data-toggle="dropdown"
                  id="jobCategory"
                  type="button"
                  style={{ width: "170px" }}
                >
                  {jobCategory}
                </DropdownToggle>
                <DropdownMenu aria-labelledby="jobCategory">
                  {jobCategoryList.map((item) => (
                    <DropdownItem
                      href="#pablo"
                      key={item}
                      onClick={(e) => {
                        handleItemClick("category", item);
                        e.preventDefault();
                      }}
                    >
                      {item}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
            <div className="col-md-2">
              <UncontrolledDropdown>
                <DropdownToggle
                  aria-expanded={false}
                  aria-haspopup={true}
                  caret
                  color="info"
                  data-toggle="dropdown"
                  id="jobType"
                  type="button"
                  style={{ width: "170px" }}
                >
                  {jobType}
                </DropdownToggle>
                <DropdownMenu aria-labelledby="jobType">
                  {jobTypeList.map((item) => (
                    <DropdownItem
                      href="#pablo"
                      key={item}
                      onClick={(e) => {
                        handleItemClick("type", item);
                        e.preventDefault();
                      }}
                    >
                      {item}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
            <div className="col-md-2">
              <UncontrolledDropdown>
                <DropdownToggle
                  aria-expanded={false}
                  aria-haspopup={true}
                  caret
                  color="info"
                  data-toggle="dropdown"
                  id="jobLocation"
                  type="button"
                  style={{ width: "170px" }}
                >
                  {jobLocation}
                </DropdownToggle>
                <DropdownMenu aria-labelledby="jobLocation">
                  {jobLocationList.map((item) => (
                    <DropdownItem
                      href="#pablo"
                      key={item}
                      onClick={(e) => {
                        handleItemClick("location", item);
                        e.preventDefault();
                      }}
                    >
                      {item}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </div>
        </div>
        <div className="container">
          {jobList.map((item, index) => (
            <motion.div
              key={item.title}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              whileHover={{
                background:
                  "linear-gradient(rgba(158, 158, 158, 0.14), rgba(158, 158, 158, 0.14))",
                transition: { duration: 0.2 },
                border: "1px red",
                scale: 1.03,
              }}
              initial={{ opacity: 0, scale: 1.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="row pt-4 custom-card cursor-pointer border-bottom"
            >
              <motion.div
                animate={{
                  opacity: isHovered[index] ? 1 : 0.1,
                  paddingLeft: isHovered[index] ? "30px" : "0px",
                  scale: isHovered[index] ? 1 : 0.7,
                }}
                style={{ display: "grid" }}
                className="col-md-1 align-content-center text-center service-icon"
              >
                <i className="fa fa-suitcase"></i>
              </motion.div>
              <motion.div
                animate={{
                  marginLeft: isHovered[index] ? "40px" : "-50px",
                }}
                className="col-md-10"
              >
                <div className="text text-left">
                  <h4 className="mt-0 blueish-color">
                    <b>{item.title}</b>
                  </h4>
                  <p className="description pt-3">
                    <b>{item.jobCategory}</b>
                    <br />
                    <b>{item.type}</b>
                    <br />
                    <b>{item.location}</b> <br />
                  </p>
                  <motion.div
                    animate={{
                      opacity: isHovered[index] ? 1 : 0,
                      scale: isHovered[index] ? 1 : 0,
                      transition: { duration: 0.3 },
                    }}
                    className="pt-2 pb-3"
                  >
                    <Button className="btn btn-outline-info" color="info">
                      <Link to={"/job-info/" + item.details.jobId}>
                        Learn More
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OurJobs;
