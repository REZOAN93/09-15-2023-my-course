import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import Swal from "sweetalert2";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [enrolls, setEnroll] = useState([]);
  const [creditTotal, setCredits] = useState(0);
  const [remainingTotal, setRemainingCredit] = useState(0);
  const [amount, setTotalAmount] = useState(0);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleEnrollCourse = (data) => {
    const isExist = enrolls.find((na) => na.id == data.id);

    let totalCredit = data.credit;
    let totalAmount = data.price;
    if (isExist) {
      const alertMessage = Swal.fire("Already Enrolled");
      return alertMessage;
    } else {
      {
        enrolls.forEach((na) => {
          totalCredit = na.credit + totalCredit;
          totalAmount = na.price + totalAmount;
        });
      }
    }

    const remainingCredit = 20 - totalCredit;

    if (totalCredit > 20) {
      const alertMessage = Swal.fire(
        "You don't have the enough credit to buy new Course"
      );
      return alertMessage;
    } else {
      setTotalAmount(totalAmount);
      setRemainingCredit(remainingCredit);
      setCredits(totalCredit);
      const remaining = [...enrolls, data];
      setEnroll(remaining);
      if (remainingCredit < 0) {
        const alertMessage = Swal.fire(
          "The Remaining Credit cann't be less then zero"
        );
        return alertMessage;
      }
    }
  };

  return (
    <div>
      <div className="mb-10 lg:flex pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-9/12 w-10/12 mb-9 lg:mb-0 mx-auto md:w-9/12">
          {courses.map((cu) => (
            <Course
              key={cu.id}
              course={cu}
              handleEnrollCourse={handleEnrollCourse}
            ></Course>
          ))}
        </div>
        <div className="w-full md:w-full lg:w-3/12 ">
          <div className="bg-white rounded-lg mx-3 p-5">
            <div className="space-y-3">
              <h1 style={{ color: "#2F80ED" }} className="text-lg font-bold">
                Credit Hour Remaining {remainingTotal} hr
              </h1>
              <hr />
            </div>

            <div>
              <h1 className="text-xl font-bold mt-2 mb-1">Course Name</h1>
              <div
                style={{ color: "rgba(28, 27, 27, 0.60)" }}
                className="pb-4 text-base font-normal"
              >
                {enrolls.map((na) => (
                  <li key={na.id} className="list-decimal">
                    {na.course_name}
                  </li>
                ))}
              </div>
            </div>
            <div
              style={{ color: "rgba(28, 27, 27, 0.80)" }}
              className="space-y-3 text-base "
            >
              <hr />
              <h1 className="font-medium">Total Credit Hour : {creditTotal}</h1>
              <hr />
              <h1 className="font-semibold">Total Price : {amount} USD</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
