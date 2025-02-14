import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // Main style file
import "react-date-range/dist/theme/default.css"; // Theme

const DateRangePicker = ({ onChange }) => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        }
    ]);

    console.log({state})

    return (
        <DateRange
            editableDateInputs={true}
            onChange={(item) => {
                setState([item.selection]);
                onChange && onChange(item.selection);
            }}
            moveRangeOnFirstSelection={false}
            ranges={state}
            rangeColors={["#198754"]}
            autoFocus={true}
        />
    );
};

export default DateRangePicker;
