import React from "react";
import Heading from "../components/Heading";
import Hero from "../components/Hero";
import bgTrucks from "stories/assets/frota.png";
import { text } from "@storybook/addon-knobs";

export default {
  title: "Components/Hero",
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
  </Hero>
);
