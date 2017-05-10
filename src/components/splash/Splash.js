import React from 'react';

import { Card, CardTitle, CardText} from 'material-ui/Card'

const styles = {
  test: {
    color: 'red500'
  }
}

const Splash = () => (
  <Card style={styles.test}>
    <CardTitle
      title='Podcast Search'
     />
      <CardText>This applicaton allows you to search the iTunes podcast database as well as open in iTunes to subscibe
      Source code avaialbe via the GitHub button above, Click the Name of the App or the demo button to view a live demo.</CardText>

  </Card>
)


export default Splash
