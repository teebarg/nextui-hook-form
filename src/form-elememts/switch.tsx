import * as React from "react";
import { FieldProps } from "src/types";
import { Controller } from "react-hook-form";
import { Switch as NUISwitch } from "@nextui-org/react";

const Switch: React.FC<FieldProps> = ({ name, label, required, error, control, ...props }) => {
    const inputProps = {
        name,
        isRequired: Boolean(required),
        isInvalid: Boolean(error),
        ...props,
    };

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value } }) => (
                <NUISwitch onChange={onChange} isSelected={value} {...inputProps}>
                    {label}
                </NUISwitch>
            )}
        />
    );
};

export { Switch };
