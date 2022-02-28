export type ObjectTypes = "ship" | "fish" | "cart";
type ObjectColors = "blue" | "green";
type ObjectId = number;

export interface ApiResponse {
  _id: ObjectId;
  objectType: ObjectTypes;
  color: ObjectColors;
  gltfFilePath: string;
}

const mockDataSources: ApiResponse[] = [
  {
    _id: 1,
    objectType: "fish",
    color: "blue",
    gltfFilePath: "/BarramundiFish.glb"
  },
  {
    _id: 3,
    objectType: "ship",
    color: "blue",
    gltfFilePath: "/ToyCar.glb" // TODO: could not find a right ship glb file
  }
  // TODO: uncomment to add support for more models
  // { _id: 2, objectType: "cart", color: "green" }
];

const getRandomIndex = (n: number): number => Math.floor(Math.random() * n);

/**
 * Retrieve a random model from the API.
 */
export const fetchRandomData = async (): Promise<ApiResponse> =>
  mockDataSources[getRandomIndex(mockDataSources.length)];
