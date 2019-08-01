import * as React from 'react';

export default class Folder extends React.Component<any, any> {
  constructor(props: any, state: any) {
    super(props);
  }

  render() {
    const { rootFolderId, onClick, onToggle } = this.props;

    return (
      <div className={`folder ${this.props.data.active ? 'selected' : ''}`}>
        <ToggleButton
          hasSubfolders={this.props.data.children !== undefined}
          isToggled={this.props.data.toggled}
          onToggle={onToggle} />
        <div className="inner" onClick={onClick}>
          <span className="icon-folder"></span>
          <div className="title">{this.props.data.Title}</div>
        </div>
      </div>
    );
  }
}

const ToggleButton = ({ hasSubfolders, isToggled, onToggle }: any): JSX.Element => {
  if (hasSubfolders) {
    return isToggled
      ? <div className="toggler icon-dropdown-arrow" onClick={onToggle}></div>
      : <div className="toggler icon-dropdown-arrow closed" onClick={onToggle}></div>;
  }
  else {
    return <div className="toggler empty"></div>;
  }
};
