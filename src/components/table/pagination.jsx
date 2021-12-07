import React from "react";
import _ from "lodash";
import PropTypes, { func } from "prop-types";

class Pagination extends React.Component {
  setActiveClass(page) {
    let cssClass = "page-item";
    if (this.props.activePage && this.props.activePage === page)
      cssClass += " active";

    return cssClass;
  }
  render() {
    const { pageSize, itemCount } = this.props;
    const pageCount = Math.ceil(itemCount / pageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);

    return (
      <div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {pages.map((page) => {
              return (
                <li key={page} className={this.setActiveClass(page)}>
                  <a
                    onClick={() => this.props.handlePageChange(page)}
                    className="page-link"
                    href="#"
                  >
                    {page}
                  </a>
                </li>
              );
            })}
            <div className="m-2">
              total item
              <span className="badge badge-primary"> {itemCount}</span>
            </div>
          </ul>
        </nav>
      </div>
    );
  }
}
// spell check  => propTypes <=
//check Prop type
Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  handlePageChange: func.isRequired,
};

export default Pagination;
