import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { store } from './Detail'

const Student = () => {
  const [student] = useContext(store)
  return (
    <div>
      <br></br>

      <div><Link to="/add-student" style={{ float: 'right' }}> <button className='btn btn-warning'>Add Student</button></Link></div>
      <br></br>
      <br></br>


      <table className="table table-bordered border-primary">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Course</th>
            <th scope="col">Batch</th>
            <th scope="col">Change</th>

          </tr>
        </thead>

        <tbody>
          {student.map((student) => (<tr key={student.id}>

            <td>{student.Name}</td>
            <td>{student.Age}</td>
            <td>{student.Course}</td>
            <td>{student.Batch}</td>
            <td><Link to="/add-student">Edit</Link></td>

          </tr>


          ))}


        </tbody>
      </table>







    </div>
  )
}

export default Student
