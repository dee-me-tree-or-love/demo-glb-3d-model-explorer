import { ApiResponse, ObjectTypes } from "../data/api";

import { Ship } from "../models/ship";
import { Fish } from "../models/fish";

type SupportedModels = Ship | Fish;
type Optional<T> = T | null;

const apiResponseToStandardModel = (
  r: ApiResponse
): Optional<SupportedModels> => {
  return !!r._id && !!r.objectType && !!r.gltfFilePath
    ? {
        _id: r._id,
        objectType: r.objectType,
        gltfFilePath: r.gltfFilePath
      }
    : null;
};

type Adapter = (r: ApiResponse) => Optional<SupportedModels>;

export const adapters: Record<ObjectTypes, Adapter> = {
  ship: apiResponseToStandardModel,
  fish: apiResponseToStandardModel,
  cart: () => null
};
