import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useMerchContext } from "../context/ProductProvider.js";

const MerchTable = () => {
  const { merch, fetchMerch, addMerch, updateMerch, deleteMerch } =
    useMerchContext();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetchMerch();
  }, [fetchMerch]);

  useEffect(() => {
    setRows(merch.map((item, index) => ({ id: index, ...item })));
  }, [merch]);

  const columns = [
    { field: "name", headerName: "Name", width: 150, editable: true },
    { field: "price", headerName: "Price", width: 100, editable: true },
    { field: "description", headerName: "Description", width: 300, editable: true },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <div className="space-x-2">
          <button
            className="text-blue-500"
            onClick={() => updateMerch(params.row.id, params.row)}
          >
            Update
          </button>
          <button
            className="text-red-500"
            onClick={() => deleteMerch(params.row.id)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        onRowEditStop={(params) => {
          if (params.reason === "commit") {
            const updatedRow = rows.find((row) => row.id === params.id);
            updateMerch(params.id, updatedRow);
          }
        }}
        checkboxSelection
      />
    </div>
  );
};

export default MerchTable;
