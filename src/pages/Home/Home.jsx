import React from "react";
import { Button, Section } from "../../components";

function Home() {
  return (
    <>
      <Section background="e3e3e3">
        Welcome to your React boilerplate. We hope that this will bring you up
        to speed with your development
      </Section>
      <Section>This boilerplate uses storybook and React</Section>
      <Section>
        <Button color="primary">Check react Out</Button>
      </Section>
    </>
  );
}

export default Home;
