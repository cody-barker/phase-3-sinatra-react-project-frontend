import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header>Crop Tracker</header>
      <h3>Farm Name and Location</h3>
      <table>
        <tr>
          <th>Bed id</th>
          <th>In Use</th>
          <th>Crop</th>
          <th>DTM</th>
          <th>Planting Date</th>
          <th>Harvest Date</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Yes</td>
          <td>Radishes</td>
          <td>29</td>
          <td>04-01-23</td>
          <td>4-30-23</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
