import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiFillSetting, AiOutlineDatabase } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import {
  MdDashboard,
  MdOutlineDashboard,
  MdOutlineHighlight,
  MdOutlineInsertChart,
  MdOutlineSubscriptions,
  MdReviews,
} from "react-icons/md";
import { RiFileMarkLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import logo from "../../../assets/Pages/Merchant/logo.png";
import {
  FaExclamationCircle,
  FaMoneyCheckAlt,
  FaSchool,
  FaUsers,
} from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { SiGoogleads } from "react-icons/si";
import { IoRadioOutline } from "react-icons/io5";
import dashboardlogo from "../../../assets/Pages/Merchant/Sidebar/dashboard.png";
import dashboardActivelogo from "../../../assets/Pages/Merchant/Sidebar/dashboard-active.png";
import coursesActivelogo from "../../../assets/Pages/Merchant/Sidebar/course-active.png";
import courseslogo from "../../../assets/Pages/Merchant/Sidebar/course.png";
import liveActivelogo from "../../../assets/Pages/Merchant/Sidebar/live-active.png";
import livelogo from "../../../assets/Pages/Merchant/Sidebar/live.png";
import appActivelogo from "../../../assets/Pages/Merchant/Sidebar/app-active.png";
import applogo from "../../../assets/Pages/Merchant/Sidebar/app.png";
import studentActivelogo from "../../../assets/Pages/Merchant/Sidebar/student-active.png";
import studentlogo from "../../../assets/Pages/Merchant/Sidebar/student.png";
import walletActivelogo from "../../../assets/Pages/Merchant/Sidebar/wallet-active.png";
import walletlogo from "../../../assets/Pages/Merchant/Sidebar/wallet.png";
import chatActivelogo from "../../../assets/Pages/Merchant/Sidebar/chat-active.png";
import chatlogo from "../../../assets/Pages/Merchant/Sidebar/chat.png";
import leadsActivelogo from "../../../assets/Pages/Merchant/Sidebar/leads-active.png";
import leadslogo from "../../../assets/Pages/Merchant/Sidebar/leads.png";
import batchesActivelogo from "../../../assets/Pages/Merchant/Sidebar/batches-active.png";
import batcheslogo from "../../../assets/Pages/Merchant/Sidebar/batches.png";
import attendanceActivelogo from "../../../assets/Pages/Merchant/Sidebar/attendance-active.png";
import attendancelogo from "../../../assets/Pages/Merchant/Sidebar/attendance.png";
import notificationActivelogo from "../../../assets/Pages/Merchant/Sidebar/notification-active.png";
import notificationlogo from "../../../assets/Pages/Merchant/Sidebar/notification.png";
import facultyActivelogo from "../../../assets/Pages/Merchant/Sidebar/faculty-active.png";
import facultylogo from "../../../assets/Pages/Merchant/Sidebar/faculty.png";
import integrationActivelogo from "../../../assets/Pages/Merchant/Sidebar/integration-active.png";
import integrationlogo from "../../../assets/Pages/Merchant/Sidebar/integration.png";
import storeActivelogo from "../../../assets/Pages/Merchant/Sidebar/store-active.png";
import storelogo from "../../../assets/Pages/Merchant/Sidebar/store.png";
import analyticsActivelogo from "../../../assets/Pages/Merchant/Sidebar/analytics-active.png";
import analyticslogo from "../../../assets/Pages/Merchant/Sidebar/analytics.png";
import settingActivelogo from "../../../assets/Pages/Merchant/Sidebar/setting-active.png";
import settinglogo from "../../../assets/Pages/Merchant/Sidebar/setting.png";
import reelActivelogo from "../../../assets/Pages/Merchant/Sidebar/reel-active.png";
import reellogo from "../../../assets/Pages/Merchant/Sidebar/reel.png";
import assessmentActivelogo from "../../../assets/Pages/Merchant/Sidebar/assessment-active.png";
import assessmentlogo from "../../../assets/Pages/Merchant/Sidebar/assessment.png";
import fulllogo from "../../../assets/Pages/Merchant/fulllogo.png";
import axios from "axios";
import { LuLoader2 } from "react-icons/lu";

const ResponsiveSidebar = ({ showSidebar, setShowSidebar }) => {
  const router = useRouter();
  return (
    <div className="flex items-center cursor-pointer   lg:hidden my-3  bg-white">
      {showSidebar ? (
        <button
          className="flex text-md py-1 px-3 rounded-full text-white bg-primary items-center cursor-pointer fixed left-[140px] top-1 my-[2px] z-50"
          style={{ color: "#414141" }}
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="flex  items-center cursor-pointer ml-4 mt-3 lg:hidden "
          fill="
          #414141"
          viewBox="0 0 100 80"
          width="30"
          height="30"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`top-0 left-0  bg-white min-w-[200px]  fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "-translate-x-0 " : "-translate-x-full"
        }`}
      >
        <div
          onClick={() => {
            router.push("/");
          }}
          className="logo  my-2 px-3 flex items-center gap-1"
        >
          <img className="w-[30px] h-[30px]" src={logo.src} alt="" />
          <p className="text-[#7D23E0] text-[18px] uppercase font-bold group-hover:block  mr-3">
            Ostello
          </p>
        </div>

        <div className="px-3 xl:max-h-[550px] lg:max-h-[450px] md:max-h-[450px] overflow-y-scroll justify-start ">
          <Link
            legacyBehavior
            prefetch={false}
            href="/dashboard/"
            activeClassName="active"
          >
            <div
              className={`${
                router.asPath === "/dashboard"
                  ? "bg-[#F4EBFF] shadow-left-purple text-[#7D23E0] font-semibold"
                  : "text-[#7D7D7D] font-medium"
              } hover:bg-[#F4EBFF]  text-[12px] group/item hover:shadow-left-purple hover:text-[#7D23E0] hover:font-semibold  rounded-[10px] w-full p-[5px] my-[2px] w-fit cursor-pointer  flex items-center gap-1 my-[2px]`}
            >
              <img
                src={dashboardActivelogo.src}
                className={`w-[20px] h-[20px] group-hover/item:block ${
                  router.asPath === "/dashboard" ? "block" : "hidden"
                } `}
                alt=""
              />

              <img
                src={dashboardlogo.src}
                className={`w-[20px] h-[20px] group-hover/item:hidden ${
                  router.asPath === "/dashboard" ? "hidden" : "block"
                }`}
                alt=""
              />

              <p className={` `}>Dashboard</p>
            </div>
          </Link>
          {/* <Link
            legacyBehavior
            prefetch={false}
            href="/dashboard/online-courses"
            activeClassName="active"
          >
            <div
              className={`${
                router.asPath.includes("online-course")
                  ? "bg-[#F4EBFF] shadow-left-purple text-[#7D23E0] font-semibold"
                  : "text-[#7D7D7D] font-medium"
              } hover:bg-[#F4EBFF]  text-[12px] group/item hover:shadow-left-purple hover:text-[#7D23E0] hover:font-semibold  rounded-[10px] w-full  p-[5px] my-[2px] w-fit cursor-pointer  flex items-center gap-1 my-[2px]`}
            >
              {" "}
              <img
                src={coursesActivelogo.src}
                className={`w-[20px] h-[20px] group-hover/item:block ${
                  router.asPath.includes("online-course") ? "block" : "hidden"
                } `}
                alt=""
              />
              <img
                src={courseslogo.src}
                className={`w-[20px] h-[20px] group-hover/item:hidden ${
                  router.asPath.includes("online-course") ? "hidden" : "block"
                }`}
                alt=""
              />
              <p className={` `}>Courses</p>
            </div>
          </Link> */}
          <Link
            legacyBehavior
            prefetch={false}
            href="/admin-dashboard/writing-task"
            activeClassName="active"
          >
            <div
              className={`${
                router.asPath.includes("admin-dashboard/writing-task")
                  ? "bg-[#F4EBFF] shadow-left-purple text-[#7D23E0] font-semibold"
                  : "text-[#7D7D7D] font-medium"
              } hover:bg-[#F4EBFF]  text-[12px] group/item hover:shadow-left-purple hover:text-[#7D23E0] hover:font-semibold  rounded-[10px] w-full  p-[5px] my-[2px] w-fit cursor-pointer  flex items-center gap-1 my-[2px]`}
            >
              {" "}
              <img
                src={liveActivelogo.src}
                className={`w-[20px] h-[20px] group-hover/item:block ${
                  router.asPath.includes("admin-dashboard/writing-task")
                    ? "block"
                    : "hidden"
                } `}
                alt=""
              />
              <img
                src={livelogo.src}
                className={`w-[20px] h-[20px] group-hover/item:hidden ${
                  router.asPath.includes("admin-dashboard/writing-task")
                    ? "hidden"
                    : "block"
                }`}
                alt=""
              />
              <p className={` `}>Free Classes</p>
            </div>
          </Link>
          {/* <Link
            legacyBehavior
            prefetch={false}
            href=""
            activeClassName="active"
          >
            <div
              className={`${
                router.asPath === "/dashboard/your-app"
                  ? "bg-[#F4EBFF] shadow-left-purple text-[#7D23E0] font-semibold"
                  : "text-[#7D7D7D] font-medium"
              } hover:bg-[#F4EBFF]  text-[12px] group/item hover:shadow-left-purple hover:text-[#7D23E0] hover:font-semibold  rounded-[10px] w-full  p-[5px] my-[2px] w-fit cursor-pointer  flex items-center gap-1 my-[2px]`}
            >
              {" "}
              <img
                src={appActivelogo.src}
                className="w-[20px] h-[20px] group-hover/item:block hidden "
                alt=""
              />
              <img
                src={applogo.src}
                className="w-[20px] h-[20px] group-hover/item:hidden block"
                alt=""
              />
              <p className={` `}>Your App</p>
            </div>
          </Link> */}
          <Link
            legacyBehavior
            prefetch={false}
            href="/dashboard/manage-students"
            activeClassName="active"
          >
            <div
              className={`${
                router.asPath === "/dashboard/manage-students"
                  ? "bg-[#F4EBFF] shadow-left-purple text-[#7D23E0] font-semibold"
                  : "text-[#7D7D7D] font-medium"
              } hover:bg-[#F4EBFF]  text-[12px] group/item hover:shadow-left-purple hover:text-[#7D23E0] hover:font-semibold  rounded-[10px] w-full  p-[5px] my-[2px] w-fit cursor-pointer  flex items-center gap-1 my-[2px]`}
            >
              {" "}
              <img
                src={studentActivelogo.src}
                className={`w-[20px] h-[20px] group-hover/item:block ${
                  router.asPath === "/dashboard/manage-students"
                    ? "block"
                    : "hidden"
                } `}
                alt=""
              />
              <img
                src={studentlogo.src}
                className={`w-[20px] h-[20px] group-hover/item:hidden ${
                  router.asPath === "/dashboard/manage-students"
                    ? "hidden"
                    : "block"
                }`}
                alt=""
              />
              <p className={` `}>Manage Students</p>
            </div>
          </Link>
          <Link
            legacyBehavior
            prefetch={false}
            href="/dashboard/wallet"
            activeClassName="active"
          >
            <div
              className={`${
                router.asPath === "/dashboard/wallet"
                  ? "bg-[#F4EBFF] shadow-left-purple text-[#7D23E0] font-semibold"
                  : "text-[#7D7D7D] font-medium"
              } hover:bg-[#F4EBFF]  text-[12px] group/item hover:shadow-left-purple hover:text-[#7D23E0] hover:font-semibold  rounded-[10px] w-full  p-[5px] my-[2px] w-fit cursor-pointer  flex items-center gap-1 my-[2px]`}
            >
              {" "}
              <img
                src={walletActivelogo.src}
                className={`w-[20px] h-[20px] group-hover/item:block ${
                  router.asPath.includes("wallet") ? "block" : "hidden"
                } `}
                alt=""
              />
              <img
                src={walletlogo.src}
                className={`w-[20px] h-[20px] group-hover/item:hidden ${
                  router.asPath.includes("wallet") ? "hidden" : "block"
                }`}
                alt=""
              />
              <p className={` `}>Wallet</p>
            </div>
          </Link>

          <Link
            legacyBehavior
            prefetch={false}
            href="/dashboard/reels"
            activeClassName="active"
          >
            <div
              className={`${
                router.asPath === "/dashboard/reels"
                  ? "bg-[#F4EBFF] shadow-left-purple text-[#7D23E0] font-semibold"
                  : "text-[#7D7D7D] font-medium"
              } hover:bg-[#F4EBFF]  text-[12px] group/item hover:shadow-left-purple hover:text-[#7D23E0] hover:font-semibold  rounded-[10px] w-full  p-[5px] my-[2px] w-fit cursor-pointer  flex items-center gap-1 my-[2px]`}
            >
              {" "}
              <img
                src={reelActivelogo.src}
                className={`w-[20px] h-[20px] group-hover/item:block ${
                  router.asPath === "/dashboard/reels" ? "block" : "hidden"
                } `}
                alt=""
              />
              <img
                src={reellogo.src}
                className={`w-[20px] h-[20px] group-hover/item:hidden ${
                  router.asPath === "/dashboard/reels" ? "hidden" : "block"
                }`}
                alt=""
              />
              <p className={``}>Reels</p>
            </div>
          </Link>

          <Link
            legacyBehavior
            prefetch={false}
            href="/dashboard/leads"
            activeClassName="active"
          >
            <div
              className={`${
                router.asPath === "/dashboard/leads"
                  ? "bg-[#F4EBFF] shadow-left-purple text-[#7D23E0] font-semibold"
                  : "text-[#7D7D7D] font-medium"
              } hover:bg-[#F4EBFF]  text-[12px] group/item hover:shadow-left-purple hover:text-[#7D23E0] hover:font-semibold  rounded-[10px] w-full  p-[5px] my-[2px] w-fit cursor-pointer  flex items-center gap-1 my-[2px]`}
            >
              {" "}
              <img
                src={leadsActivelogo.src}
                className={`w-[20px] h-[20px] group-hover/item:block ${
                  router.asPath === "/dashboard/leads" ? "block" : "hidden"
                } `}
                alt=""
              />
              <img
                src={leadslogo.src}
                className={`w-[20px] h-[20px] group-hover/item:hidden ${
                  router.asPath === "/dashboard/leads" ? "hidden" : "block"
                }`}
                alt=""
              />
              <p className={` `}>Leads</p>
            </div>
          </Link>
          <Link
            legacyBehavior
            prefetch={false}
            href=""
            activeClassName="active"
          >
            <div
              className={`${
                router.asPath === "/dashboard/join-requests"
                  ? "bg-[#F4EBFF] shadow-left-purple text-[#7D23E0] font-semibold"
                  : "text-[#7D7D7D] font-medium"
              } hover:bg-[#F4EBFF]  text-[12px] group/item hover:shadow-left-purple hover:text-[#7D23E0] hover:font-semibold  rounded-[10px] w-full  p-[5px] my-[2px] w-fit cursor-pointer  flex items-center gap-1 my-[2px]`}
            >
              {" "}
              <img
                src={batchesActivelogo.src}
                className={`w-[20px] h-[20px] group-hover/item:block ${
                  router.asPath === "/dashboard/join-requests"
                    ? "block"
                    : "hidden"
                } `}
                alt=""
              />
              <img
                src={batcheslogo.src}
                className={`w-[20px] h-[20px] group-hover/item:hidden ${
                  router.asPath === "/dashboard/join-requests"
                    ? "hidden"
                    : "block"
                }`}
                alt=""
              />
              <p className={` `}>Batches</p>
            </div>
          </Link>

          {/* <Link
            legacyBehavior
            prefetch={false}
            href="/dashboard/notifications"
            activeClassName="active"
          >
            <div
              className={`${
                router.asPath === "/dashboard/notifications"
                  ? "bg-[#F4EBFF] shadow-left-purple text-[#7D23E0] font-semibold"
                  : "text-[#7D7D7D] font-medium"
              } hover:bg-[#F4EBFF]  text-[12px] group/item hover:shadow-left-purple hover:text-[#7D23E0] hover:font-semibold  rounded-[10px] w-full  p-[5px] my-[2px] w-fit cursor-pointer  flex items-center gap-1 my-[2px]`}
            >
              {" "}
              <img
                src={notificationActivelogo.src}
                className={`w-[20px] h-[20px] group-hover/item:block ${
                  router.asPath === "/dashboard/notifications"
                    ? "block"
                    : "hidden"
                } `}
                alt=""
              />
              <img
                src={notificationlogo.src}
                className={`w-[20px] h-[20px] group-hover/item:hidden ${
                  router.asPath === "/dashboard/notifications"
                    ? "hidden"
                    : "block"
                }`}
                alt=""
              />
              <p className={` `}>Notification</p>
            </div>
          </Link> */}
          <Link
            legacyBehavior
            prefetch={false}
            href="/dashboard/faculty"
            activeClassName="active"
          >
            <div
              className={`${
                router.asPath.includes("faculty")
                  ? "bg-[#F4EBFF] shadow-left-purple text-[#7D23E0] font-semibold"
                  : "text-[#7D7D7D] font-medium"
              } hover:bg-[#F4EBFF]  text-[12px] group/item hover:shadow-left-purple hover:text-[#7D23E0] hover:font-semibold  rounded-[10px] w-full  p-[5px] my-[2px] w-fit cursor-pointer  flex items-center gap-1 my-[2px]`}
            >
              {" "}
              <img
                src={facultyActivelogo.src}
                className={`w-[20px] h-[20px] group-hover/item:block ${
                  router.asPath.includes("faculty") ? "block" : "hidden"
                } `}
                alt=""
              />
              <img
                src={facultylogo.src}
                className={`w-[20px] h-[20px] group-hover/item:hidden ${
                  router.asPath.includes("faculty") ? "hidden" : "block"
                }`}
                alt=""
              />
              <p className={` `}>Manage Faculty</p>
            </div>
          </Link>

          <Link
            legacyBehavior
            prefetch={false}
            href="/dashboard/integration"
            activeClassName="active"
          >
            <div
              className={`${
                router.asPath === "/dashboard/integration"
                  ? "bg-[#F4EBFF] shadow-left-purple text-[#7D23E0] font-semibold"
                  : "text-[#7D7D7D] font-medium"
              } hover:bg-[#F4EBFF]  text-[12px] group/item hover:shadow-left-purple hover:text-[#7D23E0] hover:font-semibold  rounded-[10px] w-full  p-[5px] my-[2px] w-fit cursor-pointer  flex items-center gap-1 my-[2px]`}
            >
              {" "}
              <img
                src={integrationActivelogo.src}
                className={`w-[20px] h-[20px] group-hover/item:block ${
                  router.asPath === "/dashboard/integration"
                    ? "block"
                    : "hidden"
                } `}
                alt=""
              />
              <img
                src={integrationlogo.src}
                className={`w-[20px] h-[20px] group-hover/item:hidden ${
                  router.asPath === "/dashboard/integration"
                    ? "hidden"
                    : "block"
                }`}
                alt=""
              />
              <p className={` `}>Integration</p>
            </div>
          </Link>

          <Link
            legacyBehavior
            prefetch={false}
            href="/dashboard/store"
            activeClassName="active"
          >
            <div
              className={`${
                router.asPath === "/dashboard/store"
                  ? "bg-[#F4EBFF] shadow-left-purple text-[#7D23E0] font-semibold"
                  : "text-[#7D7D7D] font-medium"
              } hover:bg-[#F4EBFF]  text-[12px] group/item hover:shadow-left-purple hover:text-[#7D23E0] hover:font-semibold  rounded-[10px] w-full  p-[5px] my-[2px] w-fit cursor-pointer  flex items-center gap-1 my-[2px]`}
            >
              {" "}
              <img
                src={storeActivelogo.src}
                className={`w-[20px] h-[20px] group-hover/item:block ${
                  router.asPath === "/dashboard/store" ? "block" : "hidden"
                } `}
                alt=""
              />
              <img
                src={storelogo.src}
                className={`w-[20px] h-[20px] group-hover/item:hidden ${
                  router.asPath === "/dashboard/store" ? "hidden" : "block"
                }`}
                alt=""
              />
              <p className={` `}>Store</p>
            </div>
          </Link>

          {/* <Link
            legacyBehavior
            prefetch={false}
            href="/dashboard/your-app"
            activeClassName="active"
          >
            <div
              className={`${
                router.asPath === "/dashboard/your-app"
                  ? "bg-[#F4EBFF] shadow-left-purple text-[#7D23E0] font-semibold"
                  : "text-[#7D7D7D] font-medium"
              } hover:bg-[#F4EBFF]  text-[12px] group/item hover:shadow-left-purple hover:text-[#7D23E0] hover:font-semibold  rounded-[10px] w-full  p-[5px] my-[2px] w-fit cursor-pointer  flex items-center gap-1 my-[2px]`}
            >
              {" "}
              <img
                src={analyticsActivelogo.src}
                className="w-[20px] h-[20px] group-hover/item:block hidden "
                alt=""
              />
              <img
                src={analyticslogo.src}
                className="w-[20px] h-[20px] group-hover/item:hidden block"
                alt=""
              />
              <p className={` `}>Analytics</p>
            </div>
          </Link> */}
          <Link
            legacyBehavior
            prefetch={false}
            href="/dashboard/settings"
            activeClassName="active"
          >
            <div
              className={`${
                router.asPath === "/dashboard/settings"
                  ? "bg-[#F4EBFF] shadow-left-purple text-[#7D23E0] font-semibold"
                  : "text-[#7D7D7D] font-medium"
              } hover:bg-[#F4EBFF]  text-[12px] group/item hover:shadow-left-purple hover:text-[#7D23E0] hover:font-semibold  rounded-[10px] w-full  p-[5px] my-[2px] w-fit cursor-pointer  flex items-center gap-1 my-[2px]`}
            >
              {" "}
              <img
                src={settingActivelogo.src}
                className={`w-[20px] h-[20px] group-hover/item:block ${
                  router.asPath === "/dashboard/settings" ? "block" : "hidden"
                } `}
                alt=""
              />
              <img
                src={settinglogo.src}
                className={`w-[20px] h-[20px] group-hover/item:hidden ${
                  router.asPath === "/dashboard/settings" ? "hidden" : "block"
                }`}
                alt=""
              />
              <p className={` `}>Setting</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveSidebar;
