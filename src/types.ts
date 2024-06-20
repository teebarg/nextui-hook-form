import { UseFormRegister } from "react-hook-form";

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

export type { Types, RulesProps, FieldProps };
