import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useTrainingContext } from "../../context/TrainingProvider";

const TrainingTable = () => {
  const { trainings, fetchTrainings, addTraining, updateTraining, deleteTraining } =
    useTrainingContext();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetchTrainings();
  }, [fetchTrainings]);

  useEffect(() => {
    setRows(trainings.map((item, index) => ({ id: index, ...item })));
  }, [trainings]);

  const columns = [
    { field: "name", headerName: "Name", width: 150, editable: true },
    { field: "description", headerName: "Description", width: 300, editable: true },
    {
      field: "price",
      headerName: "Price",
      width: 100,
      editable: true,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <div className="space-x-2">
          <button
            className="text-blue-500"
            onClick={() => updateTraining(params.row.id, params.row)}
          >
            Update
          </button>
          <button
            className="text-red-500"
            onClick={() => deleteTraining(params.row.id)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} checkboxSelection />
    </div>
  );
};

export default TrainingTable;
