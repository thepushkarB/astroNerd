import { useEffect, useState } from 'react';
import Main from './components/Main';
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { InfoProvider } from './context';

function App() {

  const [showSidebar, setShowSidebar] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    fetchInfo();

    //? since dependecy arr dependency arr is empty, this will run whenever page relaods
  }, []);

  async function fetchInfo() {
    const baseURL = "https://api.nasa.gov/planetary/apod?api_key=";
    const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY;
    // visit: https://api.nasa.gov for API
    
    const info = await fetch(`${baseURL}${NASA_API_KEY}`)
    .then((info) => {
      info = info.json()
      return info
    })
    .then((info) => {
      console.log(info);
      //? update state
      setData(info);
    })
    .catch((err) => {
      console.log("xhud gaye guru: ", err);
    })
  }


  return (
    <InfoProvider value={{showSidebar, setShowSidebar, data, loading}}>

      <Main />

      {/* METHOD i: */}
      {/*
        && (AND) operator: 
        If the left-hand side is false, JavaScript does not check the right-hand side (because false && anything is always false).
          •	If the left-hand side is true, JavaScript returns the right-hand side.
          ----------------------------------------------------------------------------------
        If showSidebar is true, then <Sidebar /> is returned and rendered.
          •	If showSidebar is false, then false is returned, and React ignores it (renders nothing).
          	1.	false && <Sidebar /> → evaluates to false, undefined, null, etc
	          2.	React ignores false values inside JSX.
	          3.	So, nothing is rendered in the UI.
      */}
      {/* {showSidebar && (<Sidebar />)} */}

      {/* METHOD ii: */}
      { 
        showSidebar ? <Sidebar /> : null
      }

      {
        data ? (<Footer />) : null
      }
      
    </InfoProvider>
  )
}

export default App
