function AccountSettings() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b border-gray-200 shadow-sm">
        <h1 className="text-xl font-medium text-gray-800">Account Settings</h1>
      </div>

      <div className="bg-white mt-2">
        <div className="p-6">
          <div className="flex items-start space-x-4">
            <div className="relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvl-3s27sN3QHbWiuRzijVHVJRcZevBK56VQ&s"
                alt="Marry Doe"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#6C25FF] rounded-full border-2 border-white"></div>
            </div>

            <div>
              <h2 className="text-gray-900 font-medium text-lg">Marry Doe</h2>
              <p className="text-gray-600 text-sm">Marry@Gmail.Com</p>
            </div>
          </div>

          <p className="text-gray-500 mt-6 text-sm leading-relaxed">
            Lorem ipsum Dolor Sit Amet, Consetetür Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;
