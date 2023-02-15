import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar(props) {
 
  const { user } = useAuth0();

  const location = useLocation();
  console.log({location});

  let activeTabIndex = 0;

  switch (location.pathname) {
    case '/home': 
    activeTabIndex = 0;
    break;
    
    case '/goals':
      activeTabIndex = 1;
      break;

    case '/reccuring':
      activeTabIndex = 2;
      break;

    case '/categories': 
      activeTabIndex = 3;
      break;
  }



  return (
    <>
      {user ? (
        <Box
          sx={{
            maxWidth: { xs: 500, sm: 700 },
            bgcolor: "#841AA9",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Tabs
            value={activeTabIndex}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            TabIndicatorProps={{ style: { background: "#F6A730", height: 8 } }}
          >
            {props.hasLinkedBankAccount && [
              <Tab
                style={{
                  color: "white",
                  fontSize: 20,
                  textDecoration: "none",
                }}
                label="Home"
                component={Link}
                to="/home"
                key="home"
              />,
              <Tab
                style={{
                  color: "white",
                  fontSize: 20,
                  textDecoration: "none",
                }}
                label="Goals"
                component={Link}
                to="/goals"
                key="goals"
              />,
              <Tab
                style={{
                  color: "white",
                  fontSize: 20,
                  textDecoration: "none",
                }}
                label="Recurring"
                component={Link}
                to="/recurring"
                key="recurring"
              />,
              <Tab
                style={{
                  color: "white",
                  fontSize: 20,
                  textDecoration: "none",
                }}
                label="Categories"
                component={Link}
                to="/categories"
                key="categories"
              />,
            ]}
          </Tabs>
        </Box>
      ) : (
        ""
      )}
    </>
  );
}
