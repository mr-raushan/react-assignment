import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign in attempted with:", formData);
    navigate("/settings");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-md mx-auto mt-16">
        <h1 className="text-[28px] font-bold text-gray-900 mb-2">
          Signin to your PopX account
        </h1>
        <p className="text-gray-500 text-base mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#6C25FF]"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#6C25FF] focus:ring-1 focus:ring-[#6C25FF] transition-colors"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#6C25FF]"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#6C25FF] focus:ring-1 focus:ring-[#6C25FF] transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-300 text-white py-3 px-4 rounded-lg font-medium transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
