import Navbar from "./app_components/navbar";
import useRouter from "./app_hooks/useRouter";

function App() {
  const [Route, params] = useRouter();

  return (
    <div>
      <Navbar />
      <Route params={params} />
    </div>
  );
}

export default App;
