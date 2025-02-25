const ProfileCard = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-900 text-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto p-6">
      {/* Left Section (Image) */}
      <div className="flex-shrink-0">
        <img
          src="/path-to-your-image.jpg" // Replace with your image path
          alt="Faryal's profile"
          className="rounded-lg w-full lg:w-72 object-cover"
        />
      </div>

      {/* Right Section (Content) */}
      <div className="flex flex-col justify-between lg:ml-6 mt-4 lg:mt-0">
        {/* Introduction */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Hey there! 👋</h1>
          <p className="text-lg">
            I'm Faryal, a passionate Software Engineer focused on building
            scalable systems and user-centered solutions.
          </p>
        </div>

        {/* About Me Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p className="text-base">
            I’m currently a Computer Science student at Toronto Metropolitan
            University, with experience in frontend and backend development. My
            work at Intuit involved crafting reusable components for
            high-traffic platforms, while my projects have focused on delivering
            performance-driven solutions.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Work Experience</h2>
          <ul className="list-disc pl-4 space-y-2">
            <li>
              <strong>Intuit (Jan 2024 - Aug 2024):</strong> Developed scalable
              web components for TurboTax and QuickBooks.
            </li>
            <li>
              <strong>monstrARTity (Oct 2022 - Apr 2024):</strong> Increased web
              traffic by 10,000+ users and reduced page load time by 55%.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
