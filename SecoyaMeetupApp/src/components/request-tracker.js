/* @flow */
import RequestActionCreator from '../action-creators/request';
import RequestStore from '../stores/requests';
import React from 'react-native';

type Props = { requestId: string };
type DefaultProps = { };
type State = { ok: ?bool, status: ?number };

class RequestTracker extends React.Component<DefaultProps, Props, State> {

  constructor(props : Props, context: any) {
    super(props)
    let item = RequestStore.getItem(this.props.requestId);
    let state = {
      status: null,
      ok: null
    };
    if (item !== null) {
      state = item;
    }
    this.state = state;
  }

  componentDidMount() {
    RequestStore.changed.add(this.updateFromStore);
    this.executeCallbacks();
  }

  componentWillUnmount() {
    RequestStore.changed.remove(this.updateFromStore);
    RequestActionCreator.removeRequest(this.props.requestId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.ok === null && this.state.ok !== null) {
      this.executeCallbacks();
    }
  }

  updateFromStore() {
    let item = RequestStore.getItem(this.props.requestID);
    this.setState({item: item});
  }

  executeCallbacks() {
    if (this.state.ok === false && typeof this.props.fail == 'function') {
      this.props.fail();
    }
    if (this.state.ok === true && typeof this.props.success == 'function') {
      this.props.success();
    }
    if (typeof this.props.always == 'function') {
      this.props.always();
    }
  }

  render() {
    return null;
  }

}

RequestTracker.propTypes = {
  requestId: React.PropTypes.number.isRequired,
  success: React.PropTypes.func,
  fail: React.PropTypes.func,
  always: React.PropTypes.func
};

export default RequestTracker;
