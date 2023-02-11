import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Products from "./Products.component";
import { useSelector } from "react-redux";

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

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
};

const ProductNav = () => {
  const [value, setValue] = useState(0);
  const categories = useSelector((state) => state.category.category);
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
        sx={{ borderRight: 1, borderColor: "divider" }}
        className="w-[10%]"
      >
        <Tab label="All" {...a11yProps(0)} />
        {categories.map((category, index) => {
          return (
            <Tab
              label={category?.name}
              key={category?._id}
              {...a11yProps(index + 1)}
            />
          );
        })}
      </Tabs>
      <div className="w-[90%]">
        <TabPanel value={value} index={0}>
          <Products />
        </TabPanel>
        {categories.map((category, i) => {
          return (
            <TabPanel value={value} index={i + 1}>
              <Products key={category?._id} categoryId={category?._id} />
            </TabPanel>
          );
        })}
      </div>
    </Box>
  );
};

export default ProductNav;
