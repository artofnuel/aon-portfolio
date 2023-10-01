import { BounceLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="text-7xl font-bold w-full h-[80vh] flex justify-center items-center">
      <BounceLoader color="#0D0C0C" />
    </div>
  );
};

export default Loading;
