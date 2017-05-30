import React from 'react';
import { connect } from 'react-redux';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { addFavorite } from '../../actions';

const Results = ({ data, favarray, favorite, showSnackBar }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
      }}
    >
      <GridList
        cellHeight={180}
        style={{
          width: '95%',
          height: '95%',
          overflowY: 'auto'
        }}
        cols={6}
      >

        {data.map((tile, i) => (
          <GridTile
            key={tile.trackId}
            title={tile.trackName}
            subtitle={<span>by <b>{tile.artistName}</b></span>}
            actionIcon={
              <IconButton onClick={() => favorite(tile)}>
                <StarBorder color="white" />
              </IconButton>
            }
            cols={2}
          >
            <img src={tile.artworkUrl600} alt={'none'} />
          </GridTile>
        ))}
      </GridList>

    </div>
  );
};

const mapStateToProps = state => ({
  data: state.podcasts,
  showSnackBar: state.SnackBar,
  favarray: state.favorites
});

const mapDispatchToProps = dispatch => ({
  favorite: tile => dispatch(addFavorite(tile))
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
