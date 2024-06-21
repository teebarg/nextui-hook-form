import { useId } from "react";
import * as React from "react";
import { EmailProps } from "src/types";
import { Controller } from "react-hook-form";
import { Switch as NUISwitch } from "@nextui-org/react";

const Switch: React.FC<EmailProps> = ({ name, label, control, register }) => {
    const id = useId();

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value } }) => (
                <NUISwitch id={id} onChange={onChange} isSelected={value}>
                    {label}
                </NUISwitch>
            )}
        />
    );
};

export { Switch };
