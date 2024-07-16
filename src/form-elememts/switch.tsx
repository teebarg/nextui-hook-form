/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { Controller } from "react-hook-form";
import { Switch as NUISwitch } from "@nextui-org/react";

interface props {
    name: string;
    label: string;
    control: any;
    [key: string]: any;
}

const Switch: React.FC<props> = ({ name, label, control, ...props }) => {
    const inputProps = {
        name,
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
