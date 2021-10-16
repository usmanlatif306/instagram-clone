import { useEffect, useState } from "react";
import faker from "faker";

function Suggestions() {
  const [suggestions, setsuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(6)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setsuggestions(suggestions);
  }, []);
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>

      {suggestions.map((item) => (
        <div key={item.id} className="flex item-center justify-between mt-3">
          <img
            src={item.avatar}
            alt=""
            className="w-10 h-10 rounded-full border p-[2px]"
          />

          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{item.username}</h2>
            <h3 className="text-sm text-gray-400">
              Works at {item.company.name}
            </h3>
          </div>
          <button className="text-blue-400 text-sm font-bold">Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
