import React from 'react'
// import { useState } from 'react'
// import Data from './DataContext'
// import EditPg from './EditPg'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

const Student = () => {
// const [show,setShow] = useState(false)

// function changeHandler(){
//     setShow(false)
// }
// const addStudent = () =>{
//     setShow(true)
// }


  return (
    <div>
        <NavBar/>
        <div className='std-title'>
            <span className='stud'>Students Details</span>
            <button className='add-student'>
                <Link to="/addnewstudent" className='addLink'>Add New Student</Link>
            </button>
        </div>
        <div>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Changes</th>
                </thead>
                <tr>
                    <td>Ashish Yadav</td>
                    <td>24</td>
                    <td>MERN</td>
                    <td>October</td>
                    <td><Link to={'/edit'}>Edit</Link> </td>
                </tr>
                <tr>
                    <td>Ashish Yadav</td>
                    <td>24</td>
                    <td>MERN</td>
                    <td>October</td>
                    <td><Link to={'/edit'}>Edit</Link> </td>
                </tr>
                <tr>
                    <td>Ashish Yadav</td>
                    <td>24</td>
                    <td>MERN</td>
                    <td>October</td>
                    <td><Link to={'/edit'}>Edit</Link> </td>
                </tr>
                <tr>
                    <td>Ashish Yadav</td>
                    <td>24</td>
                    <td>MERN</td>
                    <td>October</td>
                    <td><Link to={'/edit'}>Edit</Link> </td>
                </tr>
                <tr>
                    <td>Ashish Yadav</td>
                    <td>24</td>
                    <td>MERN</td>
                    <td>October</td>
                    <td><Link to={'/edit'}>Edit</Link> </td>
                </tr>
                <tr>
                    <td>Ashish Yadav</td>
                    <td>24</td>
                    <td>MERN</td>
                    <td>October</td>
                    <td><Link to={'/edit'}>Edit</Link> </td>
                </tr>
                <tr>
                    <td>Ashish Yadav</td>
                    <td>24</td>
                    <td>MERN</td>
                    <td>October</td>
                    <td><Link to={'/edit'}>Edit</Link> </td>
                </tr>
            </table>
        </div>
    </div>
  )
}


export default Student