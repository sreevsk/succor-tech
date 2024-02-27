import React, { useRef, useEffect } from "react";
import "./JobInfo.scss";
import jobData from "../../assets/properties/job-data.json";
import { motion } from "framer-motion";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
} from "reactstrap";
function JobInfo() {
  const { id } = useParams();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const coverLetterRef = useRef(null);

  const postJob = async () => {
    try {
      const subject = "Apply for this Position - Jobs Page";
      const bodyHtml =
        "<p> Name : " +
        nameRef.current.value +
        "</p> <br>" +
        "<p> Mail : " +
        emailRef.current.value +
        "</p> <br>" +
        "<p> Telephone : " +
        phoneNumberRef.current.value +
        "</p> <br>" +
        "<p> Cover Letter : " +
        coverLetterRef.current.value +
        "</p> <br>" +
        "<p> Job ID : " +
        selectedJob.details["jobId"] +
        "</p> <br>" +
        "<p> Job Title : " +
        selectedJob.details["jobTitle"] +
        "</p> <br>";
      const response = await axios.get("https://api.example.com/data");
      // Handle the fetched data
      console.log(response.data);
    } catch (error) {
      // Handle errors
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const jobIdToObjectMap = {};

  // Populate the map
  jobData.jobs.forEach((obj) => {
    jobIdToObjectMap[obj.details.jobId] = obj;
  });

  const selectedJob = jobIdToObjectMap[id];

  return (
    <>
      <div className="job-info-section">
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
          className="container pb-3"
          initial={{ opacity: 0, scale: 1.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="owner">
            <div className="avatar"></div>
            <div className="name">
              <h4 className="font-weight-bold mb-2">
                {selectedJob.title}
                <br />
              </h4>
            </div>
          </div>
          <div className="pt-4 pb-5">
            {Object.keys(jobData.nameSet).map((name) =>
              jobData.nameSet[name].type === "List" ? (
                <div key={name} className="row">
                  {/* <div className="col-md-2 pt-2">&nbsp;</div> */}
                  <div className="col-md-3 pt-2 font-weight-bold border-bottom pb-2">
                    <i className="nc-icon nc-app pr-2"></i>
                    {String(jobData.nameSet[name].title)}
                  </div>
                  <div className="col-md-1 pt-2 font-weight-normal border-bottom">
                    :
                  </div>
                  <div className="col-md-5 pt-2 pb-2  font-weight-bolder border-bottom">
                    {selectedJob.details[name].notes}
                  </div>
                  {selectedJob.details[name].list.map((resItem, index) => (
                    <div key={index} className="pb-2 pt-2 row">
                      <div className="font-weight-normal col-md-10 pt-2 pb-2 pl-4">
                        {resItem.notes}
                      </div>
                      {resItem.list.map((resItem1, index) => (
                        <div
                          key={index}
                          className="font-weight-normal col-md-12 pt-2 pb-2 pl-4"
                        >
                          <i className="nc-icon nc-button-play pr-2"></i>
                          {String(resItem1)}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <div key={name} className="row">
                  {/* <div className="col-md-2 pt-2">&nbsp;</div> */}
                  <div className="col-md-3 pt-2 font-weight-bold border-bottom pb-2">
                    <i className="nc-icon nc-app pr-3"></i>
                    {String(jobData.nameSet[name])}
                  </div>
                  <div className="col-md-1 pt-2 pb-2  pb-2  font-weight-normal border-bottom">
                    :
                  </div>
                  <div className="col-md-5 pt-2 pb-2 font-weight-normal border-bottom">
                    {selectedJob.details[name]}
                  </div>
                </div>
              )
            )}
            <div className="row pt-2 pb-2">
              <div className="col-md-2 font-weight-bold">Job Category </div>
              <div className="col-md-1 font-weight-normal">:</div>
              <div className="col-md-2 font-weight-normal">
                {selectedJob.jobCategory}{" "}
              </div>
            </div>
            <div className="row pt-2 pb-2">
              <div className="col-md-2 font-weight-bold">Job Type </div>
              <div className="col-md-1 font-weight-normal">:</div>
              <div className="col-md-2 font-weight-normal">
                {selectedJob.type}
              </div>
            </div>
            <div className="row pt-2 pb-2">
              <div className="col-md-2 font-weight-bold">Job Location </div>
              <div className="col-md-1 font-weight-normal">:</div>
              <div className="col-md-4 font-weight-normal">
                {selectedJob.location}
              </div>
            </div>
          </div>

          <Container className="questions-window">
            <Card className="card-register">
              <h3 className="title mx-auto text-white">
                Apply for this position
              </h3>
              <Form className="register-form">
                <label>Name</label>
                <InputGroup className="form-group-no-border">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fa fa-user" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Name" type="text" innerRef={nameRef} />
                </InputGroup>
                <label>Email</label>
                <InputGroup className="form-group-no-border">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="nc-icon nc-email-85" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Email" type="email" innerRef={emailRef} />
                </InputGroup>
                <label>Telephone</label>
                <InputGroup className="form-group-no-border">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fa fa-phone" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Telephone"
                    type="numer"
                    innerRef={phoneNumberRef}
                  />
                </InputGroup>
                <label>Cover Letter</label>
                <InputGroup className="form-group-no-border pb-2">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fa fa-envelope" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Message"
                    type="textarea"
                    innerRef={coverLetterRef}
                  />
                </InputGroup>
                <label>Upload Resume</label>
                <InputGroup className="form-group-no-border pb-2">
                  <InputGroupAddon addonType="prepend"></InputGroupAddon>
                  <Input placeholder="Message" type="file" required />
                </InputGroup>
                <FormGroup check>
                  <Label check>
                    <Input defaultValue="" type="checkbox" />
                    By using this form you agree with the storage and handling
                    of your data by this website.{" "}
                    <span className="form-check-sign" />
                  </Label>
                </FormGroup>
                <Button
                  block
                  className="btn-round"
                  color="info"
                  type="button"
                  onClick={postJob}
                >
                  Submit
                </Button>
              </Form>
            </Card>
          </Container>
        </motion.div>
      </div>
    </>
  );
}

export default JobInfo;
