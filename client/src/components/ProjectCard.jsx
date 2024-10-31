import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import takeawayImage from "/images/arc.png";
import "./ProjectCard.css";

function ProjectCards() {
  const projects = [
    {
      title: "Takeaway System",
      image: takeawayImage,
      link: "/more-details",
    },
    {
      title: "Takeaway System",
      image: takeawayImage,
      link: "/more-details",
    },
    {
      title: "Takeaway System",
      image: takeawayImage,
      link: "/more-details",
    },
  ];

  return (
    <Box sx={{ margin: "40px auto", padding: "0 24px", maxWidth: "1400px" }}>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                backgroundColor: "#1c1c1c",
                color: "white",
                borderRadius: "12px",
                overflow: "visible",
              }}
            >
              <Box
                sx={{
                  p: 3,
                  pb: 2,
                  bgcolor: "#171717",
                  borderRadius: "12px",
                  height: 260,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    width: "100%",
                    maxHeight: "200px",
                    objectFit: "contain",
                    bgcolor: "#1c1c1c",
                    borderRadius: "8px",
                    border: "1px solid #2d2d2d",
                  }}
                />
              </Box>
              <CardContent sx={{ pt: 1, px: 3, pb: 3 }}>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{
                    fontSize: "20px",
                    fontWeight: 400,
                    marginBottom: "12px",
                    color: "white",
                  }}
                >
                  {project.title}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Link
                    to={project.link}
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      color: "#8a8a8a",
                      fontSize: "18px",
                    }}
                  >
                    More details
                    <ArrowForwardIcon
                      sx={{
                        marginLeft: "4px",
                        fontSize: "18px",
                      }}
                    />
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProjectCards;
