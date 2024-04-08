import { useState } from "react";


function App() {
  const [hoverStar,setHoverStar]=useState(null);
  const [stars,setStars]=useState(0);
  const [totalStar,setTotalStar]=useState(5);

  return (
    <>
    {[...Array(totalStar)].map((star,i)=>{
      const currentStar=i+1;
      return(
        <label key={currentStar}>
        <input type="radio" name="rating"
              style={{display:"none"}}
              value={currentStar  } onChange={()=>setStars(currentStar)}/>
        <span
              className="star"
              style={{
                color:  
                currentStar  <= (hoverStar || stars) ? "#ffc107" : "#e4e5e9",
              }}
              onMouseEnter={() => setHoverStar(currentStar)}
              onMouseLeave={() => setHoverStar(null)}
            >
            &#x2605;
            </span>
        </label>
      )
    })}
      <p>
        Current {stars}
        
      </p>
      <p>
      HowerStar{hoverStar}
      </p>
      <input value={totalStar} type="number" onChange={(e)=>setTotalStar(parseInt(e.target.value))} min={1}/>
    </>
  )
}

export default App
