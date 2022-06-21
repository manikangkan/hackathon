import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <section className="flex items-center justify-between h-2/3 max-w-6xl mx-auto py-32">
      <div className="space-y-16 w-2/3">
        <div className="space-y-8">
          <h1>Accelerate Innovation with Global AI Challenges</h1>
          <p className="text-white">
            AI Challenges at DPhi simulate real-world problems. It is a great
            place to put your AI/Data Science skills to test on diverse datasets
            allowing you to foster learning through competitions.
          </p>
        </div>
        <button
          className="bg-white text-custom-light font-bold"
          onClick={() => navigate("/admin")}>
          Create challenge
        </button>
      </div>
      <img
        src="https://ouch-cdn2.icons8.com/5hgYphpyfhQusEBTflC_CH8_LOTVEVDtrN5YtAQ165Y/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNzUw/LzlkZGM3OWNmLTZi/OWQtNGJmNy04MzNm/LTQyZWM5MmFkOTI4/Zi5zdmc.png"
        alt="header image"
        className="w-1/3"
      />
    </section>
  );
};

export default Header;
