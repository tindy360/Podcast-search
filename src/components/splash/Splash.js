import React from 'react'
import './Splash.css'
import RaisedButton from 'material-ui/RaisedButton'


const Splash = () => (
<div>
    <div className='wrapper'>
    <h1 className='title' >Podcast Search</h1>
      <p className='paragraph' >A simple web app for searching the iTunes podcast database</p>
    <RaisedButton className='button' label="Search" style={{color:'grey', position:'relative', left:'45%',top:'300px'}} href='/search' />
    </div>
</div>

)


export default Splash
