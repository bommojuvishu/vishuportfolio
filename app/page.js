"use client";

import Image from "next/image";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Link as MuiLink,
  Avatar,
} from "@mui/material";
import HeroComp from "./components/HeroComp";
import AboutSection from "./components/AboutSection";
import projects from "./projects";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

export default function Home() {
  console.log("Projects:", projects);
  return (
    <>
      <HeroComp />
      <AboutSection />

      {/* Projects Section */}
      <Box id="projects" className="container mx-auto px-4 py-8">
        <Typography variant="h4" component="h2" gutterBottom>
          Projects
        </Typography>
        {projects.map((project, index) => (
          <Card key={index} sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h5" sx={{ mb: 1 }}>
                {project.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                <strong>Tech Stack:</strong> {project.tech}
              </Typography>
              <Typography variant="body1" paragraph sx={{ mb: 1 }}>
                {/* <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {project.description?.map((item) => (
                    <li key={uuidv4()}>{item}</li>
                  ))}
                </ul> */}
                <ul className="list-disc pl-6">
                  {project.description?.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Contact Section */}
      <Box id="contact" className="container mx-auto px-4 py-8">
        <Typography variant="h4" component="h2" gutterBottom>
          Contact Me
        </Typography>
        <Typography variant="body1" paragraph>
          Email: justvishu91@gmail.com
        </Typography>
        <Typography variant="body1" paragraph>
          LinkedIn:{" "}
          <MuiLink
            href="https://www.linkedin.com/in/vishwanathb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </MuiLink>
        </Typography>
      </Box>
    </>
  );
}
