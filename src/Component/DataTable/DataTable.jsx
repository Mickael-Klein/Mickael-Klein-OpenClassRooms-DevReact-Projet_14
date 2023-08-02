import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";

const columns = [
  {
    name: "First Name",
    selector: (row) => row.firstName,
    sortable: true,
  },
  {
    name: "Last Name",
    selector: (row) => row.lastName,
    sortable: true,
  },
  {
    name: "Start Date",
    selector: (row) => row.startDate,
    sortable: true,
  },
  {
    name: "Date of Birth",
    selector: (row) => row.dateOfBirth,
    sortable: true,
  },
  {
    name: "Department",
    selector: (row) => row.department,
    sortable: true,
  },
  {
    name: "Street",
    selector: (row) => row.street,
    sortable: true,
  },
  {
    name: "City",
    selector: (row) => row.city,
    sortable: true,
  },
  {
    name: "State",
    selector: (row) => row.state,
    sortable: true,
  },
  {
    name: "Zip Code",
    selector: (row) => row.zipCode,
    sortable: true,
  },
];

export default function DataTableComponent() {
  const [filteredData, setFilteredData] = useState([]);

  const data = useSelector((state) => state.employeeData);

  useEffect(() => {
    setFilteredData([...data]);
  }, [data]);

  function handleSearchChange(e) {
    const search =
      typeof e.target.value === "string"
        ? e.target.value.toLowerCase()
        : e.target.value;

    setFilteredData(
      data.filter((elem) => {
        return (
          elem.firstName.toLowerCase().includes(search) ||
          elem.lastName.toLowerCase().includes(search) ||
          elem.department.toLowerCase().includes(search) ||
          elem.street.toLowerCase().includes(search) ||
          elem.city.toLowerCase().includes(search) ||
          elem.state.toLowerCase().includes(search) ||
          elem.zipCode.includes(search) ||
          elem.startDate.includes(search) ||
          elem.dateOfBirth.includes(search)
        );
      })
    );
  }

  return filteredData ? (
    <>
      <div className="searchBoxContainer">
        <input
          type="text"
          name="searchBox"
          id="searchBox"
          placeholder="Name, Adress, Department..."
          onChange={(e) => handleSearchChange(e)}
        />
      </div>
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        className="dataTableComponent"
      />
    </>
  ) : (
    <div className="noData">No Data to display</div>
  );
}
