import { Box } from "@mui/system";
import React, { Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import logoWhite from "../../../assets/img/logoWhite.png";
export const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <Container>
          <img src={logoWhite} alt="Logo white" className="img-fluid" />
          <Row>
            <Col md={4}>
              <span className="heading">Subscribe to get news</span>
              <div className="sub">
                <input type="email" placeholder="Email Address" name="email" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                >
                  <path
                    id="icon"
                    d="M607.1,2228H594.9a1.854,1.854,0,0,0-1.9,1.8v8.4a1.853,1.853,0,0,0,1.9,1.8h12.2a1.853,1.853,0,0,0,1.9-1.8v-8.4A1.854,1.854,0,0,0,607.1,2228Zm0,10.409H594.9c-.154,0-.289-.1-.289-.21v-7.288l5.519,4.6a.635.635,0,0,0,.405.146h.932a.636.636,0,0,0,.405-.146l5.519-4.6v7.288C607.39,2238.309,607.255,2238.407,607.1,2238.407Zm-6.1-4.33-5.368-4.49h10.735Z"
                    transform="translate(-593 -2227.998)"
                    fill="#f3f3f3"
                  ></path>
                </svg>
              </div>
              <p className="text-center">
                <small>
                  by subscribing you agree with our terms and conditions
                </small>
              </p>
              <Button className="btn btn-primary">Subscribe</Button>
            </Col>
            <Col md={4} className="px-5">
              <span className="heading">Contact</span>
              <a href="mailto:info@heavenland.io">info@heavenland.io</a>
              <div className="socials row">
                <div className="col-3">
                  <a href="https://twitter.com/heavenland_io">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="49.349"
                      height="38.695"
                      viewBox="0 0 49.349 38.695"
                    >
                      <path
                        id="twitter"
                        d="M922.515,9117.936a18.451,18.451,0,0,1-5.651,1.542,10.494,10.494,0,0,0,4.244-5.336,16.857,16.857,0,0,1-6.353,2.175l0,0a10.328,10.328,0,0,0-7.362-3.033,10.006,10.006,0,0,0-10.18,9.823,9.384,9.384,0,0,0,.262,2.189h0c-7.627-.19-16.542-3.879-21.566-10.19A9.629,9.629,0,0,0,879,9128.085c-1.2.089-3.407-.13-4.446-1.106-.073,3.422,1.635,7.957,7.852,9.595a8.274,8.274,0,0,1-4.238.314c.325,2.892,4.518,6.672,9.1,6.672-1.632,1.817-7.2,5.13-14.1,4.075a31.382,31.382,0,0,0,15.924,4.346c16.425,0,29.181-12.848,28.494-28.694,0-.017-.006-.038-.006-.055,0-.043.006-.086.006-.123s-.006-.1-.006-.146A17.217,17.217,0,0,0,922.515,9117.936Z"
                        transform="translate(-873.166 -9113.285)"
                        fill="#2d25d6"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="col-3">
                  <a href="https://discord.gg/heavenland">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50.601"
                      height="42.222"
                      viewBox="0 0 50.601 42.222"
                    >
                      <path
                        id="Path_1"
                        data-name="Path 1"
                        d="M148.892,112a.527.527,0,0,1-.084-.154c-.847-2.433-5.213-5.479-8.775-7.069-5.477-2.444-10.992-2.308-11.166-1.572-.16.676,4.362,1.117,8.188,3.606a.531.531,0,0,1-.286.978H115.188a.531.531,0,0,1-.286-.978c3.826-2.489,8.348-2.93,8.188-3.606-.174-.736-5.688-.872-11.166,1.572-3.563,1.59-7.931,4.637-8.776,7.071a.526.526,0,0,1-.084.155,11.034,11.034,0,0,0-2.386,6.869v15a11.083,11.083,0,0,0,11.083,11.083h2.465c-3.33-3.877-5.4-8.007-4.816-8.62.487-.515,2.486,2.951,8.732,5.821,3.444,1.582,12.479,1.493,14.024.784,6.246-2.87,8.245-6,8.732-5.485.524.554-1.114,3.983-3.893,7.5H140.2a11.083,11.083,0,0,0,11.083-11.083v-15A11.035,11.035,0,0,0,148.892,112Zm-28.851,10.234a4.366,4.366,0,1,1-4.587-4.588A4.383,4.383,0,0,1,120.041,122.235Zm20.151,0a4.366,4.366,0,1,1-4.587-4.588A4.382,4.382,0,0,1,140.191,122.235Z"
                        transform="translate(-100.679 -102.735)"
                        fill="#2d25d6"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="col-3">
                  <a href="https://www.youtube.com/channel/UCXsJrfOtZwSz2qZ1nENxECA">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="31.297"
                      height="35.77"
                      viewBox="0 0 31.297 35.77"
                    >
                      <path
                        id="Path_2"
                        data-name="Path 2"
                        d="M976.514,245.278A3.045,3.045,0,0,1,975,244.87a3.141,3.141,0,0,1-1.563-2.722V212.631a3.137,3.137,0,0,1,1.567-2.724,3.041,3.041,0,0,1,3.048.02l25.143,14.759a3.146,3.146,0,0,1,0,5.411l-25.14,14.757A3.046,3.046,0,0,1,976.514,245.278Zm24.42-19.037s0,0,0,0Z"
                        transform="translate(-973.438 -209.508)"
                        fill="#2d25d6"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="col-3">
                  <a href="https://medium.com/@heavenland">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="43"
                      height="36.463"
                      viewBox="0 0 43 36.463"
                    >
                      <path
                        id="Path_12"
                        data-name="Path 12"
                        d="M1853.537,283.868c.282-.115.56-.241.846-.345a2.984,2.984,0,0,0,2.2-3.016q.018-14.519,0-29.038a2.936,2.936,0,0,0-2.118-2.962c-.306-.112-.6-.248-.9-.373l.06-.267c.3-.026.606-.074.91-.075,3.275-.005,6.551.02,9.825-.021a1.24,1.24,0,0,1,1.357.916q4.51,10.7,9.084,21.381c.183.429.371.855.659,1.517.265-.564.452-.93.612-1.307,3.047-7.158,6.1-14.313,9.117-21.485a1.374,1.374,0,0,1,1.508-1.026c2.946.056,5.895.02,8.843.025a1.759,1.759,0,0,1,1,.273,4.9,4.9,0,0,1-.657.361c-1.784.657-2.361,1.472-2.36,3.323q.008,13.919.009,27.838c0,.327-.023.655-.012.982a2.934,2.934,0,0,0,2.147,2.939,1.505,1.505,0,0,1,.848.627h-13.8l-.065-.26c.342-.139.675-.308,1.028-.412a2.665,2.665,0,0,0,2.014-2.691c.05-9.2.027-18.4-.151-27.667-.161.337-.334.669-.481,1.013q-6.109,14.35-12.228,28.7a8.351,8.351,0,0,1-.986,1.416,8.6,8.6,0,0,1-.915-1.365q-5.941-13.947-11.845-27.91a2.363,2.363,0,0,0-.641-.944v1.121q0,12.445,0,24.891c0,2.09.523,2.859,2.457,3.587a.965.965,0,0,1,.546.529h-7.822Z"
                        transform="translate(-1853.537 -247.766)"
                        fill="#2d25d6"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </Col>
            <Col md={4} className="mt-md-5">
              <Box style={{width: '60%'}} display="flex" flexDirection="column">
                <Button style={{marginBottom: 15}} className="btn btn-primary">Whitepaper</Button>
                <Button className="btn btn-secondary">Tokenomics</Button>
              </Box>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="copyright">
      <span>© All right reserved 2022.</span>
      </div>
    </Fragment>
  );
};
