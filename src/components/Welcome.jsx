import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-start p-6">
      <div className="w-full max-w-md mx-auto mt-16">
        <h1 className="text-[28px] font-bold text-gray-900 mb-2">
          Welcome to PopX
        </h1>
        <p className="text-gray-500 text-base mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="space-y-4 w-full">
          <button
            onClick={() => navigate("/signup")}
            className="w-full bg-[#6C25FF] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#5820CC] transition-colors"
          >
            Create Account
          </button>
          <button
            onClick={() => navigate("/signin")}
            className="w-full bg-[#EFE5FF] text-[#6C25FF] py-3 px-4 rounded-lg font-medium hover:bg-[#E5D9FF] transition-colors"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
