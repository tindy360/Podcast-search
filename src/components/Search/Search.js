import React from 'react'
import Loading from '../Loading/Loading'
import Results from '../Results/Results'
import { connect } from 'react-redux'
import {  Form, Label, Input, Button } from 'reactstrap'
import { getPodcasts } from '../../actions/index'
import './Search.css'

const Search = ({typeOfSearch, sendSearch, loadingNow}) => (
  <div>
     <Form onSubmit={(e)=>{
         e.preventDefault()
         let selectedValue = ''
         if(e.target.select.value === `A search for technology related shows`){
           selectedValue = `https://itunes.apple.com/search?term=technology&country=us&entity=podcast&limit=50`
         }
         if(e.target.select.value === `A search for life hacks`){
           selectedValue = `https://itunes.apple.com/search?term=life+hacks&country=us&entity=podcast&limit=50`
         }
         if(e.target.select.value === `A search for the How Stuff Works podcast`){
           selectedValue = `https://itunes.apple.com/search?term=how+stuff+works&country=us&entity=podcast&limit=50`
         }
         sendSearch(selectedValue)
       }}>
       <Label for="Select">Pick A Search Type</Label>
          <Input type="select" name="select" id="Selctor">
            <option>A search for technology related shows</option>
            <option>A search for life hacks</option>
            <option>A search for the How Stuff Works podcast</option>
          </Input>
          <Button color="sucess" type="submit">Search</Button>

     </Form>
      {loadingNow ? <Loading /> : <Results/>}
   </div>
)
const mapDispatchToProps = (dispatch) => ({
  sendSearch: (selectedValue) => dispatch(getPodcasts(selectedValue)),
});

const mapStateToProps = (state) => ({
  loadingNow: state.Loading
})


export default connect(mapStateToProps, mapDispatchToProps)(Search)
