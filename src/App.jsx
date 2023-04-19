import Navbar from "./app_components/navbar";
import InfoCard from "./app_components/info-card";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container pt-4">
        <h2>Kansas City District</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="row">
          <div className="col">
            <InfoCard
              theme="primary"
              headText="BBQ"
              cardTitle="Best BBQ Around"
              cardText="Come to KC for good smoked meats..."
            />
          </div>
          <div className="col">
            <InfoCard
              theme="info"
              headText="Baseball"
              cardTitle="Mabye ok this year"
              cardText="See the Royals play"
            />
          </div>
          <div className="col">
            <InfoCard
              theme="warning"
              headText="Weather"
              cardTitle="It's Nice sometimes"
              cardText="Watch out for thunderstorms tomorrow night"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
