import { useState } from "react";
import { addMovie } from "../movieSlice";
import { useDispatch } from "react-redux";

export const MovieInput = () => {
  const [newMovie, setNewMovie] = useState("");
  const dispatch = useDispatch();

  const handleAddMovie = () => {
    if (newMovie) {
      dispatch(addMovie(newMovie));
      setNewMovie("");
    }
  };

  return (
    <div className="flex justify-center items-center space-x-4">
      <input type="text" className="py-2 rounded"  onChange={(e) => setNewMovie(e.target.value)} value={newMovie} required/>
      <button  className="cursor-pointer transition-all tracking-wider text-sm px-2 py-1 rounded border-b-[4px] font-mono font-bold shadow-inner bg-green-600 text-white border-green-700 active:border-b-[2px] active:translate-y-[2px]" onClick={handleAddMovie} disabled= {!newMovie}> Add Movie</button>
    </div>
  );
};
