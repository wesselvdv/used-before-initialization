import { pipe } from "@effect-ts/core/Function";
import { getA, LiveLayerA } from "./layer-a";
import * as R from "@effect-ts/node/Runtime";
import * as T from "@effect-ts/core/Effect";
import * as L from "@effect-ts/core/Effect/Layer";

pipe(
  getA,
  T.tap((a) => T.effectTotal(() => console.log(a))),
  T.provideSomeLayer(LiveLayerA["+++"](L.Empty)),
  T.result,
  T.chain(T.done),
  R.runMain
);
