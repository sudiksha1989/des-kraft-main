import logo from './logo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <div className="footer">
        <p className="App-link">Work is in progress...</p>
        <div className="heading">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="content">
          <div className="details">
            <div>
              <h4>Social</h4>
              <p>
                <a href="https://www.instagram.com/des.kraft/?utm_medium=copy_link"
                ><i className="fab fa-instagram"></i> Instagram</a
                >
              </p>
            </div>
            <div>
              <h4 className="address">Address</h4>
              <p>
                S - 428, Greater Kailash - 1,
                New Delhi - 110048
              </p>
            </div>
            <div>
              <h4 className="mobile">Mobile</h4>
              <p><a href="#">+91 11-4775-6642</a></p>
            </div>
            <div>
              <h4 className="mail">Email</h4>
              <p><a href="#">info@des-kraft.com</a></p>
            </div>
          </div>
        </div>
        <footer>
          <hr />
          &copy; 2021 Des-Kraft.
        </footer>
      </div>
    </div>
  );
}

export default App;
