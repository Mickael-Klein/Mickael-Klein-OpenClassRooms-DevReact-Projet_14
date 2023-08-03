import React, { useEffect } from "react";
import "./Index.scss";
import { useDispatch } from "react-redux";
import DataTableComponent from "../../Component/DataTable/DataTable";

export default function Index() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "userInteraction/updatePageLocation",
      payload: {
        page: "index",
        pageTitle: "HRnet - Current Employees",
      },
    });
  }, [dispatch]);
  return (
    <main className="indexMain">
      <h1>Current Employee</h1>
      <section className="dataTableContainer">
        <DataTableComponent />
      </section>
    </main>
  );
}
