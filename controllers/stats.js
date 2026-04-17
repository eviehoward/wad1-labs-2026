"use strict";
import logger from "../utils/logger.js";
import playlistStore from "../models/playlist-store.js";

const stats = {
  createView(request, response) {
    logger.info("Stats page loading!");

    // app statistics calculations
    const playlists = playlistStore.getAllPlaylists();

    let numPlaylists = playlists.length;

    let numSongs = playlists.reduce((total, playlist) => total + playlist.songs.length, 0);

    let average = numPlaylists > 0 ? (numSongs / numPlaylists).toFixed(2) : 0;

    let totalRating = playlists.reduce((total, playlist) => total + parseInt(playlist.rating), 0);
    let avgRating = numPlaylists > 0 ? totalRating / numPlaylists : 0;

    let mapped = playlists.map((playlist) => playlist.rating);
    console.log(mapped);
    let maxRating = Math.max(...mapped);
    let maxRated = playlists.filter((playlist) => playlist.rating === maxRating);
    let favTitles = maxRated.map((item) => item.title);

    // exercise
    let mappedLength = playlists.map((playlist) => playlist.songs.length);
    console.log(mappedLength);
    let maxLength = Math.max(...mappedLength);
    console.log(maxLength);
    let maxLengthName = playlists.filter((playlist) => playlist.songs.length === maxLength);
    console.log(maxLengthName);
    let maxLengthTitles = maxLengthName.map((item) => item.title);
    console.log(maxLengthTitles);

    const statistics = {
      displayNumPlaylists: numPlaylists,
      displayNumSongs: numSongs,
      displayAverage: average,
      displayAvgRating: avgRating.toFixed(2),
      highest: maxRating,
      displayFav: favTitles,
      longest: maxLength,
      displayLongest: maxLengthTitles
    };

    const viewData = {
      title: "Playlist App Statistics",
      stats: statistics
    };

    response.render("stats", viewData);
  }
};

export default stats;
