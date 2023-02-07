import { useState } from "react";
// import {
//   Tabs,
//   TabsHeader,
//   TabsBody,
//   Tab,
//   TabPanel,
// } from "@material-tailwind/react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Products from "./Products.component";

// const ProductNav = () => {

// }
//  export default ProductNav

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const ProductNav = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100%",
      }}
      className=""
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
        className="w-[10%]"
      >
        <Tab label="All" {...a11yProps(0)} />
        <Tab label="Fashion" {...a11yProps(1)} />
        <Tab label="Electronics" {...a11yProps(2)} />
        <Tab label="Home Appliances" {...a11yProps(3)} />
        <Tab label="Furnitures" {...a11yProps(4)} />
        <Tab label="Favourites" {...a11yProps(5)} />
      </Tabs>
      <div className="w-[90%]">
        <TabPanel value={value} index={0}>
          <Products />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
      </div>
    </Box>
  );
};

export default ProductNav;
