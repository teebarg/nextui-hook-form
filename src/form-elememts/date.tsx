import * as React from "react";
import { FieldProps } from "src/types";
import { DateInput } from "@nextui-org/react";
import { Controller } from "react-hook-form";
import { CalendarDate, parseDate } from "@internationalized/date";

const Date: React.FC<FieldProps> = ({ name, required, error, control, ...props }) => {
    const inputProps = {
        name,
        isRequired: Boolean(required),
        isInvalid: Boolean(error),
        errorMessage: error?.message,
        ...props,
    };

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value } }) => (
                <DateInput {...inputProps} defaultValue={parseDate(value)} placeholderValue={new CalendarDate(1995, 11, 6)} />
            )}
        />
    );
};

export { Date };
