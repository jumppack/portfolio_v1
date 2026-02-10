import React from "react";
import { Box, Heading, VStack, Text, HStack, Badge } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const experiences = [
  {
    company: "MathWorks",
    role: "Senior Software Engineer",
    date: "Oct 2021 – Present",
    description: "Designing and implementing user interfaces for Simulink; applying modern software architecture principles for performance and scalability.",
  },
  {
    company: "MathWorks",
    role: "Front-End Software Engineer",
    date: "Jul 2019 – Oct 2021",
    description: "Participated in the full SDLC including requirements, architecture, and testing.",
  },
  {
    company: "Humanscale",
    role: "Software Engineering Intern",
    date: "Jan 2019 – May 2019",
    description: "Designed a tool for simulating patient ADT messages, reducing project expenses by 20%. Automated tests using Winium and AutoIT.",
  },
  {
    company: "Control/Robotics Research lab (CRRL)",
    role: "Web Developer",
    date: "Jan 2018 – Jun 2018",
    description: "Built the lab website from scratch using Drupal, HTML, CSS, JavaScript, and jQuery.",
  },
  {
    company: "Tata Consultancy Services (TCS)",
    role: "Systems Engineer",
    date: "Jan 2015 – May 2017",
    description: "Migrated SQL servers cutting query processing time by 40%. Implemented adapters using Spring Integration.",
  },
];

const ExperienceSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#f0fdf4" 
      isDarkBackground={false}
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="experience-section" color="#14532d">
        Work Experience
      </Heading>
      <VStack spacing={8} align="stretch" width="100%">
        {experiences.map((exp, index) => (
          <Box
            key={index}
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="md"
            bg="white"
            borderColor="gray.200"
          >
            <HStack justifyContent="space-between" alignItems="center" mb={2}>
              <Heading fontSize="xl" color="black">{exp.company}</Heading>
              <Badge colorScheme="green">{exp.date}</Badge>
            </HStack>
            <Text fontSize="lg" fontWeight="bold" color="gray.700">
              {exp.role}
            </Text>
            <Text mt={2} color="gray.600">
              {exp.description}
            </Text>
          </Box>
        ))}
      </VStack>
    </FullScreenSection>
  );
};

export default ExperienceSection;
