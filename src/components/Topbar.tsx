import React from "react";
import { Typography, AppBar, Toolbar } from "@material-ui/core";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

const Topbar = () => {
  
  function refreshPage() {
    window.location.reload();
  }

  return (
    <AppBar position="sticky" color="secondary">
      <Toolbar>
        <PeopleOutlineIcon onClick={refreshPage} sx={{ m: 2 }} />
        <Typography
          onClick={refreshPage}
          variant="h6"
          sx={{ m: 2 }}
          fontSize={{
            md: 25,
            xs: 15,
          }}
        >
          CRUD App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;