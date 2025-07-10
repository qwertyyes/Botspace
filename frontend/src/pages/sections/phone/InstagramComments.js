import React from "react";
import { Box, Typography, TextField, IconButton, Divider } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendIcon from "@mui/icons-material/Send";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const InstagramComments = ({ imageSrc, keyword }) => {
  return (
    <Box
    sx={{
      color: "white",
      backgroundColor: "black",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      fontFamily: "sans-serif",
      width:'100%',
    }}
  >
    {/* Top Bar */}
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "8px 12px",
        borderBottom: "1px solid #333",
      }}
    >
      <Typography variant="subtitle2" sx={{ fontWeight: "bold", flex: 1 }}>
        Comments
      </Typography>
      <SendIcon sx={{ fontSize: 18 }} />
    </Box>

    {/* Retained Post Header */}
    <Box sx={{ opacity: 0.6 }}>
      {/* Profile Row */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          padding: "8px",
          borderBottom: "1px solid #222",
        }}
      >
        <Box
          component="img"
          src="/logo.jpg"
          sx={{ width: 24, height: 24, borderRadius: "50%" }}
        />
        <Typography variant="caption" sx={{ fontWeight: 600 }}>
          Botspace
        </Typography>
        <Box sx={{ ml: "auto" }}>
          <img src="/iconofpost/menu.png" width={12} alt="menu" />
        </Box>
      </Box>

      {/* Post Image */}
      <Box
        component="img"
        src={imageSrc}
        alt="Post"
        sx={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderBottom: "1px solid #222",
        }}
      />
    </Box>

    {/* Example Comment */}
    <Box
      sx={{
        padding: "10px 12px",
        display: "flex",
        alignItems: "flex-start",
        gap: 1.5,
      }}
    >
      <Box
        component="img"
        src="/logo.jpg"
        alt="user"
        sx={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          backgroundColor: "#666",
        }}
      />
      <Box>
        <Box display="flex" alignItems="center" gap={1}>
          <Typography sx={{ fontWeight: "bold", fontSize: "13px" }}>
            Username
          </Typography>
          <Typography sx={{ fontSize: "11px", color: "#aaa" }}>Now</Typography>
        </Box>
        <Typography sx={{ fontSize: "13px", mt: 0.5 }}>{keyword}</Typography>
        <Typography sx={{ fontSize: "11px", color: "#888", mt: 0.5 }}>
          Reply
        </Typography>
      </Box>
      <IconButton sx={{ ml: "auto", padding: 0 }}>
        <FavoriteBorderIcon sx={{ fontSize: 16, color: "#aaa" }} />
      </IconButton>
    </Box>

    <Divider sx={{ borderColor: "#222" }} />

    {/* Comment Input */}
    <Box
      sx={{
        mt: "auto",
        p: 1,
        display: "flex",
        alignItems: "center",
        gap: 1,
        borderTop: "1px solid #222",
      }}
    >
      <AddCircleOutlineIcon sx={{ color: "#aaa", fontSize: 22 }} />
      <TextField
        placeholder="Add a comment for username..."
        variant="standard"
        fullWidth
        InputProps={{
          disableUnderline: true,
          style: { color: "white", fontSize: "13px" },
        }}
      />
    </Box>
  </Box>
  );
};

export default InstagramComments;
