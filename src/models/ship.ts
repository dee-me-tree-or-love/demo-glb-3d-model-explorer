import { ModelId } from "./common";

export interface Ship {
  _id: ModelId;
  objectType: "ship";
  gltfFilePath: string;
}
