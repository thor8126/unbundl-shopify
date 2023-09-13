

const ChocolateList = ({ chocolates, onSelect, selectedChocolates }) => {
  const totalItems = selectedChocolates.reduce((sum, item) => sum + item.quantity, 0);
  

  return (
    <div>
      <h2 className="text-xl font-semibold">Available Chocolates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {chocolates.map((chocolate) => {
          const isChocolateSelected = selectedChocolates.some(
            (item) => item.chocolate.id === chocolate.id
          );

          return (
            <div
              key={chocolate.id}
              className="border border-gray-300 rounded-md p-4 shadow-md transition duration-300 transform hover:scale-105"
            >
              <div className="mb-2">
                <div
                  style={{
                    width: '200px', // Adjust the desired width
                    height: '200px', // Adjust the desired height
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={chocolate.image} // Replace with the image URL for the chocolate
                    alt={chocolate.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold">{chocolate.name}</h3>
              <p className="text-sm ">Price: <span className="text-white">${chocolate.price}</span></p>
              <button
                onClick={() => onSelect(chocolate)}
                disabled={
                  totalItems >= 8 || (isChocolateSelected && chocolate.selectedQuantity >= 8)
                }
                className={`${
                  totalItems >= 8 || (isChocolateSelected && chocolate.selectedQuantity >= 8)
                    ? 'btn btn-neutral cursor-not-allowed w-full'
                    : 'btn btn-primary w-full'
                } text-white font-bold py-2 px-4 mt-2 rounded`}
              >
                Add
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChocolateList;
