import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { user } = useAuth0();

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
            value={value}
            onChange={handleChange}
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
