import React, { Component } from 'react';
class TableHead extends React.Component {
    render() { 
        const { handelLike, handelDelete, theads, onSort, pagedList } = this.props;
        return <React.Fragment>
            <thead>
            <tr>
              {theads.map((header) => {
                return (
                  <th
                    key={header}
                    className="tHead"
                    onClick={() => onSort(header)}
                  >
                    {header}
                  </th>
                );
              })}
              <th></th>
            </tr>
          </thead>
        </React.Fragment>;
    }
}
 
export default TableHead;