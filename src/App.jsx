import "./App.css";
import { MovieInput } from "./components/MovieInput";
import { MovieList } from "./components/MovieList";

function App() {
  return (
    <div className="bg-slate-100 space-y-5">
      <MovieInput />
      <MovieList />
    </div>
  );
}

export default App;
