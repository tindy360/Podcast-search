import React from 'react';
import { FormGroup, Form, Label, Input, Button} from 'reactstrap';
import './Search.css';

const Search = () => (
 <div>
   <Form>
     <FormGroup>
            <Label for="Select">Pick A Search Type</Label>
            <Input type="select" name="select" id="Selctor">
              <option>Artist</option>
              <option>Genre</option>
              <option>Title</option>
              <option>Keywords</option>
            </Input>
    </FormGroup>
    <FormGroup>
          <Label for="Search Feild">Search</Label>
          <Input type="search" name="search" id="search"></Input>
          <Button color="primary">Search</Button>
    </FormGroup>
   </Form>
 </div>
)

export default Search
