import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    password: "",
    companyName: "",
    isAgency: "Yes",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case "fullName":
        return value.trim() ? "" : "Full Name is required";
      case "phoneNumber":
        return /^\d{10}$/.test(value)
          ? ""
          : "Please enter a valid 10-digit phone number";
      case "emailAddress":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Please enter a valid email address";
      case "password":
        return value.length >= 6
          ? ""
          : "Password must be at least 6 characters";
      case "companyName":
        return value.trim() ? "" : "Company name is required";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "radio" ? e.target.id : value,
    }));

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (key !== "isAgency") {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Pass user data through navigation state
      navigate("/settings", {
        state: {
          name: formData.fullName,
          email: formData.emailAddress,
        },
      });
    }
  };

  const inputClasses = (fieldName) => `
    w-full px-4 py-3 mt-1 border rounded-lg transition-colors
    ${
      errors[fieldName] && touched[fieldName]
        ? "border-red-500"
        : "border-gray-300"
    }
    focus:outline-none focus:border-[#6C25FF] focus:ring-1 focus:ring-[#6C25FF]
  `;

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-md mx-auto mt-8">
        <h1 className="text-[28px] font-bold text-gray-900 mb-6">
          Create your PopX account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#6C25FF]">
              Full Name*
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Marry Doe"
              className={inputClasses("fullName")}
            />
            {errors.fullName && touched.fullName && (
              <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#6C25FF]">
              Phone number*
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Marry Doe"
              className={inputClasses("phoneNumber")}
            />
            {errors.phoneNumber && touched.phoneNumber && (
              <p className="mt-1 text-xs text-red-500">{errors.phoneNumber}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#6C25FF]">
              Email address*
            </label>
            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Marry Doe"
              className={inputClasses("emailAddress")}
            />
            {errors.emailAddress && touched.emailAddress && (
              <p className="mt-1 text-xs text-red-500">{errors.emailAddress}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#6C25FF]">
              Password*
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Marry Doe"
              className={inputClasses("password")}
            />
            {errors.password && touched.password && (
              <p className="mt-1 text-xs text-red-500">{errors.password}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#6C25FF]">
              Company name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Marry Doe"
              className={inputClasses("companyName")}
            />
            {errors.companyName && touched.companyName && (
              <p className="mt-1 text-xs text-red-500">{errors.companyName}</p>
            )}
          </div>

          <div className="mt-6">
            <p className="block text-sm font-medium text-[#6C25FF] mb-2">
              Are you an Agency?*
            </p>
            <div className="flex space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isAgency"
                  id="Yes"
                  checked={formData.isAgency === "Yes"}
                  onChange={handleChange}
                  className="w-4 h-4 text-[#6C25FF] border-gray-300 focus:ring-[#6C25FF]"
                />
                <span className="ml-2 text-gray-700">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isAgency"
                  id="No"
                  checked={formData.isAgency === "No"}
                  onChange={handleChange}
                  className="w-4 h-4 text-[#6C25FF] border-gray-300 focus:ring-[#6C25FF]"
                />
                <span className="ml-2 text-gray-700">No</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-8 px-4 py-3 bg-[#6C25FF] text-white font-medium rounded-lg hover:bg-[#5820CC] transition-colors"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
