import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App mt-5 w-50 mx-auto">
      <h3 className='text-center mb-3'>Login Form</h3>
      <div className="login_form border-1 ">
          <div className='form-group mb-3'>
              <input type="text" name="login" className="form-control" />
          </div>
          <div className='form-group mb-3'>
              <input type="text" name="password" className="form-control" />
          </div>
          <button type='submit' className='btn btn-primary'>Submit</button>
      </div>
    </div>
  );
}

export default App;
