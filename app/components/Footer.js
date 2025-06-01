"use client";

import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        mt: 4,
        borderTop: "1px solid #ccc",
        textAlign: "center",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © 2025 Vishwanath. All rights reserved.
      </Typography>
    </Box>
  );
}
