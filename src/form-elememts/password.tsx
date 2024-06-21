import { useId } from "react";
import * as React from "react";
import { Input } from "@nextui-org/input";
import { FieldProps, Rules } from "src/types";
import { EyeFilledIcon, EyeSlashFilledIcon } from "react-icons";

const Password: React.FC<FieldProps> = ({ name, required, error, rules, register, ...props }) => {
    const id = useId();
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    const { minLength, maxLength, confirmPassword, pattern } = rules || {};

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

    if (confirmPassword) {
        formRules["validate"] = (value: {}) => value === confirmPassword || "Passwords do not match";
    }

    if (pattern) {
        formRules["pattern"] = {
            value: pattern,
            message: "The value entered does not match the required pattern",
        };
    }

    if (required) {
        formRules["required"] = typeof required === "boolean" ? `${name} is required` : required;
    }

    const inputProps = {
        id,
        name,
        isRequired: Boolean(required),
        type: isVisible ? "text" : "password",
        isInvalid: Boolean(error),
        errorMessage: error?.message,
        ...props,
        ...(typeof register === "function" ? register(name, formRules) : {}),
        endContent: (
            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
            </button>
        ),
    };

    return <Input {...inputProps} />;
};

export { Password };
