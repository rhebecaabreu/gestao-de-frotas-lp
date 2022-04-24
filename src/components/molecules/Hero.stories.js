import React from "react";
import Hero from "./Hero";
import bgTrucks from "stories/assets/frota.png";
import { text } from "@storybook/addon-knobs";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";

export default {
  title: "Components/molecules/Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={bgTrucks}>
    <h1>{text("Title", "Sua frota conectada com tecnologia e eficiência")}</h1>
    <p>{text("Text", "Gestao de frotas")} </p>
  </Hero>
);

export const withList = () => (
  <Hero image={bgTrucks}>
    <Heading>
      <h1>
        Sua frota conectada com <strong> tecnologia </strong> e
        <strong> eficiência</strong>
      </h1>
    </Heading>
    <ul>
      <li>Lorem ipsum</li>
      <li>Lorem ipsum</li>
      <li>Lorem ipsum</li>
    </ul>
    <Button color="primary" variant="outlined">
      Saiba mais
    </Button>
  </Hero>
);
