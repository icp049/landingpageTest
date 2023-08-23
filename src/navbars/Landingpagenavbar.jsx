import { Box, IconButton } from '@mui/material';
import {
  
  SearchOutlined,
  ExitToAppOutlined, // 1. Import the ExitToAppOutlined icon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';


const Landingpagenavbar = () => {


  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      backgroundColor="grey"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="2"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          sx={{ ':hover': { cursor: "pointer" } }}
          color="blue"
        >
          TosmosListings
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <Link to="">My Profile</Link>
          <Link to="">Messages</Link>
          <Link to="">Listings</Link>

          <IconButton sx={{ color: "black" }}>
            <SearchOutlined />
          </IconButton>

          {/* Logout Button */}
          <IconButton sx={{ color: "black" }} >
            <ExitToAppOutlined />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Landingpagenavbar;