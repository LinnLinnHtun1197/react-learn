import React, { createRef, useState } from "react";
// import Item from './Item';

// class Item extends React.Component {
//   render() {
//     return <li>
//       {this.props.name} 
//        ${this.props.price}
//       </li>
//   }
// }

// class AddForm extends React.Component {
//   nameRef = React.createRef();
//   priceRef = React.createRef();

//   add = () => {
//     let name = this.nameRef.current.value;
//     let price = this.priceRef.current.value;

//     this.props.add(name, price);
//   }

//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.nameRef} /><br />
//         <input type="text" ref={this.priceRef} /><br />
//         <button onClick={this.add}>Add</button>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   state = {
//     items: [
//         { id: 1, name: 'Apple', price: 0.99 },
//         { id: 2, name: 'Orange', price: 0.89 },
//       ]
//   };

//     add = (name, price) => {
//       let id = this.state.items.length + 1;

//       this.setState({
//         items: [
//           ...this.state.items,
//           { id, name, price }
//         ]
//       });
//     }
    
//     render() {
//       return (
//         <div>
//           <h1>Hello React</h1>
//           <ul>
//             {this.state.items.map(i => {
//               return (
//                 <Item
//                 key={i.id}
//                 name={i.name}
//                 price={i.price}
//                 />
//               )
//             })}
//           </ul>
//           <AddForm add={this.add} />
//         </div>
//       )
//     }
// }

const Item = ({name, price}) => (
  <li>{name}, ${price}</li>
);

const App = props => {
  let [items, setItems] = useState([
    {id: 1, name: 'Apple', price: 0.99},
    {id: 2, name: 'Orange', price: 0.89}

  ]);

  let nameRef = createRef();
  let priceRef = createRef();

  let add = () => {
    let id = items.length + 1;
    let name = nameRef.current.value;
    let price = priceRef.current.value;

    setItems([
      ...items,
      {id, name, price}
    ]);
  }

  return (
    <div>
      <ul>
        {items.map(i => <Item key={i.id} name={i.name} price={i.price} />)}
      </ul>
      <input type="text" ref={nameRef} /> <br />
      <input type="text" ref={priceRef} /> <br />
      <button onClick={add}>Add</button>
    </div>
  )
}

export default App