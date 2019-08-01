import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

let openListener: any;
let closeListener: any;

interface IProps {
  id: string;
}

interface IState {
  id: string;
  open: boolean;
  title: string;
  content: string | JSX.Element;
  okText: string | JSX.Element;
  okAction: any;
  cancelText: string;
  cancelAction: any;
}

class SimpleDialog extends React.Component<IProps, IState> {
  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      id: '',
      open: false,
      title: '',
      content: '',
      okText: 'Ok',
      okAction: undefined,
      cancelText: 'Cancel',
      cancelAction: undefined,
    };
  }

  cancel = async () => {
    if (this.state.cancelAction) {
      this.state.cancelAction();
    }
    this.setState({ open: false });
  }

  ok = async () => {
    if (this.state.okAction) {
      await this.state.okAction();
    }
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <Dialog open={this.state.open} onClose={this.cancel}>
          {this.state.title &&
          <DialogTitle>
            {this.state.title}
          </DialogTitle>}
          <DialogContent>
            {typeof this.state.content === 'string'
              ? <DialogContentText>{this.state.content}</DialogContentText>
              : this.state.content}
          </DialogContent>
          <DialogActions>
            {this.state.cancelText &&
            <Button onClick={this.cancel} color="primary">
              {this.state.cancelText}
            </Button>}
            <Button onClick={this.ok} color="primary">
              {this.state.okText}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default SimpleDialog;
