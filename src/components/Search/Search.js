import React from 'react';
import Loading from '../Loading/Loading';
import Results from '../results/Results';
import { connect } from 'react-redux';
import {  Form, Label, Input, Button} from 'reactstrap';
import { getPodcasts } from '../../actions/index'
import './Search.css';

const Search = ({typeOfSearch, searchRequest, sendSearch, loadingNow}) => (
  <div>
     <Form onSubmit={(e)=>{
         e.preventDefault();
         let selectedValue = ''
         if(e.target.select.value === 'Author'){
           selectedValue = `authorTerm`
           console.log(selectedValue)
         }
         if(e.target.select.value === 'Genre'){
           selectedValue = `genreIndex`
         }
         if(e.target.select.value === 'Title'){
           selectedValue = `titleTerm`
         }
         if(e.target.select.value === 'Keywords'){
           selectedValue = `keywordsTerm`
         }
         let searchValue = e.target.search.value
         searchValue = searchValue.split(' ').join('+')
         console.log(searchValue)

       }}>
       <Label for="Select">Pick A Search Type</Label>
          <Input type="select" name="select" id="Selctor">
            <option>Author</option>
            <option>Genre</option>
            <option>Title</option>
            <option>Keywords</option>
          </Input>
          <Input type="text" name="search" id="searchBox"></Input>
          <Button color="sucess" type="submit">Search</Button>
     </Form>

      {this.props.loadingNow ? <Loading /> : <Results/>}

   </div>
)
const mapDispatchToProps = (dispatch) => ({
  sendSearch: (selectedValue, searchValue) => dispatch(getPodcasts(selectedValue, searchValue)),
  loadPodcast: () => dispatch()
});

const mapStateToProps = (state) => ({
  loadingNow: state.Loading
})


export default connect(mapStateToProps, mapDispatchToProps)(Search)
