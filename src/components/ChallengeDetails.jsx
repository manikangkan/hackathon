import { useParams } from "react-router-dom";
import { items } from "../utils/items";

const ChallengeDetails = () => {
  const { id } = useParams();
  console.log(items[id]);
  return (
    <section className="flex flex-col h-screen">
      <header className="max-w-6xl w-full mx-auto py-16 space-y-16">
        <button className="bg-yellow-300 text-custom-light">
          Starts on 17th Jun'22 09:00 PM (India Standard Time)
        </button>
        <div className="space-y-8">
          <h1 className="text-white">{items[id].title}</h1>
          <p className="text-white">
            Identify the class to which each butterfly belongs to
          </p>
        </div>
        <button className="bg-white">Easy</button>
      </header>
      <div className="bg-white flex-1">
        <div className="max-w-6xl mx-auto space-y-4 py-4">
          <nav className="flex items-center justify-between">
            <h4>Overview</h4>
            <div className="space-x-4">
              <button className="text-white bg-custom-light">Edit</button>
              <button className="text-red-800 bg-red-100">Delete</button>
            </div>
          </nav>
          <p>
            Butterflies are the adult flying stage of certain insects belonging
            to an order or group called Lepidoptera. The word "Lepidoptera"
            means "scaly wings" in Greek. This name perfectly suits the insects
            in this group because their wings are covered with thousands of tiny
            scales overlapping in rows. An agency of the Governmental Wildlife
            Conservation is planning to implement an automated system based on
            computer vision so that it can identify butterflies based on
            captured images. As a consultant for this project, you are
            responsible for developing an efficient model. Your Task is to build
            an Image Classification Model using CNN that classifies to which
            class of weather each image belongs to.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChallengeDetails;
