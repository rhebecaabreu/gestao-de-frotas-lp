import React from "react";

import Callout, { CalloutBody, CalloutActions, CalloutMedia } from "./Callout";
import Button from "./Button";
import GraphImage from "assets/draws/Graph";

export default {
  title: "Components/Atoms/Callout",
  component: Callout,
  subcomponents: { CalloutBody, CalloutActions, CalloutMedia },
};

export const usage = () => (
  <Callout>
    <CalloutBody>
      <h6>Título</h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        provident fugit ipsa, necessitatibus dolore omnis illum quos sequi
        voluptatibus perspiciatis iusto mollitia soluta cum dolorem eaque enim
        illo magni quis?
      </p>
      <CalloutActions>
        <Button color="primary">Fale conosco</Button>
      </CalloutActions>
    </CalloutBody>
    <CalloutMedia>
      <GraphImage />
    </CalloutMedia>
  </Callout>
);
