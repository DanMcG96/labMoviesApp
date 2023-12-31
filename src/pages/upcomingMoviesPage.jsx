import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import MustWatchIcon from "../components/cardIcons/mustWatch";

const UpcomingMoviesPage = () => {
  const { data, error, isLoading, isError } = useQuery("movies", getUpcomingMovies);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data ? data.results : [];

  // Redundant, but necessary to avoid app crashing.
  const favourites = movies.filter((m) => m.favorite);
  localStorage.setItem("favourites", JSON.stringify(favourites));
  const addToFavourites = (movieId) => true;

  return (
    <PageTemplate
      title="Coming Soon"
      movies={movies}
      action={(movies) => {
        return <MustWatchIcon movie={movies} />
      }}
    />
  );
};
export default UpcomingMoviesPage;