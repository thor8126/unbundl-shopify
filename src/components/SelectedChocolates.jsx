
const SelectedChocolates = ({ selectedChocolates, onRemove }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Selected Chocolates</h2>
      <ul className="list-disc pl-4">
        {selectedChocolates.map((item) => (
          <li key={item.chocolate.id} className="mt-2 flex justify-between items-center">
            <span className="mr-2">
              {item.chocolate.name} - ${item.chocolate.price} x {item.quantity}
            </span>
            <button
              onClick={() => onRemove(item.chocolate)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedChocolates;
