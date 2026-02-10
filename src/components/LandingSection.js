import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Karan Mehta!";
const bio1 = "Senior Software Engineer";
const bio2 = "Specialised in React & System Architecture";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={8}>
      <Avatar src="https://media.licdn.com/dms/image/v2/C4E03AQG--v0_4uADtWtluMZZRkmMI/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517593259424?e=1743638400&v=beta&t=cE5_mY2iS5Z0tC7K3_rX_jW_L_t_h_X_N_Q_A_A_D_Q" size="2xl" />
      <Heading as="h4" size="md" noOfLines={1}>
        {greeting}
      </Heading>
      <VStack spacing={6}>
        <Heading as="h1" size="3xl" noOfLines={1}>
          {bio1}
        </Heading>
        <Heading as="h1" size="3xl" noOfLines={1}>
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
