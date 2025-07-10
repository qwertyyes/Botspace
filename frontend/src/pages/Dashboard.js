import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Post from "./sections/Post";
import Comments from "./sections/Comments";
import DM from "./sections/Dm";
import Review from "./sections/Automate";
import PhoneContainer from "../components/PhoneContainer";
import InstagramComments from "../pages/sections/phone/InstagramComments";
import InstagramDM from "../pages/sections/phone/InstagramDM";
import InstagramPost from "../pages/sections/phone/InstagramPost";

const Dashboard = () => {
  const [step, setStep] = useState(1);
  const [dmMessage, setDmMessage] = useState("");
  const [commentKeyword, setCommentKeyword] = useState("Price");

  const handleNext = () => {
    if (step < 4) setStep((prev) => prev + 1); // now max step is 4
  };

  const [selectedImage, setSelectedImage] = useState("/iconofpost/post1.jpg");

  const handleReelClick = (num) => {
    setSelectedImage(`/iconofpost/post${num}.jpg`);
  };
  const getPreviewComponent = () => {
    switch (step) {
      case 1:
        return <InstagramPost imageSrc={selectedImage} />;
      case 2:
        return (
          <InstagramComments
            keyword={commentKeyword}
            imageSrc={selectedImage}
          />
        );
      case 3:
      case 4:
        return <InstagramDM message={dmMessage} />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Left scrollable section */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 5,
          pr: 2,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Step-by-step Input
        </Typography>

        {step >= 1 && (
          <Box sx={{ mb: 2 }}>
            <Post
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
          </Box>
        )}
        {step >= 2 && (
          <Box sx={{ mb: 2 }}>
            <Comments keyword={commentKeyword} setKeyword={setCommentKeyword} />
          </Box>
        )}
        {step >= 3 && (
          <Box sx={{ mb: 2 }}>
            <DM message={dmMessage} setMessage={setDmMessage} />
          </Box>
        )}
        {step === 4 && (
          <Box sx={{ mb: 2 }}>
            <Review />
          </Box>
        )}

        {/* Next button (only before step 4) */}
        {step < 4 && (
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{
                width: "70px",
                textAlign: "center",
                backgroundColor: "#f5f5f5",
                color: "black",
              }}
            >
              Next
            </Button>
          </Box>
        )}
      </Box>

      {/* Right sticky section */}
      <Box
        sx={{
          width: "55%",
          height: "100%",
          borderLeft: "1px solid #ddd",
          p: 4,
          pl: 10, // pushes phone to right
          position: "relative",
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          backgroundColor: "#f5f5f5",
          marginTop: "-40px",
        }}
      >
        {/* Header with optional LIVE button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "570px",
            mb: 2,
          }}
        >
          {step === 4 && (
            <Button variant="outlined" color="success" size="small">
              Live
            </Button>
          )}
        </Box>

        {/* Centered phone */}
        <Box>
          <PhoneContainer>{getPreviewComponent()}</PhoneContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
