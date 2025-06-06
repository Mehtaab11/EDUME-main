import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";

const CoursesSection = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <div className="py-16 px-8 md:px-40">
      <h2 className="text-3xl font-medium text-gray-800">
        Learn from the best
      </h2>

      <p className="text-sm md:text-base mt-3">
        Discover our top rated courses across various categories from coding and
        design to business <br /> and wellness our courses are crafted to
        deliver results
      </p>

      <div className="grid px-4 grid-auto  md:px-0 md:my-16 my-10 gap-4">
        {allCourses.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      <Link
        className="text-gray-500 border border-gray-500/30 px-10 py-3 rounded "
        to={"course-list"}
        onClick={() => scrollTo(0, 0)}
      >
        {" "}
        Show all Courses
      </Link>
    </div>
  );
};

export default CoursesSection;
