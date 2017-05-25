import React from 'react';
import { connect } from 'react-redux';
import { GridList, GridTile } from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import Header from '../Header/Header';

const Favorites = ({ favorites }) => {
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
                <FlatButton
                  label="Listen Here"
                  labelStyle={{ color: '#FFF' }}
                  href={tile.trackViewUrl}
                />
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

export default connect(mapStateToProps)(Favorites);
