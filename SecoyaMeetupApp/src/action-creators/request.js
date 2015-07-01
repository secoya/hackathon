import {ActionCreator, invariant} from 'capacitor'
import superagent from 'superagent'
import RequestActions from '../actions/request'


function computeRequestState (res, requestId) {
	return {
		id: requestId,
		status: res.status,
		ok: res.ok,
		error: res.error,
		body: res.body,
		pending: no
	}
}

export default new (class RequestActionCreator extends ActionCreator {
	track(requestId, promise) {
		this.dispatch(RequestActions.track, requestId);
		that = this;
		function computeAndDispatch(err, res) {
			that.dispatch(RequestActions.updateState, that.computeRequestState(res, requestId));
		}
		promise.then(computeAndDispatch, computeAndDispatch);
	}

	request(configFn) {
		invariant(configFn !== null, "You must supply a config function to the request method");
		request = configFn.call(superagent);
		request.set('X-Request-With', 'xmlhttprequest');
		invariant(request?.end?, "The return value of your config function should be an instance of superagent");
		return new Promise((resolve, reject) => {
			request.end((err, res) => {
				if (err != null) {
					return reject(err, res);
				}
				if (res.ok) {
					return resolve(null, err);
				} else {
					return reject(err, res);
				}
			});
		});
	}
})