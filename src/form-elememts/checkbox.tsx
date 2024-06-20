/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { Controller } from "react-hook-form";
import { Checkbox } from "@nextui-org/react";
import { FieldProps } from "src/types";

export function CheckBox({ name, label, className, control }: FieldProps) {
    return (
        <div className={className}>
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, value } }) => (
                    <Checkbox onChange={onChange} defaultSelected={value} color="secondary" size="md">
                        {label}
                    </Checkbox>
                )}
            />
        </div>
    );
}
