import { useState } from "react";

import { ExplorerDataContextProvider } from "../contexts/ExplorerDataContext";
import { ReloadDataButton } from "../buttons/ReloadDataButton";
import { ExplorerLoadingViewer } from "../viewers/ExplorerLoadingViewer";
import { Viewer3D } from "../viewers/Viewer3D";

/**
 * API response explorer page.
 *
 * Loads the API data,
 * displays the info about the loaded models,
 * presents the models in a small 3D stage.
 */
export const Explorer = () => {
  const [reloadCount, setReloadCount] = useState<number>(0);

  return (
    <div className="Explorer">
      <div>... here all the elements will be instantiated ...</div>
      <br />
      <ReloadDataButton onClick={() => setReloadCount(reloadCount + 1)} />
      <ExplorerDataContextProvider requestCounter={reloadCount}>
        <ExplorerLoadingViewer />
        <Viewer3D />
      </ExplorerDataContextProvider>
    </div>
  );
};
