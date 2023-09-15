import { BounceLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="text-7xl font-bold w-full h-[80vh] flex justify-center items-center">
      <BounceLoader color="#1d1c1c" />
    </div>
  );
};

export default loading;
