export default function Display({ data }) {
  return (
    <div className="flex flex-wrap justify-around items-center mt-2 gap-6">
      {data.map((house) => (
        <div
          key={house.id}
          className="flex-grow h-96 shadow-md mb-5 rounded-md overflow-hidden"
        >
          <img className="w-full h-2/3" src={house.image} alt={house.name} />
          <div className="px-4">
            <h3 className="py-2">
              <span className="text-blue-400 text-2xl font-bold">
                ₹{house.price}
              </span>
              /<span className="text-gray-600">month</span>
            </h3>
            <h3 className="text-xl font-bold py-1">
              House-{house.name} {/*- {house.price}*/}
            </h3>
            <p>{house.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
