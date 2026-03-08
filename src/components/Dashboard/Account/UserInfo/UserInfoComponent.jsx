"use client";
import React from "react";

import UserInfoImage from "./UserInfoUI/UserInfoImage";
import useProfileUser from "@/hooks/Dashboard/Account/useProfileUser";
import { useParams } from "next/navigation";
import UserInfoAddress from "./UserInfoUI/UserInfoAddress";
import UserInfoTT from "./UserInfoUI/UserInfoTT";
import UserInfoBio from "./UserInfoUI/UserInfoBio";
import UserInfoSocial from "./UserInfoUI/UserInfoSocial";

const UserInfoComponent = () => {
  const { id } = useParams();
  const { profileUserLoading } = useProfileUser(id);
  if (profileUserLoading)
    return <div className="w-full h-full text-center"></div>;
  return (
    <div className="mt-5 flex flex-row max-w-[1000px] mx-auto h-full gap-10">
      <div className="w-[48%] space-y-5 ">
        <div>
          <UserInfoImage />
        </div>
        <div>
          <UserInfoBio />
        </div>
        <div>
          <UserInfoSocial />
        </div>
      </div>
      <div className="w-[48%]  space-y-5">
        <div>
          <UserInfoTT />
        </div>
        <div>
          <UserInfoAddress />
        </div>
      </div>
    </div>
  );
};

export default UserInfoComponent;
