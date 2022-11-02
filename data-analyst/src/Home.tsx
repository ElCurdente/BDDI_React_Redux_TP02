import { Link } from "react-router-dom";

function Home() {

  const fetchBooks = async () => {
    const response = await fetch("http://localhost:4000", {
      method: "POST", 
      headers: { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({ query: "{ books { title, author, id, rate } }" }) 
    });
    const books = await response.json();
    console.log(books);
  };

  fetchBooks();

  return (
    <div>
      <h1>Home</h1>
      {/* <Link to="/about">About</Link> */}
    </div>
  );
}

export default Home;