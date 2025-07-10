import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Paper,
  Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SendIcon from "@mui/icons-material/Send";

const InstagramDM = ({message}) => {
  const messages = [
    {
      id: 1,
      isBot: true,
      text: message || "",
      Text: "link",
    },
  ];

  return (
    <Paper
      sx={{
        width: 300,
        height: 600,
        borderRadius: "30px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      {/* Header */}
      <Box
        display="flex"
        alignItems="center"
        p={1}
        bgcolor="black"
        borderBottom="1px solid #333"
      >
        <IconButton size="small" sx={{ color: "#fff" }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="body1" fontWeight="bold" ml={1} flexGrow={1}>
          Botspace
        </Typography>
        <CameraAltIcon sx={{ mx: 1 }} />
        <SendIcon sx={{ mx: 1 }} />
      </Box>

      {/* Message Area */}
      <Box
        sx={{
          flex: 1,
          p: 1,
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          overflowY: "auto",
        }}
      >
        {messages.map((msg) => (
          <Box
            key={msg.id}
            sx={{
              alignSelf: msg.isBot ? "flex-start" : "flex-end",
              background: msg.isBot ? "#2c2c2e" : "#5e3bff",
              color: "#fff",
              borderRadius: "15px",
              p: 1.5,
              maxWidth: "80%",
              fontSize: "14px",
              whiteSpace: "pre-line",
            }}
          >
            <Typography variant="body2">{msg.text}</Typography>
            {msg.buttonText && (
              <Button
                variant="contained"
                size="small"
                sx={{
                  mt: 1,
                  background: "#444",
                  color: "#fff",
                  textTransform: "none",
                  fontSize: "12px",
                  ":hover": { background: "#555" },
                }}
              >
                {msg.buttonText}
              </Button>
            )}
          </Box>
        ))}
      </Box>

      {/* Input Field */}
      <Box
        display="flex"
        alignItems="center"
        p={1}
        borderTop="1px solid #333"
      >
        <AddCircleOutlineIcon sx={{ mr: 1 }} />
        <Box
          sx={{
            background: "#222",
            borderRadius: "20px",
            flexGrow: 1,
            height: "35px",
            display: "flex",
            alignItems: "center",
            pl: 2,
            color: "#aaa",
            fontSize: "14px",
          }}
        >
          Message...
        </Box>
      </Box>
    </Paper>
  );
};

export default InstagramDM;
