import React from "react";
import Image from "next/image";
import profile from "./profile.jpg"; // Adjust the path as necessary

function Jumbotron() {
  return (
    <div className="">
      <div class="h-screen grid grid-cols-2 gap-4">
        <span className="flex items-center justify-left text-pink-700 text-2xl font-bold">
          <div>Jumbotron</div>
        </span>

        <div className="flex items-center justify-center">
          <Image
            className="inline-block h-100 w-100  "
            src={profile}
            alt="vishwanath"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
