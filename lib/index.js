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
const Function_1 = require("@effect-ts/core/Function");
const layer_a_1 = require("./layer-a");
const R = __importStar(require("@effect-ts/node/Runtime"));
const T = __importStar(require("@effect-ts/core/Effect"));
Function_1.pipe(layer_a_1.getA, T.tap((a) => T.effectTotal(() => console.log(a))), T.provideSomeLayer(layer_a_1.LiveLayerA), T.result, T.chain(T.done), R.runMain);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWdEO0FBQ2hELHVDQUE2QztBQUM3QywyREFBNkM7QUFDN0MsMERBQTRDO0FBRTVDLGVBQUksQ0FDRixjQUFJLEVBQ0osQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDakQsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLG9CQUFVLENBQUMsRUFDOUIsQ0FBQyxDQUFDLE1BQU0sRUFDUixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFDZixDQUFDLENBQUMsT0FBTyxDQUNWLENBQUMifQ==