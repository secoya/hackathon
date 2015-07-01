import {ActionCreator, invariant} from 'capacitor'
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
		return promise;
	}
})