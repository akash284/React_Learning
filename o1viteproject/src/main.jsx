import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


function Myapp(){
    return (
       
        <div>
            <h1>hello from myapp!</h1>
        </div>
    );
}
ReactDOM.createRoot(document.getElementById('root')).render(

    <>
    <App/>
    <MyApp />
    </>
 
);



