import React,{ Component } from 'react';
import ReactDOM from 'react-dom/client'
  
class Index extends Component {
  render () {
    return (
      <p>Index Page</p>
    )
  }
}
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);