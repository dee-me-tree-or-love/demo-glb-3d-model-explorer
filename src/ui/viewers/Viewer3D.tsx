import { MainCanvas } from "../../stage/MainCanvas";

/**
 * Display the 3D viewer in a div.
 */
export const Viewer3D = () => {
  return (
    <div
      style={{
        width: "100%",
        height: 350,
        marginTop: 20
      }}
    >
      {/* Load the main canvas */}
      <MainCanvas />
    </div>
  );
};
