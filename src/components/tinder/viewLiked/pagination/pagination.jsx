import React from 'react';
import './paginationStyles.css';

const Pagination = props => {
  let pages = [];

  function onPageClickHandler(event) {
    props.selectPage(Number(event.target.innerHTML));
  }

  for (let i = 1; i <= props.pages; i++) {
    pages.push(
      <div
        onClick={i => onPageClickHandler(i)}
        key={i}
        className={i === props.active ? 'active' : ''}
      >
        {i}
      </div>,
    );
  }
  return <div className="pagination">{pages}</div>;
};

export default Pagination;
