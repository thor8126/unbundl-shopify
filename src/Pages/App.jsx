import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Home from "./Home";
import CheckoutPage from "../components/CheckoutPage";
import Cart from "./Cart";
import Profile from "../components/Profile";
import Empty from "./Empty";

export default function App() {
  const { isAuthenticated, user ,isLoading,error} = useAuth0();

  const [theme, setTheme] = useState("dark");

  const [chocolates, setChocolates] = useState([
    { id: 1, name: 'Milk Chocolate', price: 2.5, image:'https://images.unsplash.com/photo-1623660053975-cf75a8be0908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hvY29sYXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
    { id: 2, name: 'Dark Chocolate', price: 3.0, image:'https://images.unsplash.com/photo-1575377427642-087cf684f29d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' },
    { id: 3, name: 'White Chocolate', price: 2.75, image:'https://images.unsplash.com/photo-1548907040-4baa42d10919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBjaG9jb2xhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
    { id: 4, name: 'Hazelnut Chocolate', price: 3.25 , image:'https://images.unsplash.com/photo-1660318508650-395e67bb323f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGF6ZWxudXQlMjBjaG9jb2xhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'},
    { id: 5, name: 'Caramel Chocolate', price: 3.0 , image:'https://images.unsplash.com/photo-1511938842055-c59f750525b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyYW1lbCUyMGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'},
    { id: 6, name: 'Mint Chocolate', price: 3.25 , image:'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWludCUyMGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'},
    { id: 7, name: 'Peanut Butter Chocolate', price: 3.25 , image:'https://images.unsplash.com/photo-1615110250484-e8c3b151b957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVhbnV0JTIwYnV0dGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'},
    { id: 8, name: 'Bournville', price: 9.25, image:'https://m.media-amazon.com/images/I/61QOsReWpqL._AC_UF1000,1000_QL80_.jpg' },
    { id: 9, name: 'Lindt Lindor', price: 1.25, image:'https://sugermint.com/wp-content/uploads/2022/04/Lindt-Lindor-Milk-Truffles-Chocolate.jpg' },
    { id: 10, name: 'Hersheys', price: 5.25, image:'https://sugermint.com/wp-content/uploads/2022/04/Hersheys-Creamy-Milk-Chocolate-Bar.jpg' },
    { id: 11, name: 'Cadbury Temptation Rum and Raisin', price: 6.0, image:'https://sugermint.com/wp-content/uploads/2022/04/Cadbury-Temptation-Rum-and-Raisin-Chocolate.jpg' },
    { id: 12, name: 'Hersheys Kisses', price: 9.99, image:'https://sugermint.com/wp-content/uploads/2022/04/Kisses-Hersheys-Cookies-n-Creme-Almonds-Milk-Chocolate.jpg' },

  ]);
  console.log(setChocolates)


  const [selectedChocolates, setSelectedChocolates] = useState([]);

  const handleSelect = (chocolate) => {
    // Add logic to prevent selecting more than 8 chocolates
    if (selectedChocolates.length < 8) {
      const existingItem = selectedChocolates.find((item) => item.chocolate.id === chocolate.id);
      if (existingItem) {
        // Increment quantity if chocolate is already selected
        const updatedSelectedChocolates = selectedChocolates.map((item) =>
          item.chocolate.id === chocolate.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setSelectedChocolates(updatedSelectedChocolates);
      } else {
        // Add the chocolate to selectedChocolates
        setSelectedChocolates([...selectedChocolates, { chocolate, quantity: 1 }]);
      }
    }
  };

  const handleRemove = (chocolateToRemove) => {
    const updatedSelectedChocolates = selectedChocolates.filter(
      (item) => item.chocolate.id !== chocolateToRemove.id
    );
    setSelectedChocolates(updatedSelectedChocolates);
  };

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  // Calculate the total price and total items
  const total = selectedChocolates.reduce(
    (sum, item) => sum + item.chocolate.price * item.quantity,
    0
  );


  const totalItems = selectedChocolates.reduce((sum, item) => sum + item.quantity, 0);



  return (
    <>
      {isLoading && <Loader />}

      {!isLoading && <Navbar user={user} theme={theme} setTheme={setTheme} total={total} totalItems={totalItems} selectedChocolates={selectedChocolates}/>}
      
      <div className="px-24">
        {!isLoading && (
          <Routes>
            <Route exact path="/" element={isAuthenticated ? <Home total={total} user={user} selectedChocolates={selectedChocolates} totalItems={totalItems} chocolates={chocolates} handleSelect={handleSelect} handleRemove={handleRemove} /> : <Empty/>} />
            <Route
              exact
              path="/cart"
              element={isAuthenticated && <Cart user={user} selectedChocolates={selectedChocolates} setSelectedChocolates={setSelectedChocolates}/>}
            />
            <Route
              exact
              path="/profile"
              element={isAuthenticated && <Profile user={user} />}
            />
            <Route
              exact
              path="/checkout"
              element={isAuthenticated && <CheckoutPage user={user} />}
            />
          </Routes>
        )}
      </div>
    </>
  );
}
