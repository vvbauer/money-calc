import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './normalize.css';
import './style.css';

// const Header = ({text}) => <h1 id='hi'>{text}</h1>;

// const Element = <p>Paragraph</p>;

// class Main extends React.Component {
//   render() {
//     return (
//       <div className="main">
//         <Header text={'property text'}/>
//         {Element}
//       </div>
//     )
//   }
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
