import { useId } from "react";
import * as React from "react";
import { FieldProps, Rules } from "src/types";
import { Textarea as NUITextArea } from "@nextui-org/react";

const TextArea: React.FC<FieldProps> = ({ name, required, error, rules, register, ...props }) => {
    const id = useId();

    const { minLength, maxLength } = rules || {};

    const formRules: Rules = {};

    if (minLength) {
        formRules["minLength"] = {
            value: minLength,
            message: `${name} must have a minimum of ${minLength} characters`,
        };
    }

    if (maxLength) {
        formRules["maxLength"] = {
            value: maxLength,
            message: `${name} must have a maximum of ${maxLength} characters`,
        };
    }

    if (required) {
        formRules["required"] = typeof required === "boolean" ? `${name} is required` : required;
    }

    const inputProps = {
        id,
        name,
        isRequired: Boolean(required),
        isInvalid: Boolean(error),
        errorMessage: error?.message,
        ...props,
        ...(typeof register === "function" ? register(name, formRules) : {}),
    };

    return <NUITextArea {...inputProps} />;
};

export { TextArea };
