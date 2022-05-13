import React from "react";
import Accordion from "./Accordion";
import AccordionGroup from "./AccordionGroup";

export default {
  title: "Components/Atoms/Accordion",
  component: Accordion,
};

export const usage = () => (
  <>
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
  </>
);

export const withGroup = () => (
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
);
