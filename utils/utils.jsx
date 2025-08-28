import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useState } from "react";

export const titleToUrl = (title) =>
  title
    ?.trim()
    .toLowerCase()
    .replaceAll(" ", "-")
    .replace(/&/g, "and")
    .replaceAll("?", "-")
    .replaceAll("+", "%2B")
    .replaceAll("/", "-or-");
export const urlToTitle = (title) =>
  capitalizeFirstLetter(title).replaceAll("-", " ");

export const capitalize = (str) =>
  str.replace(
    /\b([a-zÁ-ú]{3,})/g,
    (w) => w.charAt(0).toUpperCase() + w.slice(1)
  );

export const isEmptyObj = (obj) => Object?.keys(obj)?.length === 0;

export const phoneNumberToNumber = (phoneNumber) =>
  parseInt(phoneNumber.replace(/\s/g, ""));
let navigator;

if (typeof window !== "undefined") {
  navigator = window.navigator;
}

export const capitalizeFirstLetter = (name) => {
  const nameArray = name?.split(" ");
  return nameArray[0].charAt(0).toUpperCase() + nameArray[0].slice(1) + " ";
};

export const getAccessToken = () => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem("ACCESS_TOKEN");
  }
  return null;
};

export const headers = {
  "Access-Control-Allow-Origin": "*",
  Authorization: `Bearer ${getAccessToken()}`,
};

export const renderFilePreview = (file) => {
  if (!file) return null;

  const fileExtension = file.name.split(".").pop().toLowerCase();

  if (fileExtension === "pdf") {
    return (
      <iframe
        src={URL.createObjectURL(file)}
        width="100%"
        height="100px"
        title="PDF Preview"
      />
    );
  }

  if (["xls", "xlsx"].includes(fileExtension)) {
    return <p>{file.name} (Excel File)</p>;
  }

  return <p>{file.name}</p>;
};

export const getFormatedTimeWith12 = (isoString) => {
  const dateObject = new Date(isoString);

  // // Formatting date in a single line
  // const formattedDate = `${dateObject.getFullYear()}-${String(
  //   dateObject.getMonth() + 1
  // ).padStart(2, "0")}-${String(dateObject.getDate()).padStart(2, "0")}`;

  // Formatting time to 12-hour format with AM/PM
  let hours = dateObject.getHours();
  const minutes = dateObject.getMinutes().toString().padStart(2, "0");
  const seconds = dateObject.getSeconds().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert hour to 12-hour format and handle midnight (0)
  const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
  return formattedTime;
};

export const getFormatedDate = (isoString) => {
  const dateObject = new Date(isoString);

  // Formatting date in a single line
  const formattedDate = `${dateObject.getFullYear()}-${String(
    dateObject.getMonth() + 1
  ).padStart(2, "0")}-${String(dateObject.getDate()).padStart(2, "0")}`;
  return formattedDate;
};

export function formatDateTime(isoString) {
  const date = new Date(isoString);

  // Convert to IST (UTC +5:30)
  const ISTOffset = 330; // IST is UTC +5:30 in minutes
  const localTime = new Date(date.getTime() + ISTOffset * 60 * 1000);

  // Extract year, month, and day
  const year = localTime.getUTCFullYear();
  const month = (localTime.getUTCMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
  const day = localTime.getUTCDate().toString().padStart(2, "0");

  // Extract hours and minutes
  const hours = localTime.getUTCHours().toString().padStart(2, "0");
  const minutes = localTime.getUTCMinutes().toString().padStart(2, "0");

  // Format date as "YYYY-MM-DD"
  const formattedDate = `${year}-${month}-${day}`;

  // Format time as "HH:MM"
  const formattedTime = `${hours}:${minutes}`;

  return { date: formattedDate, time: formattedTime };
}
export function getISTTimeWithAMPM(utcTime) {
  const date = new Date(utcTime);

  // Convert to IST (UTC +5:30)
  const ISTOffset = 5 * 60 + 30; // 5 hours 30 minutes in minutes
  const localDate = new Date(date.getTime() + ISTOffset * 60 * 1000);

  // Extract hours, minutes, and determine AM/PM
  let hours = localDate.getUTCHours();
  const minutes = localDate.getUTCMinutes();
  const isAM = hours < 12;
  const amPm = isAM ? "AM" : "PM";

  // Convert to 12-hour format
  hours = hours % 12 || 12; // Convert 0 hour to 12 for 12 AM

  // Format minutes with leading zero
  const formattedMinutes = minutes.toString().padStart(2, "0");

  // Return the formatted time in IST (Indian Standard Time)
  return `${hours}:${formattedMinutes} ${amPm}`;
}

export function formatISOToReadable(isoString) {
  const date = new Date(isoString);

  // Convert to IST (UTC +5:30)
  const ISTOffset = 5 * 60 + 30; // 5 hours 30 minutes in minutes
  const localDate = new Date(date.getTime() + ISTOffset * 60 * 1000);

  // Extract hours, minutes, and determine AM/PM
  let hours = localDate.getUTCHours();
  const minutes = localDate.getUTCMinutes();
  const isAM = hours < 12;
  const amPm = isAM ? "AM" : "PM";

  // Convert to 12-hour format
  hours = hours % 12 || 12; // Convert 0 hour to 12 for 12 AM

  // Format minutes with leading zero
  const formattedMinutes = minutes.toString().padStart(2, "0");

  // Get day and month
  const day = localDate.getUTCDate();
  const month = localDate.toLocaleString("default", {
    month: "short",
    timeZone: "UTC",
  }); // "Jan", "Feb", etc.

  // Format final output as "HH:MM AM/PM, DDth Month"
  return `${hours}:${formattedMinutes} ${amPm}, ${day}${getOrdinalSuffix(
    day
  )} ${month}`;
}

// Helper function to get ordinal suffix for day
function getOrdinalSuffix(day) {
  if (day > 3 && day < 21) return "th"; // Covers cases like 11th, 12th, 13th
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
export function convertToISOWithIST(dateString, timeString) {
  // Combine date and time into a single string
  const fullDateString = `${dateString} ${timeString} +05:30`;

  // Create a new Date object, accounting for IST (UTC+5:30)
  const date = new Date(fullDateString);

  // Convert the date to ISO format (it will include the timezone)
  return date.toISOString();
}

export function getDateAndMonth(dateString) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(dateString); // Convert the string to a Date object
  const day = date.getDate(); // Get the day (24 in your case)
  const month = months[date.getMonth()]; // Get the month name (October in your case)

  return `${day} ${month}`; // Return formatted as "24 October"
}

export const isEmpty = (value) => {
  if (typeof value === "number" && value !== 0) {
    return false;
  }
  return (
    value === null ||
    value === "" ||
    value === undefined ||
    value === 0 ||
    value?.length === 0 ||
    isEmptyObj(value)
  );
};

export const FilterImagesAndVideos = ({ filesArray, setImages, setVideos }) => {
  Object.values(filesArray).forEach((item) => {
    if (item.type.toLowerCase().includes("video")) {
      setVideos((prev) => (!isEmpty(prev) ? [...prev, item] : [item]));
    }
    if (item.type.toLowerCase().includes("image")) {
      setImages((prev) => (!isEmpty(prev) ? [...prev, item] : [item]));
    }
  });
};

export const downloadPdfDocument = (rootElementId, fileName) => {
  const input = document.getElementById(rootElementId);
  window.scrollTo(0, 0);
  html2canvas(input, {
    scrollX: -window.scrollX,
    scrollY: -window.scrollY,
    windowWidth: document.documentElement.offsetWidth,
    windowHeight: document.documentElement.offsetHeight,
  }).then((canvas) => {
    const imgWidth = 208;
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;
    heightLeft -= pageHeight;
    const doc = new jsPDF("p", "mm");
    doc.addImage(canvas, "PNG", 0, position, imgWidth, imgHeight, "", "FAST");
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      doc.addPage();
      doc.addImage(canvas, "PNG", 0, position, imgWidth, imgHeight, "", "FAST");
      heightLeft -= pageHeight;
    }
    doc.save(`${fileName}.pdf`);
  });
};
export const extractISOString = (string) => {
  const d = new Date(string?.slice(0, -1));
  const [day, month, date, year, time] = [
    d.getDay(),
    d.getMonth(),
    d.getDate(),
    d.getFullYear(),
    d.getTime(),
  ];

  return {
    day,
    month,
    date,
    year,
    time,
    formatted: d,
  };
};

// blog reading time
export function readingTime(text) {
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wpm);
}

// date format
export function makeDateFormat(timestamp) {
  const date = new Date(timestamp);
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear()
  );
}

// get video duration
export function getVideoDuration(useRef) {
  const video = useRef.current;
  if (!video) return;
  return Math.ceil(secToMinConvert(video.duration));
}

// sec to min convert
export function secToMinConvert(sec) {
  return (1 / 60) * sec;
}

export const ReadMoreComponent = ({
  text,
  percentOfLessShow = 50,
  className = "",
  toggleClass,
}) => {
  const [show, setShow] = useState(false);
  const lengthOfText = text?.length;
  const lessShowCharactersCount = Math.round(
    (lengthOfText * percentOfLessShow) / 100
  );

  return (
    <>
      <div className={className}>
        <p>
          {" "}
          {show ? text : text.slice(0, lessShowCharactersCount)}{" "}
          <span className={toggleClass} onClick={() => setShow(!show)}>
            {show ? "Read Less" : "Read More"}
          </span>{" "}
        </p>
      </div>
    </>
  );
};

export const isJsonParsable = (string) => {
  if (isEmpty(string)) {
    return false;
  } else {
    try {
      JSON.parse(string);
      return true;
    } catch (err) {
      return false;
    }
  }
};
