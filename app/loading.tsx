"use client";
import React, { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";

const loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);
  return (
    <>
      {loading === true ? (
        <div className="text-7xl font-bold w-full h-[80vh] flex justify-center items-center">
          <BounceLoader color="#1d1c1c" />
        </div>
      ) : null}
    </>
  );
};

export default loading;
