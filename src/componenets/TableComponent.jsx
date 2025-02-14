'use client';
import React from "react";
import {
    ClientSideRowModelModule,
    ModuleRegistry,
    NumberEditorModule,
    NumberFilterModule,
    TextEditorModule,
    TextFilterModule,
    PaginationModule
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";

ModuleRegistry.registerModules([
    ClientSideRowModelModule,
    TextEditorModule,
    TextFilterModule,
    NumberFilterModule,
    NumberEditorModule,
    PaginationModule
]);

const TableComponent = ({ columnDefs, rowData, title, buttons, loading}) => {
    const gridStyle = { height: '100%', width: '100%' };

    return (
        <div className='m-3 rounded table-container'>
            <div className='d-flex justify-content-between gap-1 '>
                <div className='px-3 py-2' style={{ backgroundColor: "#97D0B6", borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    <p className='m-0 fw-bold' style={{ fontSize: "small" }}>
                        {title || "Table title"}
                    </p>
                </div>

                {buttons && buttons}
            </div>

            <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{ flex: 1 }}>
                    <AgGridReact
                        style={gridStyle}
                        columnDefs={columnDefs}
                        rowData={rowData}
                        defaultColDef={defaultColDef}
                        pagination={true} // Enable pagination
                        paginationPageSize={10} // Set number of rows per page
                        paginationPageSizeSelector={[10, 20, 50, 100]}
                        loading={loading}
                    />
                </div>
            </div>
        </div>
    );
};

const defaultColDef = {
    // editable: true,
    flex: 1,
    minWidth: 100,
    filter: true,
};

export default TableComponent;
