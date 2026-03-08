import NewsComponent from "@/components/TinTuc/NewsComponent";
import useTrackUserIP from "@/hooks/TrackerIP/useTrackUserIP";
import React from "react";

export const metadata = {
  title: "Tin Tức - NewLink",
  alternates: {
    canonical: "https://newlinkinvest.com/tin-tuc",
  },
};

const TinTucPage = () => {
  return (
    <div>
      <NewsComponent />
    </div>
  );
};

export default TinTucPage;
