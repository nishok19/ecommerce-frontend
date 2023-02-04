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
          <Typography>{children}</Typography>
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
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Fashion" {...a11yProps(0)} />
        <Tab label="Electronics" {...a11yProps(1)} />
        <Tab label="Home Appliances" {...a11yProps(2)} />
        <Tab label="Furnitures" {...a11yProps(3)} />
        <Tab label="Favourites" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
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
    </Box>
  );

  ///////////////////////////////////////////////////////////////////////
  //   const data = [
  //     {
  //       label: "Fashion",
  //       value: "Fashion",
  //       desc: `It really matters and then like it really doesn't matter.
  //       What matters is the people who are sparked by it. And the people
  //       who are like offended by it, it doesn't matter.`,
  //     },
  //     {
  //       label: "Electronics",
  //       value: "Electronics",
  //       desc: `Because it's about motivating the doers. Because I'm here
  //       to follow my dreams and inspire other people to follow their dreams, too.`,
  //     },
  //     {
  //       label: "Home Appliances",
  //       value: "Home Appliances",
  //       desc: `We're not always in the position that we want to be at.
  //       We're constantly growing. We're constantly making mistakes. We're
  //       constantly trying to express ourselves and actualize our dreams.`,
  //     },
  //     {
  //       label: "Furnitures",
  //       value: "Furnitures",
  //       desc: `Because it's about motivating the doers. Because I'm here
  //       to follow my dreams and inspire other people to follow their dreams, too.`,
  //     },
  //     {
  //       label: "Favourites",
  //       value: "Favourites",
  //       desc: `We're not always in the position that we want to be at.
  //       We're constantly growing. We're constantly making mistakes. We're
  //       constantly trying to express ourselves and actualize our dreams.`,
  //     },
  //   ];

  //   return (
  //     <Tabs className="flex" value="html">
  //       <TabsHeader className="flex-col w-[18rem] h-full">
  //         {data.map(({ label, value }) => (
  //           <Tab key={value} value={value}>
  //             {label}
  //           </Tab>
  //         ))}
  //       </TabsHeader>
  //       <TabsBody>
  //         {data.map(({ value, desc }) => (
  //           <TabPanel key={value} value={value}>
  //             {desc}
  //           </TabPanel>
  //         ))}
  //       </TabsBody>
  //     </Tabs>
  //   );

  //   return (
  //     <>
  //       <div className="btm-nav bottom-auto top-[100px]">
  //         <button
  //           className={"Fashion" == isActive ? "active" : ""}
  //           onClick={(e) => setIsActive(e.target.textContent)}
  //         >
  //           <a href="#fashionTab">Fashion</a>
  //         </button>
  //         <button
  //           className={"Electronics" == isActive ? "active" : ""}
  //           onClick={(e) => setIsActive(e.target.textContent)}
  //         >
  //           <a href="#lectronicsTab">Electronics</a>
  //         </button>
  //         <button
  //           className={"Home Appliances" == isActive ? "active" : ""}
  //           onClick={(e) => setIsActive(e.target.textContent)}
  //         >
  //           <a href="#appliancesTab">Home Appliances</a>
  //         </button>
  //         <button
  //           className={"Furnitures" == isActive ? "active" : ""}
  //           onClick={(e) => setIsActive(e.target.textContent)}
  //         >
  //           <a href="#furnituresTab">Furnitures</a>
  //         </button>
  //         <button
  //           className={"Favourites" == isActive ? "active" : ""}
  //           onClick={(e) => setIsActive(e.target.textContent)}
  //         >
  //           Favourites
  //         </button>
  //       </div>
  //       {/* */}
  //       {
  //         if(isActive == "")
  //       }
  //       <div id="fashionTab">Fashion Content</div>
  //       <div id="electronicsTab">Electronics Content</div>
  //       <div id="appliancesTab">Appliances Content</div>
  //       <div id="furnituresTab">Furnitures Content</div>
  //     </>
  //   );
};

export default ProductNav;
