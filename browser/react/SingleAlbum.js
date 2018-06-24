import React, { Component } from "react";

export default class SingleAlbum extends Component {
  render() {
    const album = this.props.album;

    return (
      <div className="album col-xs-10">
        <div>
          <h3>{album.name}</h3>
          <img src={album.imageUrl} className="img-thumbnail" />
        </div>
        <table className="table">
          <thead>
            <tr>
              <th />
              <th>Name</th>
              <th>Artists</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {album.songs
              ? album.songs.map(song => {
                console.log('--- song:', song);
                return (
                  <tr key={song.id}>
                    <td>
                      <button className="btn btn-default btn-xs">
                        <span className="glyphicon glyphicon-play" />
                      </button>
                    </td>
                    <td>{song.name}</td>
                    <td>{song.artists.map(artist => <ls key={artist.id}>{artist.name}</ls>)}</td>
                    <td>{song.genre}</td>
                  </tr>
                );
              })
              : null}
          </tbody>
        </table>
      </div>
    );
  }
}
