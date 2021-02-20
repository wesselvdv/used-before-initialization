import * as T from "@effect-ts/core/Effect";
import * as H from "@effect-ts/core/Has";
import { pipe } from "@effect-ts/core/Function";
import * as L from "@effect-ts/core/Effect/Layer";

const makeLayerA = {
  _tag: "layerA",
  a: T.succeed("I am a"),
};

type LayerA = typeof makeLayerA;

const HasLayerA = H.tag<LayerA>();
export const LiveLayerA = pipe(makeLayerA, T.succeed, L.fromEffect(HasLayerA));

export const { a: getA } = T.deriveLifted(HasLayerA)(
  [] as Array<never>,
  ["a"],
  [] as Array<never>
);
