// import { useState, useEffect } from 'react';

import Header from './header';
import ContestList from './contest-list';

// Example of State and Dependency Array with a counter
// const App = () => {
//     const [counter, setCounter] = useState(0);

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             console.log({ counter });
//         }, 1000);
        
//         return () => {
//             clearInterval(intervalId);
//         };
//     }, [counter]);

//     return (
//     <div className='container'>
//         <Header message="Hello, World!"/>
//         <button onClick={() => {
//             setCounter(counter + 1);
//         }}>{counter}</button>
//     </div>
//     );
// };

const App = ({ initialData }) => {  
    console.log({initialData});
    return (        
        <div className='container'>
            <Header message="Hello, World!" />

            <ContestList initialContests={initialData.contests} />            
        </div>
    );
};

export default App;