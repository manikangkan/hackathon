import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDateDiff } from "../utils/formatTime";

const ExploreChallengesCard = ({ item }) => {
  const [diff, setDiff] = useState({});

  const status =
    new Date() > new Date(item.startDate) && new Date() < new Date(item.endDate)
      ? "Active"
      : new Date() > new Date(item.endDate) &&
        new Date() > new Date(item.endDate)
      ? "Past"
      : "Upcoming";

  item.status = status;

  useEffect(() => {
    const timer =
      (status === "Upcoming" || status === "Active") &&
      setInterval(() => {
        setDiff(getDateDiff(new Date(), new Date(item.startDate)));
      }, 1000);
    return () => clearInterval(timer);
  }, [item]);

  return (
    <Link to={`/hackathon/details/${item.id}`}>
      <div className="break-inside mb-4 bg-white rounded-sm overflow-hidden hover:rotate-1 text-center">
        <img src={item.image} alt="card header image" />
        <div className="p-8 space-y-4 flex flex-col items-center">
          <h4>{item.title}</h4>
          <p>
            {status === "Upcoming"
              ? "Starts in"
              : status === "Active"
              ? "Ends in"
              : "Ended in"}
          </p>
          {status !== "Past" ? (
            <div className="w-full grid grid-cols-4 divide-x">
              <div>
                <h4>{diff.day}</h4>
                <p>Days</p>
              </div>
              <div>
                <h4>{diff.hour}</h4>
                <p>Hours</p>
              </div>
              <div>
                <h4>{diff.minute}</h4>
                <p>Mins</p>
              </div>
              <div>
                <h4>{diff.second}</h4>
                <p>Mins</p>
              </div>
            </div>
          ) : (
            <h4 className="text-center">{item.endDate}</h4>
          )}
          <div className="space-x-4">
            <button
              className={`${
                status === "Upcoming"
                  ? "text-orange-500 bg-orange-100"
                  : status === "Active"
                  ? "text-custom-green bg-green-100"
                  : "text-red-800 bg-red-100"
              }`}>
              {status}
            </button>
            <button
              disabled={status === "Past"}
              className="text-white bg-custom-green disabled:opacity-50 disabled:cursor-not-allowed">
              Participate now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExploreChallengesCard;
