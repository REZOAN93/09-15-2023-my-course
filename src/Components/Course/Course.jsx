import { FiDollarSign, FiBookOpen } from "react-icons/fi";
import "./Course.css";

const Course = ({ course, handleEnrollCourse }) => {
  const { course_name, details, duration, credit, price, img } = course;
  return (
    <div>
      <div className="w-full bg-white rounded-lg p-5 space-y-2">
        <div>
          <img src={img} alt="" />
        </div>
        <div className=" space-y-3">
          <h1 style={{ color: "#1C1B1B" }} className=" text-lg font-semibold">
            {course_name}
          </h1>
          <h1
            style={{ color: "rgba(28, 27, 27, 0.60)" }}
            className="text-justify text-sm font-normal sm:h-24 md:h-20 lg:h-20"
          >
            {details}
          </h1>
          <div
            style={{ color: "rgba(28, 27, 27, 0.60)" }}
            className="flex justify-between font-medium text-base"
          >
            <p className="flex items-center gap-2">
              <span style={{ color: "rgba(28, 27, 27, 1)" }}>
                <FiDollarSign></FiDollarSign>
              </span>{" "}
              Price: {price}
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <span style={{ color: "rgba(28, 27, 27, 1)" }}>
                <FiBookOpen></FiBookOpen>
              </span>{" "}
              Credit: {credit}hr
            </p>
          </div>
          <div>
            <button
              onClick={() => handleEnrollCourse(course)}
              id="btnSelect"
              className="btn w-full py-2 rounded-lg text-white font-semibold text-lg"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
