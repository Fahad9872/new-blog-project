import React, { useState } from "react";
import Sidebar from "@/components/AdminDashboard/Sidebar/Sidebar";
import ResponsiveSidebar from "@/components/AdminDashboard/Sidebar/ResponsiveSidebar";
import AddSuccessStory from "@/components/AdminDashboard/SuccessStory/AddSuccessStory";
import AllSuccessStories from "@/components/AdminDashboard/SuccessStory/AllSuccessStories";

const SuccessStory = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div>
      <div className="/dashboard">
        <ResponsiveSidebar
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        ></ResponsiveSidebar>
        <div className=" w-full flex bg-white md:fixed md:top-0 left-0 z-40 h-screen overflow-y-scroll">
          <Sidebar />

          <div
            style={{ background: " #FAFAFB" }}
            className="w-full overflow-y-scroll"
            onClick={() => setShowSidebar(false)}
          >
            {/* <AddSuccessStory /> */}
            <AllSuccessStories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
