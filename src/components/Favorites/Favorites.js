import React from 'react';
import { connect } from 'react-redux';
import { GridList, GridTile } from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import Header from '../Header/Header';
import { deleteFavorite } from '../../actions';

const Favorites = ({ favorites, deleteFav }) => {
  return (
    <div>
      <Header />
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
          {favorites.map((tile, i) => (
            <GridTile
              key={i}
              title={tile.artistName}
              subtitle={<span>by <b>{tile.trackName}</b></span>}
              cols={2}
              actionIcon={
                <div>
                <FlatButton
                  label='Listen'
                  labelStyle={{ color: '#FFF' }}
                  href={tile.trackViewUrl}
                />
                <FlatButton
                  label='delete'
                  labelStyle={{ color: '#FFF' }}
                  onClick={()=>deleteFav(tile.trackId)}
                 />
                </div>
              }
            >
              <img src={tile.artworkUrl600} alt={'none'} />

            </GridTile>
          ))}
        </GridList>

      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  favorites: state.favorites
});
const mapDispatchToProps = dispatch => ({
  deleteFav: (trackId) => dispatch(deleteFavorite(trackId))
})
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
