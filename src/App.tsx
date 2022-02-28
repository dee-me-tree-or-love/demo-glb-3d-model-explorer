import "./styles.css";

import { Explorer } from "./ui/pages/Explorer";

/**
 * Purpose of this app is to demonstrate an idea
 * for the component structure in a 3D viewer
 * application.
 *
 * Much can be improved but its
 * purpose is to give a quick illustration :v:
 */
export default function App() {
  return (
    <div className="App">
      <h1>
        Hello everyone{" "}
        <span role="img" aria-label="handwave">
          👋
        </span>
      </h1>
      <hr />
      {/* Pages declaration */}
      <Explorer />
    </div>
  );
}
