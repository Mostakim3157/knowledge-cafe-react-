import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmaarks from "./components/Bookmarks/Bookmaarks";
import Header from "./components/Header/Header";

function App() {

  const [bookMarks, setBookMarks] = useState([])
  const[readingTime, setReadingTime] = useState(0)


  const handleBookMark = (blog)=>{
   const newBookMarks = [...bookMarks, blog]
   setBookMarks(newBookMarks)
  }


  const handleMarkAsRead = (time)=>{
    const newReadingTime = readingTime + time
    setReadingTime(newReadingTime)
  }

  return (
    <>
      <div className="max-w-screen-xl mx-auto mb-12 ">
      <Header></Header>
      <div className="md:flex ">
        <Blogs handleMarkAsRead={handleMarkAsRead} handleBookMark={handleBookMark}></Blogs>
        <Bookmaarks readingTime={readingTime} bookMarks={bookMarks}></Bookmaarks>
      </div>
      </div>
    </>
  );
}

export default App;
