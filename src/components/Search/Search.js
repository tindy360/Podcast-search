import React from 'react';
import Loading from '../Loading/Loading';
import Results from '../results/Results';
import Header from '../Header/Header';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { Form } from 'reactstrap';
import { getPodcasts } from '../../actions/index';
import Snackbar from 'material-ui/Snackbar';
import './Search.css';

const Search = ({ typeOfSearch, sendSearch, loadingNow, showSnackBar, snackBarMessage }) => (
  <div>
    <Header />
    <Form
      onSubmit={e => {
        e.preventDefault();
        let selectedValue = e.target.search.value;
        selectedValue = selectedValue.split(' ').join('+');
        sendSearch(selectedValue);
        e.target.search.value = 'enter new search term';
      }}
    >
      <TextField
        className="search"
        style={{ postion: 'absolute', left: '550px', color: '#fff' }}
        inputStyle={{ color: 'white' }}
        name="search"
        hintText="Enter Search Term"
        hintStyle={{ color: 'white' }}
      />
    </Form>
    {loadingNow ? <Loading /> : <Results />}
    <Snackbar
          open={showSnackBar}
          message={snackBarMessage}
          autoHideDuration={2000}

        />
  </div>
);
const mapDispatchToProps = dispatch => ({
  sendSearch: selectedValue => dispatch(getPodcasts(selectedValue))
});

const mapStateToProps = state => ({
  loadingNow: state.Loading,
  showSnackBar: state.open,
  snackBarMessage: state.message
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
