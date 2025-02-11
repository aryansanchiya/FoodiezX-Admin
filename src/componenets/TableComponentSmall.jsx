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

const TableComponentSmall = ({ columnDefs, rowData, title, buttons, loading}) => {
    const gridStyle = { height: '100%', width: '100%' };

    return (
        <div className='rounded table-container-small'>
            <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{ flex: 1 }}>
                    <AgGridReact
                        style={gridStyle}
                        columnDefs={columnDefs}
                        rowData={rowData}
                        defaultColDef={defaultColDef}
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

export default TableComponentSmall;
