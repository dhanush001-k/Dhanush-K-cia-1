// import './App.css';
// import './Dropdown.css'
// import Dropdown from './Dropdown';
// function App() {
//     var options = [
//         { 
//             'label': 'Lime', 
//             'value': 'lime' 
//         },
//         { 
//             'label': 'Lavender', 
//             'value': 'lavender' 
//         },
//         { 
//             'label': 'Crimson', 
//             'value': 'crimson' 
//         },
//         { 
//             'label': 'Darkblue', 
//             'value': 'darkblue' 
//         },
//         { 
//             'label': 'Teal', 
//             'value': 'teal' 
//         },
//         { 
//             'label': 'Rebecca Purple', 
//             'value': 'rebeccapurple' 
//         },
//         { 
//             'label': 'Ghost White', 
//             'value': 'ghostwhite' 
//         },
//         { 
//             'label': 'Aqua Marine', 
//             'value': 'aquamarine' 
//         },
//         { 
//             'label': 'Grey', 
//             'value': 'grey' 
//         }
//     ];
//     return (
//         <div className="App">
//             <h1 className='app-title'>DROPDOWN COLOR</h1>
//             <Dropdown options={options} />
            
//         </div>
//     );
// }

// export default App;


import Form from './Dropbox'
import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <Form></Form>
      </div>
    )
  }
}

export default App