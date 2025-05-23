import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/students/Loading";

const MyCourses = () => {
  const { currency, allCourses } = useContext(AppContext);
  const [courses, setCourses] = useState(null);

  const fetchEducatorCourse = async () => {
    setCourses(allCourses);
  };

  useEffect(() => {
    fetchEducatorCourse();
  }, []);

  return courses ? (
    <div className="h-screen flex flex-col items-start justify-between md:pb-0 md:p-8 p-4 pt-8 pb-0 ">
      <div className="w-full">
        <h1 className="pb-4 text-lg font-medium">My Courses</h1>

        <div>
          <table className="md:table-auto table-fixed w-full overflow-hidden">
            <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left">
              <tr>
                <th className="px-4 py-3 font-semibold truncate">
                  All Courses
                </th>
                <th className="px-4 py-3 font-semibold truncate">Earnings</th>
                <th className="px-4 py-3 font-semibold truncate">Students</th>
                <th className="px-4 py-3 font-semibold truncate">
                  Published On
                </th>
              </tr>
            </thead>

            <tbody className="text-sm text-gray-500">
              {courses.map((course) => (
                <tr key={courses._id} className="border-b border-gray-500/20 ">
                  <td className="md:px-14 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                    <img src={course.courseThumbnail} className="w-16" alt="" />
                    <span className="truncate hidden md:block">
                      {course.courseTitle}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {currency}{" "}
                    {Math.floor(
                      course.enrolledStudents.length *
                        (course.coursePrice -
                          (course.discount * course.coursePrice) / 100)
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {course.enrolledStudents.length}
                  </td>
                  <td className="px-4 py-3">
                    {new Date(course.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default MyCourses;
