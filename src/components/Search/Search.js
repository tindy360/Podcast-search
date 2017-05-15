import React from 'react'
import Loading from '../Loading/Loading'
import Results from '../Results/Results'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import {  Form, Label, Input, Button } from 'reactstrap'
import { getPodcasts } from '../../actions/index'
import './Search.css'

const Search = ({typeOfSearch, sendSearch, loadingNow}) => (
  <div>
     <Form onSubmit={(e)=>{
         e.preventDefault()
         let selectedValue =  e.target.search.value
          selectedValue = selectedValue.split(' ').join('+')
           console.log(selectedValue)


         sendSearch(selectedValue)
       }}>
          <TextField name="search" hintText="Hint Text"  /><br />
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
