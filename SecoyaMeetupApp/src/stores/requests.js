import {EntityStore} from 'capacitor'
import RequestActions from '../actions/request'
import RequestRecord from '../records/request'

class RequestStore extends EntityStore {};

RequestStore.action(RequestActions.track, (requestId) => {
	invariant(requestId?, "Can't track a request without a request id");
	request = new RequestRecord {
		id: requestId,
		status: null,
		ok: null,
		error: null,
		result: null,
		pending: true
	};
	this.setItem(request);
	this.changed();
});

RequestStore.action(RequestActions.updateState, (state) => {
	this.setItem(new RequestRecord(state));
	this.changed();
});

export default new RequestStore();