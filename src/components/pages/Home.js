import React from "react";
// import PropTypes from "prop-types";
import { FaCar, FaKey, FaMapMarkedAlt, FaPersonBooth } from "react-icons/fa";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import Grid from "components/atoms/Grid";
import Feature from "components/atoms/Feature";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";
import ProductGrid from "components/organisms/ProductGrid";
import Accordion, { AccordionGroup } from "components/atoms/Accordion";

import HeroImage from "assets/gestao-de-frota.jpg";
import AboutVideo from "assets/about.mp4";

import PlaceholderImage from "stories/assets/frota-tunel.jpg";

const products = [
  {
    id: 1,
    title: "Monitoramento de frotas",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: PlaceholderImage,
  },
  {
    id: 2,
    title: "Relatórios completos",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: PlaceholderImage,
  },
  {
    id: 3,
    title: "Controle de rotas, paradas e abastecimentos",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: PlaceholderImage,
  },
  {
    id: 4,
    title: "Controle de checklists por veículo",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: PlaceholderImage,
  },
  {
    id: 5,
    title: "Cronograma de manutenção",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: PlaceholderImage,
  },
];

const Home = () => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>
          Sua frota conectada com
          <strong> tecnologia </strong> e <strong> eficiência</strong>
        </h1>
      </Heading>
      <ul>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
      </ul>
      <Button color="primary" variant="outlined">
        Comece agora
      </Button>
    </Hero>
    <Section>
      <Grid sm={2} md={4}>
        <Feature icon={<FaCar />} title="Rastreamento 24h">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaKey />} title="Melhor rota, menos custos">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaMapMarkedAlt />} title="Manutenção sempre em dia">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaPersonBooth />} title="Treinamento para sua equipe">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Conheça nossos serviços</h2>
      </Heading>
      <ProductGrid products={products} />
    </Section>
    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>Gestão de frotas</h2>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            modi veritatis voluptatem pariatur fuga in, accusantium recusandae
            assumenda eum, cumque odio minus quo aut sed molestiae nobis vitae a
            voluptatibus.
          </p>
          <div>
            <Button color="primary">Saiba mais</Button>
          </div>
        </div>
        <div>
          <video src={AboutVideo} width="100%" autoPlay loop muted />
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Dúvidas recorrentes</h2>
      </Heading>
      <AccordionGroup>
        <Accordion title="O que é gestão de frotas?">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          consectetur debitis aut harum nesciunt officiis ex. Molestiae nihil
          repellat ipsum possimus reprehenderit fugiat cumque deleniti, debitis
          excepturi saepe iusto tempore.
        </Accordion>
        <Accordion title="Para que serve a gestão de frotas?">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          consectetur debitis aut harum nesciunt officiis ex. Molestiae nihil
          repellat ipsum possimus reprehenderit fugiat cumque deleniti, debitis
          excepturi saepe iusto tempore.
        </Accordion>
        <Accordion title="Qual a vantagem de um sistema de gestão de frotas?">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          consectetur debitis aut harum nesciunt officiis ex. Molestiae nihil
          repellat ipsum possimus reprehenderit fugiat cumque deleniti, debitis
          excepturi saepe iusto tempore.
        </Accordion>
      </AccordionGroup>
    </Section>
    <Footer />
  </>
);

// Home.defaultProps = {};

// Home.propTypes = {};

export default Home;
