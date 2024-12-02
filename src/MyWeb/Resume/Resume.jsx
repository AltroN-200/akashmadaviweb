import React from 'react'
import './Resume.css'

export default function Resume() {
  return (
    <>
      <div className='detail'>
        <h3>Personal Details</h3>
        <div className='d-info'>
          <h6>Name <span> : Akash Madavi</span></h6>
          <h6>Father Name <span>: Shankar Madavi</span></h6>
          <h6>Date of Birth <span> : 18/03/2001</span> </h6>
          <h6>Gender <span> : Male</span></h6>
          <h6>Marital Status <span> : Unmarried</span></h6>
          <h6>Nationality <span> : Indian</span></h6>
          <h6>Language <span> : English, Hindi</span></h6>
          <h6>Email I'd <span> : akashmadavi2001@gmail.com</span></h6>
          <h6>Contact No <span> : 9021232883</span></h6>
        </div>
      </div>
      <div className='education'>
        <h3>Educational Qualification</h3>
        <div className='ed-table'>
          <table>
            <tbody>
              <tr>
                <th>Educational details</th>
                <th>Board/University</th>
                <th>Passing year</th>
                <th>Percentage</th>
              </tr>
              <tr>
                <td>SSC</td>
                <td>Nagpur Divisional Board</td>
                <td>MAR - 2017</td>
                <td>56.00 %</td>
              </tr>
              <tr>
                <td>HSC</td>
                <td>Nagpur Divisional Board</td>
                <td>MAR - 2019</td>
                <td>52.22 %</td>
              </tr>
              <tr>
                <td>Poly - ME</td>
                <td>MSBTE - Nagpur</td>
                <td>JUN - 2021</td>
                <td>78.86 %</td>
              </tr>
              <tr>
                <td>BCA</td>
                <td>RTMNU</td>
                <td>JUN - 2024</td>
                <td>78.33 %</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='declare'>
          <h4>Work Exprience</h4>
          <h5>Fresher</h5>
        </div>
      </div>
    </>
  )
}
