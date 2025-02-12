import { useSelector, useDispatch } from "react-redux";
import { removeMovie } from "../movieSlice";

export const MovieList = () => {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();

  const handleRemoveMovie = (id) => {
    dispatch(removeMovie(id));
  };
  return (
    <div className="flex bg-blue-100 justify-center flex-col">
      <h1 className="text-xl font-medium tracking-wide">Movie List</h1>
      {movies.map((movie) => (
        <div key={movie.id} className="p-4 flex justify-evenly">
          <span className="w-auto text-lg font-medium tracking-wider capitalize">{movie.name}</span>
          <button className="cursor-pointer transition-all tracking-wider text-sm px-2 py-1 rounded border-b-[4px] font-mono font-bold shadow-inner bg-red-600 text-white border-red-700 active:border-b-[2px] active:translate-y-[2px]" onClick={() => handleRemoveMovie(movie.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
