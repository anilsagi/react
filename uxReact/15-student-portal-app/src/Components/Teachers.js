import React from 'react';
import { Component } from 'react';
import '../App.css';
import TextField from '@material-ui/core/TextField';
import { IconButton, Link } from '@material-ui/core';
// import PresentToAllOutlinedIcon from '@material-ui/icons/PresentToAllOutlined';
import KeyboardArrowUpSharpIcon from '@material-ui/icons/KeyboardArrowUpSharp';


class Teachers extends Component {
  constructor() {
    super();
    this.state = {
      filter:'',
      datasearch:false,
      teacherData : [
        {
          facultyName: 'Anil',
          // employeeID :123,
          department:'Civil Engineering',
          mailid:'mail2anilsagi@teacher.com'
        },{
          facultyName: 'Chandini',
          // employeeID :234,
          department:'Civil Engineering',
          mailid:'chandhinitwo@teacher.com'
        },{
          facultyName: 'Ms Sunita',
          // employeeID :345,
          department:'Mechanical Engineering',
          mailid:'d345three@teacher.com'
        },{
          facultyName: 'Mr Pruthvi',
          // employeeID :567,
          department:'Information technology',
          mailid:'e567four@teacher.com'
        },{
          facultyName: 'yamuna',
          // employeeID :789,
          department:'Computer Sceince and Engieering',
          mailid:'f789five@teacher.com'
        },{
          facultyName: 'sandhya',
          // employeeID :890,
          department:'Computer Sceince and Engieering',
          mailid:'g890six@teacher.com'
        },{
          facultyName: 'Mr Praveen Reddy',
          // employeeID :890,
          department:'Computer Sceince and Engieering',
          mailid:'g890seven@teacher.com'
        },{
          facultyName: 'Gopi krishna',
          // employeeID :890,
          department:'Computer Sceince Engieering',
          mailid:'krishna@teacher.com'
        },{
          facultyName: 'Prasanth kumar',
          // employeeID :890,
          department:'Bio Medical',
          mailid:'g890nine@teacher.com'
        },{
          facultyName: 'Mr Anirudh',
          // employeeID :890,
          department:'Information Technology',
          mailid:'Anirudh@teacher.com'
        },{
          facultyName: 'yaswanth',
          // employeeID :890,
          department:'Electrical and Electronics Engieering',
          mailid:'g890eleven@teacher.com'
        },{
          facultyName: 'Ms Jnanasundari',
          // employeeID :890,
          department:'Electrical and Electronics Engieering',
          mailid:'sundarieleven@teacher.com'
        },{
          facultyName: 'Ms. Urvashi',
          // employeeID :890,
          department:'Information Technology',
          mailid:'g890eleven@teacher.com'
        },{
          facultyName: 'Ms. Ratna',
          // employeeID :890,
          department:'Information Technology',
          mailid:'Ratna0eleven@teacher.com'
        },{
          facultyName: 'Ms Bhragavi',
          // employeeID :890,
          department:'Information Technology',
          mailid:'Bhragavi@teacher.com'
        },{
          facultyName: 'Ms. Eswari Rama',
          // employeeID :890,
          department:'Information Technology',
          mailid:'ramaswari0eleven@teacher.com'
        },{
          facultyName: 'Ms.Seshu bhargava',
          // employeeID :890,
          department:'Information Technology',
          mailid:'bhargavaeleven@teacher.com'
        }
      ]
    }
  }
  searchTxt(e) {
    this.setState( {filter:e.target.value,datasearch:true})
  }
  onClick =() =>{
    this.props.history.push('https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin');
  }
  
  handleClick=()=>{
    window[`scrollTo`]({top:0,behavior:`smooth`})
  }
    render() {
      const{filter,teacherData} = this.state;
      const Datasearch = teacherData.filter(item => {
        return Object.keys(item).some(key => 
          item[key].toLowerCase().includes(filter.toLowerCase()))
      });
      console.log(Datasearch,'datasearch')
        return (
            <div>
            <h2 style={{textAlign:'center', color:'green'}}>Welcome to Teachers Contact</h2>
                       
            <div style={{ marginLeft:'260px', color:'green'}}>SEARCH FIELD:<input style = {{lineHeight:'30px'}} className = 'searchBox' label="Type Keyword .." value = {filter} onChange={this.searchTxt.bind(this)} placeholder="Search Keyword here.." /> </div>        
           {Datasearch.length!=0?
            <div><table className = 'facultyTable' border= '1'>
            <tr>
              <th>S.no</th>
              <th>Department</th>
              <th>Name of faculty</th>
              <th>Contact Email-id</th>
              <th>Remarks</th>
            </tr>
            {
              (Datasearch.map((item,index) =>
                <tr>
                <td>{index+1}</td>
                <td>{item.department}</td>
                <td>{item.facultyName}</td>
                <td><Link onClick ={() => window.open(`mailto:${item.mailid}`)}> {item.mailid}</Link></td>
                <td>{item.null}</td>
                </tr>
                ))
            }
          </table></div>:<span className="spanText">No data found</span>}
                <br/>
                <br/>
                <IconButton className = 'top-arrow-last' onClick={this.handleClick}><KeyboardArrowUpSharpIcon style = {{fontSize: '3.5rem'}} className = 'top-arrow-last'/></IconButton>
                <hr/>            
          <p style={{display:'inline', marginLeft:'92px',position:'sticky'}}>Copyright @2021 GIET Auntonomus Engineering college | Allrights reserved |Site best viewed at 1024 x 768 resolution in I.E 10+, Mozilla 40+, Google Chrome 50+</p>
          </div>
          
        )
      }}
export default Teachers;
