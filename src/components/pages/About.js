import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Grid from "components/atoms/Grid";

import HeroImage from "assets/gestao-de-frota.jpg";
import AboutImage from "assets/draws/About";
import Footer from "components/organisms/Footer";

const ImageContainer = styled.div`
  svg {
    width: 100%;
    max-width: 380px;
    height: auto;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

const About = () => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>Gestão de Frotas</h1>
      </Heading>
    </Hero>

    <Section>
      <Grid md={2}>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            facere magni quo numquam amet necessitatibus ipsam, impedit et
            officia nostrum eaque perspiciatis, consectetur incidunt dolore
            sapiente quia facilis doloremque non.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            commodi magni sapiente molestias consectetur, quam accusantium rem
            voluptates dolorum corrupti vero nihil numquam id iure optio ratione
            hic. Aperiam, ut.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            perferendis itaque debitis reiciendis ex ea quidem exercitationem
            inventore officia tenetur eaque. Et id neque sit nobis sint mollitia
            unde optio?
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            facere magni quo numquam amet necessitatibus ipsam, impedit et
            officia nostrum eaque perspiciatis, consectetur incidunt dolore
            sapiente quia facilis doloremque non.
          </p>
          <center>
            <ImageContainer>
              <AboutImage />
            </ImageContainer>
          </center>
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Grid md={2}>
        <div>
          <h4>Missão</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis praesentium natus delectus, animi, modi obcaecati rem dolore porro ipsa similique harum eaque impedit laborum cumque aliquam consectetur enim? Quasi, odio.</p>
        </div>
        <div>
          <h4>Visão</h4>
          <p>Provident itaque aliquid, fugiat iure deleniti corrupti officia harum aperiam reiciendis, nam perferendis porro dolorem nisi sequi dolore iste error repudiandae! Optio totam consequuntur aperiam tempora sit distinctio hic. Ex.</p>
        </div>
      </Grid>
    </Section>
    <Section>
      <Heading>
        <h2>Conheça nossos professores</h2>
      </Heading>
    </Section>
    <Footer />
  </>
);

About.defaultProps = {};

About.propTypes = {};

export default About;
