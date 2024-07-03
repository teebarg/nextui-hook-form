import * as React from "react";
import { Controller } from "react-hook-form";
import { Switch as NUISwitch } from "@nextui-org/react";

interface props {
    name: string;
    label: string;
    error?: { message?: string };
    [key: string]: any;
}

const Switch: React.FC<props> = ({ name, label, error, control, ...props }) => {
    const inputProps = {
        name,
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
