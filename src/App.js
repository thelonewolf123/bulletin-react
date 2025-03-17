import Bulletin from "./componets/bulletin";
import { Pocketbase } from "pocketbase-react";

import "./styles.css";
import BulletinContainer from "./componets/container";

const SERVER_URL = "https://pocketbase-production-10ed.up.railway.app/";
const COLLECTIONS = ["secrets"];

export default function App() {
  return (
    <Pocketbase serverURL={SERVER_URL} initialCollections={COLLECTIONS}>
      <div className="App">
        <h1>Global bulletin board</h1>
        <h2>Add text you wanna share with the world!</h2>
        <div className="container">
          <BulletinContainer />
        </div>
      </div>
    </Pocketbase>
  );
}
