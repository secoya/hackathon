import {EntityStore} from 'capacitor';
import {actionHandler} from '../decorators/store';
import GroupActions from '../actions/groups';

class GroupStore extends EntityStore {

	@actionHandler(GroupActions.fetchRecommendedSuccess)
	onGroupsFetched(items) {
		items.forEach(item => {
			this.setItem(item);
		});
	}

}

export default new GroupStore;