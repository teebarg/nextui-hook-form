import { useId } from "react";
import * as React from "react";
import { Input } from "@nextui-org/input";
import { EmailProps, Rules } from "src/types";

const Email: React.FC<EmailProps> = ({ name, required, error, register, ...props }) => {
    const id = useId();
    const formRules: Rules = {
        pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Entered value does not match email format",
        },
    };

    if (required) {
        formRules["required"] = typeof required === "boolean" ? `${name} is required` : required;
    }

    const inputProps = {
        id,
        name,
        isRequired: Boolean(required),
        type: "email",
        isInvalid: Boolean(error),
        errorMessage: error?.message,
        ...props,
        ...(typeof register === "function" ? register(name, formRules) : {}),
    };

    return <Input {...inputProps} />;
};

export { Email };
