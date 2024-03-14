import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmaarks from "./components/Bookmarks/Bookmaarks";
import Header from "./components/Header/Header";

function App() {

  const [bookMarks, setBookMarks] = useState([])
  const handleBookMark = (blog)=>{
   const newBookMarks = [...bookMarks, blog]
   setBookMarks(newBookMarks)
  }

  return (
    <>
      <div className="max-w-screen-xl mx-auto mb-12 ">
      <Header></Header>
      <div className="md:flex ">
        <Blogs handleBookMark={handleBookMark}></Blogs>
        <Bookmaarks bookMarks={bookMarks}></Bookmaarks>
      </div>
      </div>
    </>
  );
}

export default App;
