import React from "react";
import styled from "styled-components";
import { FaIdCard, FaHome, FaScroll } from "react-icons/fa";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Callout, {
  CalloutBody,
  CalloutActions,
  CalloutMedia,
} from "components/atoms/Callout";
import Button from "components/atoms/Button";
import GraphImage from "assets/draws/Graph";
import BreadCrumb from "components/atoms/BreadCrumb";

import HeroImage from "assets/gestao-de-frota.jpg";
import Footer from "components/organisms/Footer";

const PinnedList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const PinnedItem = styled.li`
  display: inline-block;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 16px 16px 0;

  svg {
    margin-right: 8px;
    vertical-align: middle;
  }
`;

const ProductDetail = ({ product }) => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>{product.title}</h1>
      </Heading>
      <BreadCrumb
        items={[
          { label: "Início", link: "/" },
          { label: "Serviços" },
          { label: product.title },
        ]}
      />
    </Hero>
    <Section>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facere
          magni quo numquam amet necessitatibus ipsam, impedit et officia
          nostrum eaque perspiciatis, consectetur incidunt dolore sapiente quia
          facilis doloremque non.
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
      </div>
      <h5>O que oferecemos</h5>
      <PinnedList>
        <PinnedItem>
          <FaIdCard />
          Lorem ipsum dolor sit amet.
        </PinnedItem>
        <PinnedItem>
          <FaIdCard />
          Lorem ipsum.
        </PinnedItem>
        <PinnedItem>
          <FaScroll />
          Lorem ipsum dolor.
        </PinnedItem>
        <PinnedItem>
          <FaHome />
          Lorem ipsum dolor sit amet.
        </PinnedItem>
      </PinnedList>
    </Section>
    <Section inverse>
      <Callout>
        <CalloutBody>
          <h6>Título</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            provident fugit ipsa, necessitatibus dolore omnis illum quos sequi
            voluptatibus perspiciatis iusto mollitia soluta cum dolorem eaque
            enim illo magni quis?
          </p>
          <CalloutActions>
            <Button color="primary">Fale conosco</Button>
          </CalloutActions>
        </CalloutBody>
        <CalloutMedia>
          <GraphImage />
        </CalloutMedia>
      </Callout>
    </Section>
    <Footer />
  </>
);

ProductDetail.defaultProps = {};

ProductDetail.propTypes = {};

export default ProductDetail;
