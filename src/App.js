import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header>Crop Tracker</header>
      <h3>Farm Name and Location <button>Edit</button> </h3>
      
      <table>
        <tr>
          <th>Bed ID</th>
          <th>Sq Ft</th>
          <th>In Use</th>
          <th>Crop</th>
          <th>DTM</th>
          <th>Planting Date</th>
          <th>Harvest Date</th>
          <th>Edit</th>
        </tr>
        <tr>
          <td>1</td>
          <td>60</td>
          <td>Yes</td>
          <td>Radishes</td>
          <td>29</td>
          <td>04-01-23</td>
          <td>4-30-23</td>
          <td><button>X</button></td>
        </tr>
      </table>
    </div>
  );
}

export default App;
