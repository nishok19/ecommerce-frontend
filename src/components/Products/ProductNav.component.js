import { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const ProductNav = () => {
  const data = [
    {
      label: "Fashion",
      value: "Fashion",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Electronics",
      value: "Electronics",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Home Appliances",
      value: "Home Appliances",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Furnitures",
      value: "Furnitures",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Favourites",
      value: "Favourites",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  return (
    <Tabs className="flex" value="html">
      <TabsHeader className="flex-col w-[18rem] h-full">
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );

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
