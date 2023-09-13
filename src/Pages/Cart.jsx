
function Cart(props) {
  const { selectedChocolates, setSelectedChocolates } = props;

  // Function to handle removing an item from the cart
  const removeItem = (id) => {
    const updatedCart = selectedChocolates.map((item) => {
      if (item.chocolate.id === id) {
        const newQuantity = item.quantity - 1;
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setSelectedChocolates(updatedCart.filter((item) => item.quantity > 0));
  };

  // Function to handle adding or increasing the quantity of an item
  // Function to handle adding or increasing the quantity of an item
const addItem = (id) => {
  // Calculate the total quantity of this particular item in the cart
  const itemQuantity = selectedChocolates.find((item) => item.chocolate.id === id)?.quantity || 0;

  // Check if adding one more would exceed the limit of 8
  if (itemQuantity >= 8) {
    return; // Do not add more items if the limit is reached
  }

  const updatedCart = selectedChocolates.map((item) => {
    if (item.chocolate.id === id) {
      // Limit the quantity to not exceed 8
      const newQuantity = item.quantity < 8 - itemQuantity ? item.quantity + 1 : item.quantity;
      return { ...item, quantity: newQuantity };
    }
    return item;
  });
  setSelectedChocolates(updatedCart);
};

  // Calculate subtotal based on selected chocolates
  const subtotal = selectedChocolates.reduce((total, chocolate) => {
    return total + chocolate.chocolate.price * chocolate.quantity;
  }, 0);

  // Calculate the total including shipping and VAT (customize as needed)
  const shippingCost = 4.99; // Shipping cost
  const total = subtotal + shippingCost;

  return (
    <>
      <div className="h-screen bg-gray-100 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            <div className="sm:max-h-96 overflow-y-auto">
              {selectedChocolates.map((selectedChocolate) => (
                <div
                  key={selectedChocolate.chocolate.id}
                  className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                >
                  <img
                    src={selectedChocolate.chocolate.image}
                    alt={selectedChocolate.chocolate.name}
                    className="w-full rounded-lg sm:w-40"
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">
                        {selectedChocolate.chocolate.name}
                      </h2>
                      <p className="mt-1 text-xs text-gray-700">
                        {selectedChocolate.chocolate.size}
                      </p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center border-gray-100">
                        <span
                          onClick={() => removeItem(selectedChocolate.chocolate.id)}
                          className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        >
                          {" "}
                          -{" "}
                        </span>
                        <input
                          className="h-8 w-8 border bg-white text-center text-xs outline-none"
                          type="number"
                          value={selectedChocolate.quantity}
                          min="1"
                        />
                        <span
                          onClick={() => addItem(selectedChocolate.chocolate.id)}
                          className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        >
                          {" "}
                          +{" "}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <p className="text-sm">
                          {selectedChocolate.chocolate.price.toFixed(3)} $
                        </p>
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">${shippingCost.toFixed(2)}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">${total.toFixed(2)} USD</p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
