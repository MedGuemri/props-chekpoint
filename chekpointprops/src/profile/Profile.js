import React from 'react'
import PropTypes from "prop-types";




function Profile(props) {
   function  handleName (){
        
        alert(props.fullName)}
        const { age = "28" } = props;
        
  return (
    <div>
        <div>{props.children}</div>
        <h1 style={{color : "red"}}>{props.fullName}</h1>
        <h2>{age}</h2>
        <h2>{props.bio}</h2>
        <h3>{props.profession}</h3>
       <button  onClick={handleName}> click me</button>
    </div>
  )
 
  }
  Profile.propTypes={
    fullName : PropTypes.string,
    profession : PropTypes.bool,

  }
export default Profile