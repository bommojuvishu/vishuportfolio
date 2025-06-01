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

const projects = [
  {
    name: "Invesco Vision",
    description:
      "A web app providing risk/return insights for financial assets.",
    tech: "React.js, Flask, AWS Aurora PostgreSQL",
  },
  {
    name: "Rules Engine",
    description:
      "Custom rules engine enabling dynamic deployment for multiple customers.",
    tech: "Python, Flask, PostgreSQL",
  },
];

export default function Home() {
  return (
    <>
      {/* Banner Section */}
      <Box
        id="home"
        className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-30 mb-8 flex flex-col items-center gap-6 shadow-lg"
      >
        <Avatar
          alt="Vishwanath"
          src="/profile.jpg"
          sx={{
            width: 120,
            height: 120,
            border: "4px solid white",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        />
        <Box className="text-center md:text-left">
          <Typography variant="h3" className="text-white font-bold mb-2">
            Hi, I'm Vishwanath 👋
          </Typography>
          <Typography variant="body1" className="text-white">
            Full-stack developer specializing in React.js, Flask, and
            PostgreSQL.
          </Typography>
        </Box>
      </Box>

      {/* About Section */}
      <Box id="about" sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" paragraph>
          I’m Vishwanath, a full-stack engineer with 10 years of experience
          building scalable web applications. I enjoy working with modern
          technologies like React, Flask, and AWS.
        </Typography>
      </Box>

      {/* Projects Section */}
      <Box id="projects" sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Projects
        </Typography>
        {projects.map((project, index) => (
          <Card key={index} sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h5">{project.name}</Typography>
              <Typography variant="body1" paragraph>
                {project.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Tech Stack:</strong> {project.tech}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Contact Me
        </Typography>
        <Typography variant="body1" paragraph>
          Email: yourname@example.com
        </Typography>
        <Typography variant="body1" paragraph>
          LinkedIn:{" "}
          <MuiLink
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            yourprofile
          </MuiLink>
        </Typography>
      </Box>
    </>
  );
}
