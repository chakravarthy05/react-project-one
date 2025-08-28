import 'bootstrap/dist/css/bootstrap.min.css';

function MapTable() {
  var employeeList = [
    { id: 101, name: "Anil", salary: 50000 },
    { id: 102, name: "Sunil", salary: 60000 },
    { id: 103, name: "Kiran", salary: 70000},
  ];
  return (
    <>
      <h3 className='text-primary' >Employee List</h3>
      <table className='table table-bordered' >
        <thead className='bg-dark text-white' >
          <tr>
            <th>Emp ID</th>
            <th>Emp Name</th>
            <th>Emp Salary</th>
          </tr>
        </thead>
        <tbody>
          {
            employeeList.map( (emp) => 
              <tr key={emp.id} >
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.salary}</td>
              </tr>  
            )
          }
        </tbody>
      </table>
    </>
  );
}

export default MapTable;