import { useEffect, useState } from "react";

function usePoems(url){

    const [data, setPoems] = useState([]);

    useEffect(() => {
      console.log("useEffect");
      fetch(url)
        .then((r) => r.json())
        .then((data) => {
            setPoems(data);
            console.log("setState");
        });
    }, [url]);
  
    return { data, setPoems};
}
export default usePoems;