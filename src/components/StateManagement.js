import React, { useState } from "react";

const StateSection = () => {
  const [count, setCount] = useState(0);
  const [{count1, count2}, setCounts] = useState({
    count1: 10,
    count2: 20
  });
  return (
    <div>
      <p onClick={() => setCount( (val) => val + 1)}>Click me to increment: {count}</p>
      {/* <p onClick={() => setCounts({count1: count1+1, count2: count2} )}>Inc</p> */}
      <p onClick={() => setCounts((val1) => ({...val1, count1: val1.count1 + 1}) )}>Click me to increment count1</p>
      <p>counts {count1}</p>
      <p onClick={() => console.log('count 2 is clicked')}>count2 {count2}</p>
    </div>
  );
};

export default StateSection;