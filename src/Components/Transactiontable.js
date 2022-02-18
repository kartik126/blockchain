import React, { Component } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
 import "../Components/table.css";
import "@progress/kendo-react-animation";
import {
  TreeList,
  filterBy,
  extendDataItem,
  mapTree,
  TreeListTextFilter,
} from "@progress/kendo-react-treelist";
import employees from "./data.js";

const subItemsField = "employees";
const expandField = "expanded";
const columns1 = [
  {
    field: "name",
    filterCell: TreeListTextFilter,
    expandable: true,
    title: "Wallet",
  },
];

export class Transactiontable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      data: [...employees],
      filter: [],
      expanded: [1, 2, 32],
    };
  }
  onExpandChange = (e) => {
    this.setState({
      expanded: e.value
        ? this.state.expanded.filter((id) => id !== e.dataItem.id)
        : [...this.state.expanded, e.dataItem.id],
    });
  };
  handleFilterChange = (event) => {
    this.setState({
      filter: event.filter,
    });
  };
  addExpandField = (dataTree) => {
    const expanded = this.state.expanded;
    return mapTree(dataTree, subItemsField, (item) =>
      extendDataItem(item, subItemsField, {
        [expandField]: expanded.includes(item.id),
      })
    );
  };
  processData = () => {
    let data = this.state.data;
    let filteredData = filterBy(data, this.state.filter, subItemsField);
    return this.addExpandField(filteredData);
  };
  onRowClick = () => {
    return {
      onClick: () => {
        this.setState({
          status: true,
        });
      },
    };
  };
  render() {
    const data1 = [
      {
        sno: 1,
        wallet: "WI1",
      },
      {
        sno: 2,
        wallet: "WI1",
      },
      {
        sno: 3,
        wallet: "WI1",
      },
      {
        sno: 4,
        wallet: "WI1",
      },
      {
        sno: 5,
        wallet: "WI1",
      },
      {
        sno: 6,
        wallet: "WI1",
      },
      {
        sno: 7,
        wallet: "WI1",
      },
      {
        sno: 8,
        wallet: "WI1",
      },
    ];
    const columns = [
      {
        Header: "S. No.",
        accessor: "sno",
        width: 150,
      },
      {
        Header: "Wallet",
        accessor: "wallet",
      },
    ];
    return (
      <div className="transaction-table-container">
        <ReactTable
          data={data1}
          columns={columns}
          defaultPageSize={5}
          pageSizeOptions={[5, 10]}
          className="bg-secondary text-white font-bold text-center cursor-pointer"
          getTrProps={this.onRowClick}
        />
        {this.state.status == false ? (
          <></>
        ) : (
          <div>
            <div className="bg-secondary p-4 my-2 rounded-lg">
              {/* <div className="flex mb-4">
                <h3 className="mx-4 text-white font-bold">S. No.: </h3>
                <h3 className="mx-4 text-white font-bold">Wallet: WI1</h3>
              </div> */}
              <TreeList
                style={{
                  maxHeight: "500px",
                  overflow: "auto",
                }}
                expandField={expandField}
                subItemsField={subItemsField}
                onExpandChange={this.onExpandChange}
                filter={this.state.filter}
                data={this.processData()}
                onFilterChange={this.handleFilterChange}
                columns={columns1}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Transactiontable;
