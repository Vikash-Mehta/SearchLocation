import * as React from 'react';
const { withStyles } = require('@material-ui/core/styles');

interface IProps {
  currentPage: number;
  showPaginationInfo: boolean;
  totalItems: number;
  currentPageItemsCount: number;
  itemsPerPage: number;
  pageChangeCallback: Function;
  parentComponentReference?: any;
}

const styles = () => {
  return {
    paginationContainer: {
      textAlign: 'left',
    },
    page: {
      color: '#03A9F4',

      '&.active': {
        backgroundColor: '#03A9F4',
        borderColor: '#03A9F4',
        color: '#ffffff',
      }
    },
    disabled: {
      pointerEvents: 'none',

      '& span': {
        color: '#CDCDCD !important',
      }
    },
    totalRecordsCount: {
      display: 'inline-block',
      paddingLeft: '10px',
      verticalAlign: 'top',
      marginTop: '20px',
      paddingTop: '10px',
      fontFamily: 'Avenir Next LT W02 Demi',
      fontSize: '13px',
      opacity: 0.38,
    }
  };
};

class Pagination extends React.Component <any, any> {
  constructor(props: IProps, state: any) {
    super(props);
  }

  handleClick = (pageNumber) => {
    if (this.props.parentComponentReference) {
      this.props.pageChangeCallback.call(this.props.parentComponentReference, { pageNumber });
    }
    else {
      this.props.pageChangeCallback({ pageNumber });
    }
    return;
  }

  render() {
    const { classes } = this.props;
    const numOfPages = Math.ceil(this.props.totalItems / (this.props.itemsPerPage || 30));
    const pages = getPageNumbersToShow({ currentPage: this.props.currentPage, numOfPages });
    
    return (
      <div className={classes.paginationContainer}>
        <ul className='pagination'>
          { 
            this.props.currentPage
              ? <li><a className={classes.page} onClick={() => this.handleClick(this.props.currentPage - 1)}>&#60;</a></li>
              : <li className={classes.disabled}><span>&#60;</span></li>
          }

          { 
            pages.map((obj, index) => {
              return obj.disabled
                ? <li className={classes.disabled} key={index}><a>{obj.number}</a></li>
                : <li className={obj.current ? 'active' : ''} key={index}>
                    <a className={classes.page} onClick={() => this.handleClick(obj.number - 1)}>{obj.number}</a>
                  </li>
            })
          }

          { 
            this.props.currentPage + 1 < numOfPages
              ? <li><a className={classes.page} onClick={() => this.handleClick(this.props.currentPage + 1)}>&#62;</a></li>
              : <li className={classes.disabled}><span>&#62;</span></li>
          }
        </ul>

        {this.props.showTotalRecordsCount && renderTotalRecordsCount(this.props)}
      </div>
    );
  }
}

const getPageNumbersToShow = (props) => {
  const { currentPage, numOfPages } = props;
  const pages = [];

  if (currentPage > 5) {
    pages.push({ current: false, number: 1 });
    pages.push({ current: false, number: '...', disabled: true });
  }

  // Upto 5 pages on either side with current page in center.
  for (var p = currentPage - 5; p < currentPage + 5; ++p) {
    if (p < 0 || p >= numOfPages) {
      continue;
    }

    pages.push({ current: currentPage === p, number: p + 1 });
  }

  // Add boundary page if pages remain.
  if (currentPage + 5 < numOfPages) {
    // Add a non-clickable "..." if not all pages are listed.
    if (currentPage + 6 < numOfPages) {
      pages.push({ current: false, number: '...', disabled: true });
    }

    pages.push({ current: false, number: numOfPages });
  }

  return pages;
};

const renderTotalRecordsCount = (props) => {
  const itemsPerPage = props.itemsPerPage || 30;
  const hitsSoFar = itemsPerPage * props.currentPage;
  const range = hitsSoFar + props.currentPageItemsCount;
  const totalString = props.totalItems > 1000 ? ' 1000s' : props.totalItems.toLocaleString() + ' results';

  return <div className={props.classes.totalRecordsCount}>
    Showing {hitsSoFar + 1} - { range } of { totalString }
  </div>;
}

export default withStyles(styles)(Pagination);
