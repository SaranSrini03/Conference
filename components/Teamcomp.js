import Image from "next/image";
import React from "react";

const Teamcomp = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Faculty Coordinators */}
      <h1 className="text-2xl font-bold mb-4">Faculty Coordinators</h1>
      <div className="flex flex-col items-center mb-8">
        <Image src="/path/to/faculty-image.jpg" alt="Faculty Coordinator Name" width={150} height={150} />
        <h2 className="text-xl font-semibold">Name</h2>
        <p className="text-gray-600">Description of the faculty coordinator.</p>
      </div>

      {/* Student Coordinators */}
      <h1 className="text-2xl font-bold mb-4">Student Coordinators</h1>
      <div className="flex flex-col items-center">
        <Image src="/path/to/student-image.jpg" alt="Student Coordinator Name" width={150} height={150} />
        <h2 className="text-xl font-semibold">Name</h2>
        <p className="text-gray-600">Description of the student coordinator.</p>
      </div>
    </div>
  );
};

export default Teamcomp;
