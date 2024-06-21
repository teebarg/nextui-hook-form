import { useId } from "react";
import * as React from "react";
import { Input } from "@nextui-org/input";
import { FieldProps, Rules } from "src/types";

const Number: React.FC<FieldProps> = ({ name, required, error, rules, register, ...props }) => {
    const id = useId();
    const { min, max } = rules || {};
    const formRules: Rules = {};

    if (required) {
        formRules["required"] = typeof required === "boolean" ? `${name} is required` : required;
    }

    if (min) {
        formRules["min"] = {
            value: min,
            message: `The value of ${name} must be greater than or equal to ${min}`,
        };
    }

    if (max) {
        formRules["max"] = {
            value: max,
            message: `The value of ${name} must be less than or equal to ${max}`,
        };
    }

    const inputProps = {
        id,
        name,
        isRequired: Boolean(required),
        type: "number",
        isInvalid: Boolean(error),
        errorMessage: error?.message,
        ...props,
        ...(typeof register === "function" ? register(name, formRules) : {}),
    };

    return <Input {...inputProps} />;
};

export { Number };
