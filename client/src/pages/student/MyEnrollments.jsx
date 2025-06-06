import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Line } from "rc-progress";
import Footer from "../../components/students/Footer";


const MyEnrollments = () => {
  const { enrolledCourses, calculateCourseDuration, navigate } =
    useContext(AppContext);

  const [progressArray, setProgressArray] = useState([
    {
      lectureCompleted: 5,
      totalLectures: 10,
    },
    {
      lectureCompleted: 1,
      totalLectures: 5,
    },
    {
      lectureCompleted: 3,
      totalLectures: 5,
    },
    {
      lectureCompleted: 0,
      totalLectures: 3,
    },
    {
      lectureCompleted: 1,
      totalLectures: 4,
    },
    {
      lectureCompleted: 5,
      totalLectures: 10,
    },
    {
      lectureCompleted: 5,
      totalLectures: 5,
    },
    {
      lectureCompleted: 2,
      totalLectures: 6,
    },
    {
      lectureCompleted: 1,
      totalLectures: 5,
    },
    {
      lectureCompleted: 3,
      totalLectures: 5,
    },
    {
      lectureCompleted: 0,
      totalLectures: 3,
    },
    {
      lectureCompleted: 1,
      totalLectures: 4,
    },
    {
      lectureCompleted: 5,
      totalLectures: 10,
    },
    {
      lectureCompleted: 5,
      totalLectures: 10,
    },
  ]);

  return (
    <>
      {" "}
      <div className="px-8 md:px-36 pt-10">
        <h1 className="text-2xl  font-semibold">My Enrollments </h1>

        <table className="md:table-auto table-fixed w-full mt-10 overflow-hidden border border-gray-500/40">
          <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left max-sm:hidden">
            <tr>
              <th className="px-4 py-3 font-semibold truncate">Course</th>
              <th className="px-4 py-3 font-semibold truncate">Duration</th>
              <th className="px-4 py-3 font-semibold truncate">Completed</th>
              <th className="px-4 py-3 font-semibold truncate">Status</th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            {enrolledCourses.map((course, index) => (
              <tr key={index} className="border-b border-gray-500/20">
                <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-4">
                  <img
                    src={course.courseThumbnail}
                    alt=""
                    className="w-14 sm:w-24 md:w-28 "
                  />
                  <div className="flex-1">
                    <p className="mb-1 max-sm:text-sm">{course.courseTitle}</p>

                    <Line
                      strokeWidth={2}
                      percent={
                        progressArray[index]
                          ? (progressArray[index].lectureCompleted /
                              progressArray[index].totalLectures) *
                            100
                          : 0
                      }
                      strokeColor="#2563EB"
                      className="bg-gray-300 rounded-full"
                    />
                  </div>
                </td>

                <td className="px-4 py-3 max-sm:hidden">
                  {calculateCourseDuration(course)}
                </td>

                <td className="px-4 py-3 max-sm:hidden">
                  {progressArray[[index]] &&
                    `${progressArray[index].lectureCompleted} / ${progressArray[index].totalLectures}`}{" "}
                  <span>Lectures</span>
                </td>
                <td className="px-4 py-3 max-sm:text-right">
                  <button
                    onClick={() => navigate("/player/" + course._id )}
                    className="px-3 cursor-pointer sm:px-5 py-1.5 sm:py-2 bg-blue-600 max-sm:text-xs text-white"
                  >
                    {progressArray[[index]] &&
                    progressArray[index].lectureCompleted ===
                      progressArray[index].totalLectures
                      ? "Completed"
                      : "In Progress"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default MyEnrollments;
