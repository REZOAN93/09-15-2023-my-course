import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      <div className="flex">
        <div className="grid grid-cols-3 gap-4 w-9/12 border">
          {courses.map((cu) => (
            <Course key={cu.id} course={cu}></Course>
          ))}
        </div>
        <div className="w-3/12 border">
          <h1>Credit Hour Remaining 7 hr</h1>
          <h1>Course Name</h1>
          <h1>Total Credit Hour : 13</h1>
          <h1>Total Price : 48000 USD</h1>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
