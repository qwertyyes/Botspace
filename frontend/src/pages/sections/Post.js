import React ,{useState} from "react";
import "./style.css";
import { blueGrey } from "@mui/material/colors";

const Post = ({ selectedImage, setSelectedImage }) => { // default post image
 const handleReelClick = (reelNumber) => {
    setSelectedImage(`/iconofpost/post${reelNumber}.jpg`);
  };
  return (
    <>
      <div class="container">
        <input type="radio" value="a simple post or reel"  checked/>
        <label class="text">a specific post or reel</label>
        <div
        style={{
          marginBottom: "10px",
          width: "100%",
          maxHeight: "240px",
          overflow: "hidden",
          borderRadius: "8px",
        }}
      >
      </div>
        <div className="reels">
          <div className="reel1" onClick={() => handleReelClick(1)}>
            <img
            src="/iconofpost/post1.jpg"
            alt="Reel 1"
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "5px",marginLeft:'7px' }}
          />
          </div>
          <div className="reel2" onClick={() => handleReelClick(2)}>
            <img
            src="/iconofpost/post2.jpg"
            alt="Reel 1"
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "5px",marginLeft:'10px' }}
          />
          </div>
          <div className="reel3" onClick={() => handleReelClick(3)}>
            <img
            src="/iconofpost/post3.jpg"
            alt="Reel 1"
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "5px" ,marginLeft:'15px'}}
          />
          </div>
        </div>
        <a href="link" placeholder="" class="seeall" style={{color:'blue',textDecoration:'none'}}>Show all</a>
      </div>
      <div class="cont1">
        <input type="radio" value="a simple post or reel"  checked/>
        <label class="text">a specific post or reel</label>
      </div>
    </>
  );
};

export default Post;
