import { useEffect, useState } from "react";
import ProfileNav from "./ProfileNav.component";

const Profile = () => {
  const [selectedNav, setSelectedNav] = useState("General");
  const [displaySetting, setDisplaySetting] = useState("");
  console.log("seeelecteddde", selectedNav);

  useEffect(() => {
    if (selectedNav == "General") setDisplaySetting("General Settings");
    else if (selectedNav == "Teams") setDisplaySetting("Teams Settings");
  }, [selectedNav]);

  return (
    <div className="flex">
      <ProfileNav selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
      {displaySetting}
    </div>
  );
};
export default Profile;
