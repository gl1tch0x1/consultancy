import React, { useEffect, useState } from 'react';
import RouteApp from "./Routing/RouteApp"; 
import Loading from "./components/Loading/Loading"; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <RouteApp />
      )}
    </div>
  );
}

export default App;
