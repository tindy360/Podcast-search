import React from 'react'
import { connect } from 'react-redux'
import {GridList, GridTile} from 'material-ui/GridList'
import Subheader from 'material-ui/Subheader'
import IconButton from 'material-ui/IconButton'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'
import './Results.css'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};


const Results = ({data}) => {
console.log(data);
  return(
    <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
      cols={6}
    >
      <Subheader>podcasts</Subheader>
      {data.map((tile, i) => (
        <GridTile
          key={i}
          title={tile.trackName}
          subtitle={<span>by <b>{tile.artistName}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          cols={2}
        >
          <img src={tile.artworkUrl600} />
        </GridTile>
      ))}
    </GridList>
  </div>
  )
}



const mapStateToProps = (state) => ({
  data: state.podcasts
})

export default connect(mapStateToProps)(Results)
