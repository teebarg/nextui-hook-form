import * as React from "react";
import { Controller } from "react-hook-form";
import { Checkbox as NUICheckBox } from "@nextui-org/react";
import { FieldProps } from "src/types";

const CheckBox: React.FC<FieldProps> = ({ name, label, required, error, control, register, ...props }) => {
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
                <NUICheckBox onChange={onChange} defaultSelected={value} {...inputProps}>
                    {label}
                </NUICheckBox>
            )}
        />
    );
};

export { CheckBox };
