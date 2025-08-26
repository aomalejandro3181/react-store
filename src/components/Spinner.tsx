import { LoaderCircle } from "lucide-react";

const Spinner = () => {
  return (
    <>
      <div className="flex justify-center p-24">
        <LoaderCircle
          className="animate-spin text-purple-500"
          width={40}
          height={40}
        />
      </div>
    </>
  );
};

export default Spinner;
