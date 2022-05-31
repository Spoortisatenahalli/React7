import React, { useContext } from 'react'
import { store } from './Detail'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const AddStudent = () => {

  const [Name, setName] = useState("")

  const [Age, setAge] = useState("")


  const [Course, setCourse] = useState("")


  const [Batch, setBatch] = useState("")

  const [students, setStudents] = useContext(store)


  const ChangeHandler1 = (e) => {
    setName(e.target.value)

  }
  const ChangeHandler2 = (e) => {
    setAge(e.target.value)

  }
  const ChangeHandler3 = (e) => {
    setCourse(e.target.value)

  }
  const ChangeHandler4 = (e) => {
    setBatch(e.target.value)

  }

  const SubmitHandler = () => {


    setStudents([...students, { Name: Name, Age: Age, Course: Course, Batch: Batch, id: new Date().getTime().toString() }])


  }
  return (
    <div>

      <center style={{ marginTop: "50px" }}>
        <div>

          <label style={{ marginRight: "11px" }}><b> Name : </b></label>
          <input id="name" type="text" name='name' value={Name} onChange={ChangeHandler1} style={{ marginRight: "50px" }} />
          <label style={{ marginRight: "11px" }}><b> Age : </b></label>
          <input id="age" type="text" name='age' value={Age} onChange={ChangeHandler2} />
          <br></br>
          <br></br>
          <label style={{ marginRight: "11px" }}><b> Course : </b></label>
          <input id="course" type="text" name='course' value={Course} onChange={ChangeHandler3} style={{ marginRight: "50px" }} />
          <label style={{ marginRight: "11px" }}><b> Batch : </b></label>
          <input id="batch" type="text" name='batch' value={Batch} onChange={ChangeHandler4} />

        </div>

        <div style={{ marginTop: "10px" }}>


          <Link to="/student" onClick={SubmitHandler}><button className='btn btn-success'>Submit</button></Link>
          <Link to="/student" style={{ marginLeft: "50px" }}><button className='btn btn-danger'>Cancel</button></Link>


        </div>

      </center>

    </div>
  )
}

export default AddStudent