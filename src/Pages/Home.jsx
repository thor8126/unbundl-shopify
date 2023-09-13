import ChocolateList from "../components/ChocolateList";
import SelectedChocolates from "../components/SelectedChocolates";

function Home(props) {
  const { total, selectedChocolates, totalItems, chocolates, handleSelect, handleRemove } = props;

  return (
    <>
      <div className="container mx-auto my-8 border-gray-700 rounded-2xl p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* <Item />
          <Item />
          <Item /> */}

          {/* Chocolate List */}
          <div className="sm:col-span-2 md:col-span-2">
            <h1 className="text-3xl font-bold mb-4">Custom Chocolate Pack</h1>
            <ChocolateList chocolates={chocolates} onSelect={handleSelect} selectedChocolates={selectedChocolates} />
          </div>

          {/* Selected Chocolates and Totals */}
          <div className="sm:col-span-1 md:col-span-1">
            <div className="sticky top-[4rem]">
              <SelectedChocolates selectedChocolates={selectedChocolates} onRemove={handleRemove} />
              <p className="text-xl font-semibold mt-4">Total Items: {totalItems}</p>
              <p className="text-xl font-semibold">Total Price: ${total.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
