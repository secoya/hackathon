import {actionManager} from 'capacitor'

export default {
	fetchRecommended: actionManager.create('groups-fetch-recommended'),
	fetchRecommendedSuccess: actionManager.create('groups-fetch-recommended-success'),
	fetchRecommendedFail: actionManager.create('groups-fetch-recommended-fail') 
}