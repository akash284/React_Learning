import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx'


function Myapp(){
  return (<div>
    <h1>chai weaves</h1>
  </div>);
}

const anotherUser = 'akash sharma'
const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google',
  anotherUser
)

const anotherElement = (
  <a href='https://google.com' target='_blank'>visit google</a>
)


ReactDOM.createRoot(document.getElementById('root')).render(

  // anotherElement
    //  reactElement
    // Myapp()
    // <Myapp/>
    // <App/>
    reactElement

)
