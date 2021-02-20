"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getA = exports.LiveLayerA = void 0;
const T = __importStar(require("@effect-ts/core/Effect"));
const H = __importStar(require("@effect-ts/core/Has"));
const Function_1 = require("@effect-ts/core/Function");
const L = __importStar(require("@effect-ts/core/Effect/Layer"));
const makeLayerA = {
    _tag: "layerA",
    a: T.succeed("I am a"),
};
const HasLayerA = H.tag();
exports.LiveLayerA = Function_1.pipe(makeLayerA, T.succeed, L.fromEffect(HasLayerA));
exports.getA = T.deriveLifted(HasLayerA)([], ["a"], []).a;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9sYXllci1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwREFBNEM7QUFDNUMsdURBQXlDO0FBQ3pDLHVEQUFnRDtBQUNoRCxnRUFBa0Q7QUFFbEQsTUFBTSxVQUFVLEdBQUc7SUFDakIsSUFBSSxFQUFFLFFBQVE7SUFDZCxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7Q0FDdkIsQ0FBQztBQUlGLE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQVUsQ0FBQztBQUNyQixRQUFBLFVBQVUsR0FBRyxlQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBRTdELFlBQUksR0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUNsRCxFQUFrQixFQUNsQixDQUFDLEdBQUcsQ0FBQyxFQUNMLEVBQWtCLENBQ25CLEdBQUMifQ==