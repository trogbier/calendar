import React, {FC} from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

const Event: FC = () => {
    const [value, setValue] = React.useState<Date | null>(new Date());
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker<Date>
                orientation="landscape"
                openTo="day"
                value={value}
                shouldDisableDate={isWeekend}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
};

export default Event;