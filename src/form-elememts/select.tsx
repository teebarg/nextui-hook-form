import { useId } from "react";
import * as React from "react";
import { FieldProps } from "src/types";
import { Select as NUISelect, SelectItem } from "@nextui-org/react";
import { Controller } from "react-hook-form";

const Select: React.FC<FieldProps> = ({ name, required, error, control, register, selectionMode = "single", options = [], ...props }) => {
    const id = useId();

    const inputProps = {
        id,
        name,
        isRequired: Boolean(required),
        isInvalid: Boolean(error),
        errorMessage: error?.message,
        ...props,
    };

    return (
        <Controller
            key={id}
            control={control}
            name={name}
            render={({ field: { onChange, value } }) => (
                <NUISelect {...inputProps} onChange={onChange} selectedKeys={value} selectionMode={selectionMode}>
                    {options?.map((item: { value: string; label: string }) => (
                        <SelectItem key={item.value}>{item.label}</SelectItem>
                    ))}
                </NUISelect>
            )}
        />
    );
};

export { Select };
