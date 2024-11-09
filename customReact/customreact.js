

function customRender(reactElement,container){

    /*
    // dom element

    multiple tags he jese h1,h2,div to hum br-2 to setAttribute krege ni isse better for loop laga lete hein
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    //main container m ye dom element add krdo as a child
    container.appendChild(domElement)
    
    */

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children

    // prop is key 
    for (const prop in reactElement.props) {
        if (prop=== 'children' )continue;
        
        domElement.setAttribute(prop,reactElement.props[prop]) 
        }
    

    container.appendChild(domElement);
}

// react element creation like h1,p tag
const reactElement ={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:"Click me to visit google"

}

// main container like index.html 
  const mainContainer = document.getElementById('root')

  // ye reactElement inject krna maincontainer mein
  customRender(reactElement,mainContainer)