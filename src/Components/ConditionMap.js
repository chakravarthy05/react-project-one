// Highlights:
// Usage of map function for looping

// Usage of ternary operator for conditional rendering Eligibility of an employee based on experience.

function App() {
    var employees = [
      { empId: 1234, name: "John", designation: "SE" , exp: 2.5},
      { empId: 4567, name: "Tom", designation: "SSE" , exp: 5.5},
      { empId: 8910, name: "Kevin", designation: "TA", exp: 1.5 },
    ];
    return (
      <>
        <table className='table table-bordered table-striped' >
          <thead className='bg-dark text-white text-center' >
            <tr>
              <th>EmpID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Eligibility</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => {
              return (
                <tr key={employee.empId}>
                  <td>{employee.empId}</td>
                  <td>{employee.name}</td>
                  <td>{employee.designation}</td>
                  <td>{employee.exp>=2.5 ? <h5>Eligible</h5>:<h5>Not Eligible</h5>}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
}

export default App;
