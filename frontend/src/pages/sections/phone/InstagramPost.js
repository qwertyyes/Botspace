import { Box, Typography } from '@mui/material';

const InstagramMock = ({ imageSrc }) => {
  return (
    <Box
      sx={{
        color: "white",
        backgroundColor: "black",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        fontFamily: "sans-serif",
      }}
    >
      {/* Top Bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "8px",
          borderBottom: "1px solid #333",
        }}
      >
        <Typography variant="caption" sx={{ fontWeight: "bold", color: "#fff" }}>
          Posts
        </Typography>
      </Box>

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
          src="/logo.jpg" // Circle border around profile
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
          height: "200px",
          objectFit: "cover",
          borderBottom: "1px solid #222",
        }}
      />


   {/* Post Content */}
<Box sx={{ p: 2, flex: 1, overflow: 'auto' }}>
  {/* Icons Row */}
  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 1, mb: '20px' }}>
    
    {/* Left Icons Group */}
    <Box sx={{ display: 'flex', gap: '5px' }}>
      <img src="/iconofpost/like.png" alt="like" width={18} height={18} />
      <Typography variant="caption">12</Typography>
      <img src="/iconofpost/comment.png" alt="comment" width={18} height={18} />
      <Typography variant="caption">12</Typography>
      <img src="/iconofpost/sent.png" alt="send" width={18} height={18} />
    </Box>

    {/* Save Icon on Right */}
    <img src="/iconofpost/save.png" alt="save" width={18} height={18} />
  </Box>

  {/* Post Caption */}
  <Typography variant="body2" gutterBottom>
    WhatsApp now connects 3 billion users WhatsApp now connects 3 billion users.
    WhatsApp now connects 3 billion users WhatsApp now connects 3 billion users.
  </Typography>
</Box>


      {/* Bottom nav + dash */}
      <Box sx={{ borderTop: '1px solid #222', p: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 1 }}>
          <img src="/iconofpost/home.png" alt=""  width={25}/>
          <img src="/iconofpost/search.png" alt="" width={25} />
          <img src="/iconofpost/plus.png" alt=""  width={25}/>
          <img src="/iconofpost/reel.png" alt="" width={25} />
          <img src="/iconofpost/video.png" alt=""  width={25} />
        </Box>
        <Box
          sx={{
            height: '4px',
            width: '100px',
            backgroundColor: 'white',
            borderRadius: '2px',
            margin: '8px auto 0',
            marginTop:'20px'
          }}
        />
      </Box>
    </Box>
  );
};

export default InstagramMock;
