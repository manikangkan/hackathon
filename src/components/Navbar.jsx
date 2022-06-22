import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white-900/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4">
        <Link to="/hackathon">
          <h4>😃</h4>
        </Link>
        <Link to="/hackathon/admin">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQG0VbBdTFMVfA/profile-displayphoto-shrink_400_400/0/1624563649042?e=1661385600&v=beta&t=q0RsT5MBuXdX0T8cIU1UDCSpqulEi1Fw3ONiFsRTFVg"
            alt="profile image"
            className="h-8 aspect-square rounded-full cursor-pointer"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
