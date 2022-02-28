import { ModelId } from "./common";

export interface Fish {
  _id: ModelId;
  objectType: "fish";
  gltfFilePath: string;
}
