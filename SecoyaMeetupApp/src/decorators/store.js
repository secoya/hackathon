/** @flow **/

import {invariant} from 'capacitor'

export function actionHandler(action:any) {
	return (target:any, name:string, descriptor:object) => {
		debugger
		console.log(action, name, target, target.prototype[name]);
		let handler = target.prototype[name];
		invariant(action && typeof handler == "function", "Provided action should be created via the action" +
			"manager and a handler must be given as a second parameter.");
		invariant(!target.constructor._handlers[action],
			"#{@constructor.name}.action(...): You can only define one handler pr action");

		target.constructor._handlers[action] = handler;
	}
}