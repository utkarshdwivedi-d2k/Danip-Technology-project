import { Button, Card, Col, Drawer, Menu, Row } from "antd";
import React, { useEffect, useState } from "react";
import logowhite from "../assets/images/logonew.svg";
import logoColor from "../assets/images/logo.png";
import viewmore from "../assets/images/view-more.png";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { routes } from "../controller/routes";
import arrowdrop from "../assets/images/arrowdrop.png";
const Navbar = ({ scroll }) => {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selected, setSelected] = useState("");
  const handleListItemMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleListItemMouseLeave = () => {
    setHoveredItem(null);
  };
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const scrollheader = ["blog", "case-study", "contact-us"];

  useEffect(() => {
    setSelected(
      window.location.pathname.split("/")[
        window.location.pathname.split("/").length - 1
      ]
    );
  }, []);

  const handleClick = (val) => {
    let routeString = val?.keyPath?.reverse().join("/");
    navigate("/" + routeString);
  };
  return (
    <div
      className={`m-0  w-100 d-flex justify-content-between align-items-center position-fixed custom-navbar-container z-1 ${
        (scroll ||
          scrollheader.includes(window.location?.pathname?.split("/")[1])) &&
        "bg-white border-bottom navbar-scroll-view"
      }`}
    >
      {scroll ||
      scrollheader.includes(window.location?.pathname?.split("/")[1]) ? (
        <img
          src={logoColor}
          alt=""
          className="logo-img"
          onClick={() => navigate(routes?.home?.self)}
        />
      ) : (
        <img
          src={logowhite}
          alt=""
          className="logo-img"
          onClick={() => navigate(routes?.home?.self)}
        />
      )}

      <div
        className={` gap-4 justify-content-center align-items-center header-list ${
          window.location.pathname === "/mobile-app-development-dubai"
            ? "d-none"
            : "d-flex"
        }`}
      >
        <ul
          className={`list-unstyled gap-4 justify-content-center align-items-center d-lg-flex d-xl-flex d-md-none d-sm-none d-none m-0 fs-6 fw-normal custom-roman-font ${
            scroll ||
            scrollheader.includes(window.location?.pathname?.split("/")[1])
              ? "text-black"
              : "tex-white"
          }`}
        >
          <li
            onMouseEnter={() => handleListItemMouseEnter("/")}
            onMouseLeave={() => handleListItemMouseEnter("")}
            className={`${
              hoveredItem === "/" || window.location.pathname === "/"
                ? "opacity-100 active"
                : " opacity-75"
            }`}
            onClick={() => navigate(routes?.home?.self)}
          >
            Home
          </li>
          <li
            onMouseEnter={() => handleListItemMouseEnter("IT Services")}
            className={` d-flex align-items-center gap-1 ${
              hoveredItem === "IT Services" ||
              window.location.pathname?.includes("it-services")
                ? "opacity-100 active"
                : " opacity-75"
            }`}
          >
            IT Services{" "}
            <img src={arrowdrop} alt="" className="mt-1" width={10} />
          </li>
          <li
            onMouseEnter={() => handleListItemMouseEnter("Industries")}
            className={`d-flex align-items-center gap-1 ${
              hoveredItem === "Industries" ||
              window.location.pathname?.includes("technologies")
                ? "opacity-100 active"
                : " opacity-75"
            }`}
          >
            Industries
            <img src={arrowdrop} alt="" className="mt-1" width={10} />
          </li>
          <li
            onMouseEnter={() => handleListItemMouseEnter("Technologies")}
            className={`d-flex align-items-center gap-1 ${
              hoveredItem === "Technologies" ||
              window.location.pathname?.includes("technologies")
                ? "opacity-100 active"
                : " opacity-75"
            }`}
          >
            Technologies{" "}
            <img src={arrowdrop} alt="" className="mt-1" width={10} />
          </li>
          <li
            onMouseEnter={() => handleListItemMouseEnter("Case Study")}
            onMouseLeave={() => handleListItemMouseEnter("")}
            className={`${
              hoveredItem === "Case Study" || selected === "case-study"
                ? "opacity-100 active"
                : " opacity-75"
            }`}
            onClick={() => navigate(routes?.home?.caseStudy)}
          >
            Case Study
          </li>
          <li
            onMouseEnter={() => handleListItemMouseEnter("About Us")}
            onMouseLeave={() => handleListItemMouseEnter("")}
            className={`${
              hoveredItem === "About Us" || selected === "about-us"
                ? "opacity-100 active"
                : " opacity-75"
            }`}
            onClick={() => navigate(routes?.home?.caseStudy)}
          >
            About Us
          </li>
        </ul>
        <Button
          size="large"
          className="rounded-5 fs-6 get-in-touch-btn p-4 pt-2 pb-2  fw-medium d-lg-flex d-xl-flex d-md-none d-sm-none d-none custom-roman-font justify-content-center align-items-center"
          onClick={() => navigate(routes?.home?.contactus)}
        >
          Get in Touch
        </Button>
        <MenuOutlined
          className="d-lg-none d-xl-none d-md-flex d-sm-flex d-flex"
          style={
            scroll ||
            scrollheader.includes(window.location?.pathname?.split("/")[1])
              ? { fontSize: 35, color: "black" }
              : { fontSize: 35, color: "white" }
          }
          onClick={showDrawer}
        />
      </div>
      {hoveredItem === "IT Services" && (
        <Card
          style={{
            borderColor: "black",
            top: "105px",
            width: "90%",
            height: "350px",
          }}
          onMouseLeave={() => handleListItemMouseLeave()}
          className={`position-absolute p-0 header-drop-down-card z-1 rounded-3 border-0 ${
            (scroll ||
              scrollheader.includes(
                window.location?.pathname?.split("/")[1]
              )) &&
            "bg-light"
          }`}
        >
          <div className="row col-12 h-100">
            <div className="col-3 h-100 sub-header-dropdown-menu-img d-flex  justify-content-center align-items-center">
              <div
                className="d-flex flex-column gap-3 text-white"
                style={{ padding: "30px 15px" }}
              >
                <span className="fs-4 fw-bolder custom-font">IT Services</span>
                <span className="fs-6 custom-roman-font">
                  Your Trusted and Experienced Partner for Driving Continuous
                  Advancement and Innovation in Information Technology Solutions
                  and Services.
                </span>
                <img src={viewmore} alt="" width={173} />
              </div>
            </div>
            <div className="col-8">
              <Row className="mt-5 sub-item  ">
                <Col span={7}>
                  <ul className="list-unstyled d-flex flex-column gap-2 custom-roman-font">
                    <li
                      className={`${selected == "consulting" && "selected"}`}
                      onClick={() => navigate(routes?.itservices?.consulting)}
                    >
                      Consulting
                    </li>
                    <li
                      className={`${
                        selected == "mobile-app-developmet" && "selected"
                      }`}
                      onClick={() =>
                        navigate(routes?.itservices?.mobileAppDevelopmet)
                      }
                    >
                      Mobile App Development
                    </li>
                    <li
                      className={`${selected == "support" && "selected"}`}
                      onClick={() => navigate(routes?.itservices?.support)}
                    >
                      Support
                    </li>
                    <li
                      className={`${selected == "staffing" && "selected"}`}
                      onClick={() => navigate(routes?.itservices?.staffing)}
                    >
                      Staffing
                    </li>
                  </ul>
                </Col>
                <Col span={7}>
                  <ul className="list-unstyled d-flex flex-column gap-2 custom-roman-font">
                    <li
                      className={`${
                        selected == "web-development" && "selected"
                      }`}
                      onClick={() =>
                        navigate(routes?.itservices?.webDevelopment)
                      }
                    >
                      Web Development
                    </li>
                    <li
                      className={`${
                        selected == "digital-transformation" && "selected"
                      }`}
                      onClick={() =>
                        navigate(routes?.itservices?.digitaldransformation)
                      }
                    >
                      Digital Transformation
                    </li>
                    <li
                      className={`${selected == "edi" && "selected"}`}
                      onClick={() => navigate(routes?.itservices?.edi)}
                    >
                      EDI
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </div>
        </Card>
      )}
      {hoveredItem === "Industries" && (
        <Card
          style={{
            borderColor: "black",
            top: "105px",
            width: "90%",
            height: "350px",
          }}
          onMouseLeave={() => handleListItemMouseLeave()}
          className={`position-absolute p-0 header-drop-down-card z-1 rounded-3 border-0 ${
            (scroll ||
              scrollheader.includes(
                window.location?.pathname?.split("/")[1]
              )) &&
            "bg-light"
          }`}
        >
          <div className="row col-12 h-100">
            <div className="col-3 h-100 sub-header-dropdown-menu-img d-flex  justify-content-center align-items-center">
              <div
                className="d-flex flex-column gap-3 text-white"
                style={{ padding: "30px 15px" }}
              >
                <span className="fs-4 fw-bolder custom-font">Industries</span>
                <span className="fs-6 custom-roman-font">
                  Your Trusted and Experienced Partner for Driving Continuous
                  Advancement and Innovation in Information Technology Solutions
                  and Services.
                </span>
                <img src={viewmore} alt="" width={173} />
              </div>
            </div>
            <div className="col-8">
              <Row className="mt-5 sub-item">
                <Col span={7}>
                  <ul className="list-unstyled d-flex flex-column gap-2 custom-roman-font">
                    <li
                      className={`${selected == "retail" && "selected"}`}
                      onClick={() => navigate(routes?.industries?.retail)}
                    >
                      Retail
                    </li>
                    <li
                      className={`${selected == "healthcare" && "selected"}`}
                      onClick={() => navigate(routes?.industries?.healthcare)}
                    >
                      Healthcare
                    </li>
                    <li
                      className={`${selected == "education" && "selected"}`}
                      onClick={() => navigate(routes?.industries?.education)}
                    >
                      Education
                    </li>
                    <li
                      className={`${selected == "media" && "selected"}`}
                      onClick={() => navigate(routes?.industries?.media)}
                    >
                      Media
                    </li>
                  </ul>
                </Col>
                <Col span={7}>
                  <ul className="list-unstyled d-flex flex-column gap-2 custom-roman-font">
                    <li
                      className={`${selected == "banking" && "selected"}`}
                      onClick={() => navigate(routes?.industries?.banking)}
                    >
                      Banking
                    </li>
                    <li
                      className={`${selected == "insurance" && "selected"}`}
                      onClick={() => navigate(routes?.industries?.insurance)}
                    >
                      Insurance
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </div>
        </Card>
      )}
      {hoveredItem === "Technologies" && (
        <Card
          style={{
            borderColor: "black",
            top: "105px",
            width: "90%",
            height: "350px",
          }}
          onMouseLeave={() => handleListItemMouseLeave()}
          className={`position-absolute p-0 header-drop-down-card z-1 rounded-3 border-0 ${
            (scroll ||
              scrollheader.includes(
                window.location?.pathname?.split("/")[1]
              )) &&
            "bg-light"
          }`}
        >
          <div className="row col-12 h-100">
            <div className="col-3 h-100 sub-header-dropdown-menu-img d-flex  justify-content-center align-items-center">
              <div
                className="d-flex flex-column gap-3 text-white"
                style={{ padding: "30px 15px" }}
              >
                <span className="fs-4 fw-bolder custom-font">Technologies</span>
                <span className="fs-6 custom-roman-font">
                  Your Trusted and Experienced Partner for Driving Continuous
                  Advancement and Innovation in Information Technology Solutions
                  and Services.
                </span>
                <img src={viewmore} alt="" width={173} />
              </div>
            </div>
            <div className="col-8">
              <Row className="mt-5 sub-item">
                <Col span={7}>
                  <ul className="list-unstyled d-flex flex-column gap-2 custom-roman-font">
                    <li
                      className={`${selected == "ai" && "selected"}`}
                      onClick={() => navigate(routes?.technologies?.ai)}
                    >
                      AI
                    </li>
                    <li
                      className={`${selected == "cloud" && "selected"}`}
                      onClick={() => navigate(routes?.technologies?.cloud)}
                    >
                      Cloud
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </div>
        </Card>
      )}
      <Drawer width={"70%"} onClose={onClose} open={open}>
        <Menu
          mode="inline"
          // defaultSelectedKeys={['5']}
          selectedKeys={[selected]}
          className="custom-roman-font"
          onClick={(val) => handleClick(val)}
          items={[
            {
              key: "",
              label: "Home",
            },
            {
              key: "it-services",
              label: "IT Services",
              children: [
                {
                  key: "consulting",
                  label: "Consulting",
                },
                {
                  key: "mobile-app-developmet",
                  label: "Mobile App Development",
                },

                {
                  key: "support",
                  label: "Support",
                },

                {
                  key: "staffing",
                  label: "Staffing",
                },

                {
                  key: "web-development",
                  label: "Web Development",
                },

                {
                  key: "digital-transformation",
                  label: "Digital Transformation",
                },

                {
                  key: "edi",
                  label: "EDI",
                },
              ],
            },
            {
              key: "industries",
              label: "Industries",
              children: [
                {
                  key: "retail",
                  label: "Retail",
                },
                {
                  key: "healthcare",
                  label: "Healthcare",
                },

                {
                  key: "education",
                  label: "Education",
                },

                {
                  key: "media",
                  label: "Media",
                },

                {
                  key: "banking",
                  label: "Banking",
                },

                {
                  key: "insurance",
                  label: "Insurance",
                },
              ],
            },
            {
              key: "technologies",
              label: "Technologies",
              children: [
                {
                  key: "ai",
                  label: "AI",
                },
                {
                  key: "cloud",
                  label: "Cloud",
                },
              ],
            },
            {
              key: "case-study",
              label: "Case Study",
            },
            {
              key: "aboutus",
              label: "About Us",
            },
          ]}
        />
        <Button
          className="rounded-5 get-in-touch-btn fw-medium mt-3"
          onClick={() => navigate(routes?.home?.contactus)}
        >
          Get in Touch
        </Button>
      </Drawer>
    </div>
  );
};

export default Navbar;
