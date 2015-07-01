import {ActionCreator} from 'capacitor'
import RequestActionCreator from './request'
import GroupActions from './actions/groups'

class GroupActionCreator extends ActionCreator {
	fetch() {
		let requestId = this.generateRequestID();
		this.dispatch(GroupActions.fetchRecommended);
		RequestActionCreator.track(requestId, fetch("https://api.meetup.com/recommended/groups?sign=true&photo-host=public&page=20&key=391f174e2e5627184c2471523d306d"))
		.then(response => {
			this.dispatch(GroupActions.fetchRecommendedSuccess, response.json());
		}, response => {
			this.dispatch(GroupActions.fetchRecommendedFail);
		});
		return requestId;
	}
}