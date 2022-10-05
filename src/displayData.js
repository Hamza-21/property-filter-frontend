export default function Display({ data }) {
  return (
    <div className="flex flex-wrap justify-around items-center mt-2 gap-6">
      {!data.length && (
        <h1 className="text-4xl py-20 font-bold mx-auto text-center text-gray-600">
          So empty here :(
        </h1>
      )}
      {data.map((house) => (
        <div
          key={house.id}
          className="flex-grow w-96 h-96 shadow-md mb-5 rounded-md overflow-hidden max-w-lg"
        >
          <img className="w-full h-2/3" src={house.image} alt={house.name} />
          <div className="px-4">
            <h3 className="py-2 flex justify-between items-center">
              <span>
                <span className="text-blue-400 text-2xl font-bold">
                  ₹{house.price}
                </span>
                /<span className="text-gray-600">month</span>
              </span>
              <span>
                <span className="text-xs">{house.postedAt}</span>
              </span>
            </h3>
            <h3 className="text-xl font-bold py-1">House-{house.name}</h3>
            <div className="flex justify-between items-center">
              <p>{house.location}</p>
              <p className="text-xs">{house.type}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
