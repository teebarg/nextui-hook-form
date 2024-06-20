/* eslint-disable @typescript-eslint/no-explicit-any */
import { useId } from "react";
import * as React from "react";
import { UseFormRegister } from "react-hook-form";
import { Input } from "@nextui-org/input";

type Types = "text" | "password" | "email" | "number";

type RulesProps = {
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
    required?: boolean;
    email?: boolean;
    confirmPassword?: object;
    pattern?: RegExp;
};

type FieldProps = {
    name: string;
    label?: string;
    className?: string;
    type?: Types;
    rules?: RulesProps;
    disabled?: boolean;
    labelPlacement?: "outside" | "inside";
    register: UseFormRegister<any>;
    [key: string]: any;
};

type Rules = {
    required?: boolean | string;
    min?: {
        value: number;
        message: string;
    };
    max?: {
        value: number;
        message: string;
    };
    minLength?: {
        value: number;
        message: string;
    };
    maxLength?: { value: number; message: string };
    pattern?: {
        value: RegExp;
        message: string;
    };
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/ban-types
    validate?: (value: {}) => boolean | string;
};

export function TextField({
    name,
    label,
    labelPlacement = "inside",
    type = "text",
    size = "md",
    className = "",
    defaultValue,
    register,
    rules,
    error,
    ...props
}: FieldProps) {
    const id = useId();
    const formRules: Rules = {};
    const { min, max, minLength, maxLength, email, required, pattern } = rules || {};

    if (required) {
        formRules["required"] = typeof required === "boolean" ? `${label} is required` : required;
    }

    if (min) {
        formRules["min"] = {
            value: min,
            message: `The value of ${label} must be greater than or equal to ${min}`,
        };
    }

    if (max) {
        formRules["max"] = {
            value: max,
            message: `The value of ${label} must be less than or equal to ${max}`,
        };
    }

    if (minLength) {
        formRules["minLength"] = {
            value: minLength,
            message: `${label} must have a minimum of ${minLength} characters`,
        };
    }

    if (maxLength) {
        formRules["maxLength"] = {
            value: maxLength,
            message: `${label} must have a minimum of ${maxLength} characters`,
        };
    }

    if (email) {
        formRules["pattern"] = {
            value: /\S+@\S+\.\S+/,
            message: "Entered value does not match email format",
        };
    }

    if (pattern) {
        formRules["pattern"] = {
            value: pattern,
            message: "The value entered does not match the required pattern",
        };
    }

    return (
        <Input
            isClearable
            isRequired={required}
            id={id}
            type={type}
            label={label}
            labelPlacement={labelPlacement}
            {...props}
            defaultValue={defaultValue}
            className={className}
            {...register(name, formRules)}
            isInvalid={error}
            errorMessage={error?.message}
            size={size}
        />
    );
}