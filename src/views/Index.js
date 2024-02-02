import React from "react";
import IndexHeader from "components/Headers/IndexHeader";
import LandingPage from "components/LandingPage/LandingPage";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <div className="main">
        <IndexHeader />
        <LandingPage />
      </div>
    </>
  );
}

export default Index;
