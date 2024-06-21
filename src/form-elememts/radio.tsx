import * as React from "react";
import { FieldProps } from "src/types";
import { RadioGroup, Radio as RadioItem } from "@nextui-org/react";
import { Controller } from "react-hook-form";

const Radio: React.FC<FieldProps> = ({ name, required, error, control, register, onChange, options = [], ...props }) => {
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
            render={({ field: { onChange, value } }) => (
                <RadioGroup value={value} onValueChange={onChange} {...inputProps}>
                    {options.map((item, index) => (
                        <RadioItem key={index} value={item.id} description={item.description}>
                            {item.name}
                        </RadioItem>
                    ))}
                </RadioGroup>
            )}
        />
    );
};

export { Radio };
