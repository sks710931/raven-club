/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from "react";
import tubus from "../../../assets/img/TUBUS.png";
import meLogo from "../../../assets/img/ME_Logo_Gradient_BG.png"
import solsea from "../../../assets/img/solsea_Logo_RGB_final1.png"
import unityUnr from "../../../assets/img/unityUnr.png"
import solanart from "../../../assets/img/solanart.jpeg"
import digitaleyes from "../../../assets/img/digitaleyes.png"
import solamids from "../../../assets/img/solamids.png"
import mini from "../../../assets/img/mini_01.png"
export const Content = () => {
  return (
    <Fragment>
      <div className="second">
        <div className="container">
          <div className="row">
            <div className="col-md-6 order-md-last">
              <h1>Gravitational Tubus in Space</h1>
              <p>
                Heavenland is a futuristic city built in a rotating
                gravitational cylinder in the Earth’s orbit. Negative surface
                curvature imparts Heavenland citizens with other world
                experiences, and its location in space makes Heavenland a true
                space gateway.
              </p>
            </div>
            <div className="col-md-6 order-md-first align-self-center">
              <img src={tubus} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="third">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>City topology of Future </h1>
              <p>
                How would you design a city if you could start from scratch?
                Heavenland has onboarded a team of architects specializing in
                research of self-sustainable cities of the future. That’s why
                you cannot compare Heavenland to anything you can find on Google
                Earth - such places don’t exist yet.
              </p>
              <button
                className="btn-primary"
                onclick="window.open('/explorer')"
              >
                World Explorer
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fourth">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-md-6 big-m">
              <h1>Technology</h1>
              <p>
                Heavenland experience has been developed in Unity Engine. To
                bring Heavenland to the most people in the shortest possible
                time, the first client will be a web client, and we’ll
                continually create other clients for Desktop, Mobile, ultimately
                leading to VR.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="fifth">
        <div className="container">
          <div className="row">
            <div className="col-md-6 big-m">
              <h1>Heavenmarket</h1>
              <p>
                People will express themselves in Heavenland through ownership -
                what you own defines you. Heaven Land uses Solana blockchain as
                the main backbone. You’ll be able to exchange tradables with
                others on existing Solana marketplaces. Still, an authentic
                in-game experience will emerge after Heaven Land’s economy and
                exchange with a native token will come to play.
              </p>
              <button
                className="btn-primary"
                onclick="location.href='https://heavenmarket.io'"
              >
                Visit Heavenmarket
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sixth">
        <div className="container text-center">
          <h1>Partners</h1>
          <p>
            Cooperation resides in the centre of Heavenland philosophy because
            only through collaboration can we achieve great things.
          </p>
          <div className="row text-start">
            <div className="col-md-6">
              <div className="row partnerContainer">
                <div className="col-auto me-2">
                  <div className="partner">
                    <img src={meLogo} />
                  </div>
                </div>
                <div className="col align-self-center">
                  <span className="heading">
                    <a href="https://magiceden.io/" target="_blank">
                      Magic Eden
                    </a>
                  </span>
                </div>
              </div>
              <div className="row partnerContainer">
                <div className="col-auto me-2">
                  <div className="partner">
                    <img src={solsea} />
                  </div>
                </div>
                <div className="col align-self-center">
                  <span className="heading">
                    <a href="https://solsea.io/" target="_blank">
                      Solsea
                    </a>
                  </span>
                </div>
              </div>
              <div className="row partnerContainer">
                <div className="col-auto me-2">
                  <div className="partner">
                    <img src={unityUnr} />
                  </div>
                </div>
                <div className="col align-self-center">
                  <span className="heading">Unity / Unreal Engine</span>
                  <p>
                    When it comes to game development, we can think of only a
                    few engines.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row partnerContainer">
                <div className="col-auto me-2">
                  <div className="partner">
                    <img src={solanart} />
                  </div>
                </div>
                <div className="col align-self-center">
                  <span className="heading">
                    <a href="https://solanart.io/" target="_blank">
                      Solanart
                    </a>
                  </span>
                  <p></p>
                </div>
              </div>
              <div className="row partnerContainer">
                <div className="col-auto me-2">
                  <div className="partner">
                    <img src={digitaleyes} />
                  </div>
                </div>
                <div className="col align-self-center">
                  <span className="heading">
                    <a href="https://digitaleyes.market/" target="_blank">
                      Digital Eyes
                    </a>
                  </span>
                </div>
              </div>
              <div className="row partnerContainer">
                <div className="col-auto me-2">
                  <div className="partner">
                    <img src={solamids} />
                  </div>
                </div>
                <div className="col align-self-center">
                  <span className="heading">
                    <a href="https://solamids.io/" target="_blank">
                      Solamids
                    </a>
                  </span>
                  <p>
                    This project has done a lot of work to enlighten the Solana
                    NFT community about metaverse. Solamid's team is creating a
                    pyramid building with 4914 apartments in Heaven Land, and
                    each apartment has its owner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="eighth">
        <div className="container">
          <div className="row">
            <div className="col-md-6 order-md-last">
              <h1>In Touch</h1>
              <p>
                These partnered collections support Heaven Land in its early
                stages and have big plans to implement their brand into Heaven
                Land.
              </p>
            </div>
            <div className="col-md-6 investors text-center order-md-first">
              <div className="row">
                <div className="col-md-3 col-6">
                  <div className="partner md">
                    <a href="https://zeroglabs.io/solanauts" target="_blank">
                      <img src={mini} />
                      <span></span>
                    </a>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="partner md">
                    <a href="https://soldough.com" target="_blank">
                    <img src={mini} />
                      <span></span>
                    </a>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="partner md">
                    <a href="https://roguesharks.org" target="_blank">
                    <img src={mini} />
                      <span></span>
                    </a>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="partner md">
                    <a href="https://piggygang.com" target="_blank">
                    <img src={mini} />
                      <span></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 col-6">
                  <div className="partner md">
                    <a href="https://thedogecapital.com" target="_blank">
                    <img src={mini} />
                      <span></span>
                    </a>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="partner md">
                    <a href="https://whalesnation.com" target="_blank">
                    <img src={mini} />
                      <span></span>
                    </a>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="partner md">
                    <a href="https://surgingbulls.com" target="_blank">
                    <img src={mini} />
                      <span></span>
                    </a>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="partner md">
                    <a href="https://solarmy.io" target="_blank">
                    <img src={mini} />
                      <span></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 col-6">
                  <div className="partner md">
                    <a href="https://theparlaynft.com" target="_blank">
                    <img src={mini} />
                      <span></span>
                    </a>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="partner md">
                    <a
                      href="https://twitter.com/Dapper_DucksNFT"
                      target="_blank"
                    >
                      <img src={mini} />
                      <span></span>
                    </a>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="partner md">
                    <a href="https://solamids.io" target="_blank">
                    <img src={mini} />
                      <span></span>
                    </a>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="partner md">
                    <a href="https://www.souldogs.city/" target="_blank">
                    <img src={mini} />
                      <span></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 col-6">
                  <div className="partner md">
                    <a href="https://www.cyborg-apes.com/" target="_blank">
                    <img src={mini} />
                      <span></span>
                    </a>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="partner md">
                    <a href="https://pesky-penguins.com/" target="_blank">
                    <img src={mini} />
                      <span></span>
                    </a>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="partner md">
                    <a href="https://hrhc.io/" target="_blank">
                    <img src={mini} />
                      <span></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </Fragment>
  );
};
