/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from "react";
import worldImg from "../../../assets/img/world.jpeg";
export const WorldPageContent = () => {
  return (
    <Fragment>
      <div className="first">
        <div className="videoContainer">
          <img src={worldImg} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h1>Heavenland</h1>
              <p>World of infinite possibilities</p>
            </div>
          </div>
        </div>
      </div>
      <div className="wsecond">
        <div className="container">
          <div className="row">
            <div className="col-md-6 big-m">
              <h1>Tubus</h1>
              <p>
                Imagine you are living in a gravitational cylinder in the
                Earth's orbit. What a magnificent view - Earth to the left,
                stars to the right, a futuristic city above your head. Imagine
                taking an elevator to get to the other side of the cylinder -
                what will you experience in the middle of the cylinder? We
                believe the elevator will become Heavenland's most prominent
                signature.
              </p>
              <p>
                The concept of a city floating in the space isn't new; you may
                be thinking of Elysium, Interstellar, Hallo - Heavenland has
                been fascinated by worlds depicted by these movie and game
                masterpieces and decided to take their vision to a whole new
                level - to the metaverse.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="wthird">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-md-6 big-m">
              <h1>City</h1>
              <p>
                Heavenland is a futuristic city with a design steaming from
                up-to-date research of self-sustainable cities. Heavenland is
                how cities should look, not how they look today.
              </p>
              <p>
                Heavenland comprises 38 individual Clusters with sizes ranging
                from 1x1 km to 2x2 km. The centre of every Cluster contains a
                public space that serves as a Spawning Area - Spawning Areas are
                the only entrance into Heavenland. No matter where in Heaven
                Lend you are, you can always teleport to the Spawning Area. Each
                public space is unique - gallery, stadium, concert hall,
                spaceport, harbour and many more.
              </p>
              <p>
                Clusters are of 4 types depending on the height of a building
                they can contain. There is only a single Cluster in the centre
                of Heavenland, allowing skyscrapers to be built. The further you
                go from the centre, the more limited you are in the height of
                the building. No matter where in the cylinder you are, you'll
                always see the skyscrapers pointing you to the centre of
                Heavenland.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="wfourth">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Parcels</h1>
              <p>
                Heavenland's Clusters comprise 30,000 individual Parcels (in
                total) with sizes of 25x25m. Simply put, Parcels are NFTs with
                some attributes directly encoded into NFT and some attributes
                derived from a Parcel location in the Heavenland.
              </p>
              <p>
                The first class of Parcel's attributes includes size, height
                (Parcel's Cluster determines maximum height, but the Parcel's
                height might be smaller), depth (similar to height attribute).
                The most exclusive Parcel's allow you to drill through the
                cylinder and build on its outer side.
              </p>
              <p>
                The remaining attributes can be how far the Parcel is from a
                Spawning Area, whether the Parcel is at a riverbank or close to
                a park. Some of these attributes are subjective and depends on
                the preferences of given Heavenland citizens.
              </p>
            </div>
            <div className="col-md-6 align-self-center">
              <img src="assets/img/parcel.png" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="wfifth">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-md-6 order-md-last">
              <h1>Transport</h1>
              <p>
                Heavenland is going to be a big city with a need for a
                well-designed transport grid. The walking, which we expect to be
                the dominant way of travel, will be accompanied by a teleport to
                any of 38 Spawning Areas.
              </p>
              <p>
                The main transport will be by a hyperlink (similar to transport
                tubes known from Futurama) accompanied by some individual
                transport vehicles like cars and hovercrafts, whose numbers will
                be limited to sustain smooth transport of all these vehicles.
              </p>
              <p>
                Besides transport within the Heaven Land, travel to outer space
                will be possible.
              </p>
            </div>
            <div className="col-md-6 order-md-first">
              <img src="assets/img/transport.png" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="wsixth">
        <div className="container">
          <div className="row">
            <div className="col-md-6 big-m">
              <h1>Avatars</h1>
              <p>
                Every Heaven Land’s citizen will have its unique name and
                avatar, further customized by different wearables. Both avatar
                names and wearables will be tradables.
              </p>
              <p>
                There will be a limited number of races, each with a different
                rarity, which a citizen can assign to its avatar (human,
                martian, zombie). Heaven Land will introduce a breeding
                mechanism between two avatars to create new races that citizens
                can trade and apply to their avatars.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="wseventh">
        <div className="container">
          <div className="row">
            <div className="col-md-12 big-m text-center">
              <h1>World Explorer</h1>
              <div className="my-5 text-center">
                <button
                  className="btn-primary"
                  onclick="window.open('/explorer')"
                >
                  Open Explorer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
