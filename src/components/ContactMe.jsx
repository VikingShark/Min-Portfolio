import { Stack, Typography, Box, Container, Button, Link } from "@mui/material";
import React from "react";
import Header from "./Header";

export default function ContactMe({ title, subtitle, cta }) {
  return (
    <Box id="contact">
      <Header id="5" text="Kontakta mig" isLight={false} />

      <Container maxWidth="sm">
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ textAlign: "center" }}
          spacing={2}
        >
          <Typography variant="h3" color="text.primary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" color="text.primary">
            {subtitle}
          </Typography>
          <Typography variant="body1" color="text.primary">
            Du kan även kontakta mig på telefonnummer: {cta.phone} eller via mail: <a style={{color: '#ffffff'}} href={`mailto:${cta.email}`}>{cta.email}</a>
          </Typography>
          <Typography variant="body1" color="text.primary">
            
          </Typography>
          <Button
            onClick={cta.callback}
            sx={{ marginTop: 6 }}
            variant="contained"
          >
            {cta.text}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
