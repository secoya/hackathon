import {actionManager} from 'capacitor'

export default {
	track: actionManager.create('request-track'),
	updateState: actionManager.create('request-update-state')
}
