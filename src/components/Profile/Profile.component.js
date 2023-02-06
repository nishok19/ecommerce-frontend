import { useEffect, useState } from "react";
import Product from "./Product.component";
import ProfileNav from "./ProfileNav.component";

const Profile = () => {
  const [selectedNav, setSelectedNav] = useState("General");
  const [displaySetting, setDisplaySetting] = useState("");
  console.log("seeelecteddde", selectedNav);

  useEffect(() => {
    if (selectedNav == "General") setDisplaySetting("General Settings");
    else if (selectedNav == "Teams") setDisplaySetting("Teams Settings");
    else if (selectedNav == "Category") setDisplaySetting("Admin Category");
    else if (selectedNav == "Products") setDisplaySetting(<Product />);
  }, [selectedNav]);

  return (
    <div className="flex">
      <ProfileNav selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
      <div className="divider divider-horizontal"></div>
      {displaySetting}
    </div>
  );
};
export default Profile;
