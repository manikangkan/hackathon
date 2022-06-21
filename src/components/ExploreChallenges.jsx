import ExploreChallengesCard from "./ExploreChallengesCard";
import { items } from "../utils/items";
import { useState } from "react";

const checkboxItems = ["easy", "medium", "hard"];

const ExploreChallenges = () => {
  const [searchItem, setSearchItem] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  console.log("searchItem", searchItem);

  const handleChange = (e) => setSearchItem(e.target.value);

  const filteredItems = items.filter((item) => {
    return item.title.includes(searchItem) || item.type.includes(searchItem);
  });
  console.log(filteredItems);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchItem("");
  };

  return (
    <section className="bg-custom-light">
      <form
        className="bg-custom-dark py-16 mx-auto space-y-8"
        onSubmit={handleSubmit}>
        <h2 className="text-white">Explore challenges👨🏻‍💻</h2>
        <div className="flex items-center justify-center space-x-2">
          <input
            type="text"
            value={searchItem}
            onChange={handleChange}
            placeholder="🍳 Search"
            className="bg-white border-none outline-none px-6 py-3 text-sm rounded-sm max-w-2xl w-full"
          />
          <div className="relative">
            <button
              type="submit"
              className="bg-white text-custom-dark"
              onClick={(e) => setIsOpen(!isOpen)}>
              Filter
            </button>
            {isOpen && (
              <div className="absolute bg-white p-4 rounded-sm mt-2 flex flex-col">
                {checkboxItems.map((item) => (
                  <div className="flex items-center space-x-2">
                    <input
                      id={item}
                      type="checkbox"
                      checked={isChecked}
                      onChange={(e) => {
                        setIsChecked(!isChecked);
                        !isChecked ? setSearchItem(item) : setSearchItem("");
                      }}
                    />
                    <label htmlFor={item}>{item}</label>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </form>
      <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto py-16">
        {filteredItems.length ? (
          filteredItems.map((item) => (
            <ExploreChallengesCard item={item} key={item.id} />
          ))
        ) : (
          <h2 className="col-span-3 text-white">
            Please try another search...
          </h2>
        )}
      </div>
    </section>
  );
};

export default ExploreChallenges;
