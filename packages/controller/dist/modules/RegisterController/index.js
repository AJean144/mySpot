"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_apollo_1 = require("react-apollo");
const registerMutation_1 = require("../../queries/registerMutation");
class Controller extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.submit = (values) => __awaiter(this, void 0, void 0, function* () {
            const res = yield this.props.mutate({
                variables: values
            });
            console.log({ res });
            return null;
        });
    }
    render() {
        return (this.props.children({ submit: this.submit }));
    }
}
exports.RegisterController = react_apollo_1.graphql(registerMutation_1.registerMutation)(Controller);
//# sourceMappingURL=index.js.map