import {React,useState,useEffect} from 'react'
const Saved = () => {
//   const [items,setItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('saved'));
    console.log(data);
    if (data) {
     setItems(data);
    }
  }, []);

  return (
    <h1>hello</h1>
  )
}

export default Saved