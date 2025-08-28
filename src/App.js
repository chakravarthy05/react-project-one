import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from '../src/logo.svg';

function App() {
  // let expression = 5;
  // let x = 10;
  // let y = 5;
  var employeeList = [
    { id: 101, name: "Anil", salary: 50000 },
    { id: 102, name: "Sunil", salary: 60000 },
    { id: 103, name: "Kiran", salary: 70000},
  ];
  return (
    <>
      {/* <h6 className='formcontrol' >Hello World </h6>
      <form>
        <h3>Form Satrt</h3>
        <div className='row' >
          <div className='col-6'>
            <p className='text-info'>Employee name</p>
            <input type="text" className='form-control' placeholder='Enter Name' />
          </div>
          <div className='col-6'>
             <p className='text-muted'>Email</p>
            <input type="email" className='form-control' placeholder='Enter Name' />
          </div>
        </div>
        <br />
        <input type="email" placeholder='Enter Email' />
        <br />
        <input type="password" placeholder='Enter Password' />
        <br />
        <input type="number" placeholder='Enter Mobile Number' />
        <br />
        <input type="date" placeholder='Enter Date' />
        <br />
        <input type="time" placeholder='Enter Time' />
        <br />
        <input type="color" placeholder='Select Color' />
        <input type="file" placeholder='Upload File' />
        <input type="checkbox" />
        <label>Accept Terms and Conditions</label>
        <input type="radio" name="metro" />
      </form> 
      <h3>ReactJS:</h3>
      <img src={logo} width="120" height="120" alt='' />
      <p>
        {" "}
        React is a JavaScript library for creating User Interfaces, open sourced
        to the world by Facebook and Instagram team in 2013.
        <br />
        React’s main goal is to make development of UI components easy and
        modular. It is intended to ease the process of building
        <br /> large applications using data that changes over time.
      </p>*/}
      
      {/* <h6> { expression } </h6>
      <h6>Mulitiple = { expression * expression } </h6>
      <h6>Addition = { expression + expression } </h6>
      <h6>Subtraction = { expression - expression } </h6>
      <h6>Division = { expression / expression } </h6>
      <h6>Modulus = { expression % expression } </h6>
      <h6>Increment = { expression++ } </h6>
      <h6>Decrement = { expression-- } </h6> */}
      {/* // Evsaluation Expression
      <span> Evaluation expression</span> <br/><hr/> 
      <span>&nbsp;&nbsp;&nbsp; {x} {">"} {y} {":"} {x>y ? "True" : "False"} </span> */}

      <table className='table table-bordered table-striped'>
        <thead className='bg-dark text-white text-center'>
          <tr>
            <th>Emp ID</th>
            <th>Emp Name</th>
            <th>Emp Salary</th>
          </tr>
        </thead>
        <tbody>
          {
            employeeList.map( (emp) => (
              <tr key={emp.id} >
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.salary}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </>
  );
}

export default App;
