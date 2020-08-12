import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

const Header = ({text}) => <h1 id='hi'>{text}</h1>;

const Element = <p>Paragraph</p>;

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Header text={'property text'}/>
        {Element}
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
