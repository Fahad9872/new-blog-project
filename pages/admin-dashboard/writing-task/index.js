import AddWritingTask from "@/components/AdminDashboard/WritingTask/AddWritingTask";
import React, { useState } from "react";
import Sidebar from "@/components/AdminDashboard/Sidebar/Sidebar";
import ResponsiveSidebar from "@/components/AdminDashboard/Sidebar/ResponsiveSidebar";
import AllWritingTasks from "@/components/AdminDashboard/WritingTask/AllWritingTasks";

const WritingTask = () => {
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
            {/* <AddWritingTask /> */}

            <AllWritingTasks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritingTask;
