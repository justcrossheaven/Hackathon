import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import pic from "../../img/home_page_dog.png";

const ListPage = () => {
  return (
    <div>
      <Box
        sx={{
          margin: "0 auto",
          padding: "28px 50px 28px 50px",
          boxShadow: "1",
          width: "50vw",
          background: "rgba(134, 65, 221, 0.7)",
          borderRadius: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "90%",
            padding: "20px",
            background: "rgba(218, 70, 141, 0.8)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "20px",
          }}
        >
          <Typography
            sx={{
              fontSize: "36px",
              fontWeight: "600",
              lineHeight: "54px",
              fontFamily: "Poppins",
              paddingBottom: "18px",
            }}
          >
            Marry's book
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
              }}
            >
              Created At: 20/20/20
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
              }}
            >
              Modified At: 20/20/20
            </Typography>
          </div>
        </Box>
      </Box>
      <img className="home-page-dog" src={pic} alt="cute_dog_barking" />
    </div>
  );
};

export default ListPage;
