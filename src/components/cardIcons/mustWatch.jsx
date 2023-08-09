import React from "react";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { MoviesContext } from "../../contexts/moviesContext";

const MustWatchIcon = ({ movie }) => {
  return (
    <PlaylistAddIcon color="primary" fontSize="large" />
  );
};

export default  MustWatchIcon;