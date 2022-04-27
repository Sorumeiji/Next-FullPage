// noinspection JSUnusedGlobalSymbols

import React, { useEffect } from "react";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader/PageHeader";
import Container from "../components/Container/Container";
import Prose from "../components/Prose/Prose";
import PageTitle from "../components/PageTitle/PageTitle";

const Legal: React.FunctionComponent = () => {
  useEffect(() => {
    window?.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <PageHeader>
        <PageTitle>Torch.AI standard terms & agreements.</PageTitle>
        <p>Last updated: March 22, 2022</p>
      </PageHeader>

      <Container>
        <Prose>
          <h3>NEXUS&trade;-as-a-Service (NaaS) – Terms of Service</h3>
          <p>
            TORCH.AI NaaS Terms of Service can be TORCH.AI owns the NEXUS&trade;
            software suite, through which it provides certain software solutions
            delivered either by on-premises or software-as-a-service (through
            its NEXUS&trade;-as-a-Service offering) delivery models. The Terms
            of Service for NEXUS&trade;-as-a-Service are located{" "}
            <a
              href="../terms/62165287b0c6e1dd637c8e75_NaaS-Terms-8.27.2021.pdf"
              target="_blank"
            >
              {" "}
              here{" "}
            </a>
            .
          </p>
          <h3>End User License Agreement (EULA)</h3>
          <p>
            TORCH.AI owns the NEXUS&trade; software suite, through which it
            provides certain software solutions delivered either by on-premises
            or software-as-a-service (through its NEXUS&trade;-as-a-Service
            offering) delivery models. All use of NEXUS&trade; by End Users is
            conditioned upon agreement with the EULA which is located{" "}
            <a
              href="../terms/6128f1444f09249ec2ac66d8_EULA.pdf"
              target="_blank"
            >
              here
            </a>
            .
          </p>
          <h3>Standard Mutual NDA</h3>
          <p>
            TORCH.AI's general NDA is located{" "}
            <a
              href="../terms/6189340041493f70a5de981e_TORCH.AI-NDA-Mutual-November-2021.pdf"
              target="_blank"
            >
              here
            </a>{" "}
            and should be completed, signed and returned to hello@torch.ai
          </p>
        </Prose>
      </Container>
      <Footer />
    </>
  );
};

export default Legal;
