import React from "react";
import ProfileImage from "./ProfileUI/ProfileImage";
import ProfileInfo from "./ProfileUI/ProfileInfo";
import ProfileBio from "./ProfileUI/ProfileBio";
import ProfileIndustry from "./ProfileUI/ProfileIndustry";
import ProfileSocial from "./ProfileUI/ProfileSocial";
import ProfileAddress from "./ProfileUI/ProfileAddress";

const ProfileComponent = () => {
  return (
    <div className="mt-5 flex flex-row max-w-[1000px] mx-auto h-full gap-10">
      <div className="w-[48%] space-y-5 ">
        <div>
          <ProfileImage />
        </div>
        <div>
          <ProfileInfo />
        </div>
        <div>
          <ProfileAddress />
        </div>
      </div>
      <div className="w-[48%]  space-y-5">
        <div>
          <ProfileBio />
        </div>
        <div>
          <ProfileIndustry />
        </div>
        <div>
          <ProfileSocial />
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
