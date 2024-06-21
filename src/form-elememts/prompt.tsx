import { useId } from "react";
import * as React from "react";
import { FieldProps, Rules } from "src/types";
import { Button, Textarea } from "@nextui-org/react";
import { ArrowUpIcon, SquareIcon } from "react-icons";

const Prompt: React.FC<FieldProps> = ({ name, required, error, rules, register, loading, onSubmit, ...props }) => {
    const id = useId();
    const formRules: Rules = {};

    if (required) {
        formRules["required"] = typeof required === "boolean" ? `Prompt field is required` : required;
    }

    const { minLength, maxLength } = rules || {};

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

    const inputProps = {
        id,
        name,
        required: Boolean(required),
        errorMessage: error?.message,
        ...props,
        ...(typeof register === "function" ? register(name, formRules) : {}),
    };

    return (
        <div className="flex w-full items-center">
            <div className="overflow-hidden [&:has(textarea:focus)]:border-gray-200 [&:has(textarea:focus)]:shadow-[0_2px_6px_rgba(0,0,0,.05)] flex flex-col w-full flex-grow relative border border-solid rounded-2xl border-gray-300">
                <Textarea {...inputProps} minRows={2} />
                {loading ? (
                    <Button
                        isIconOnly
                        className="absolute cursor-none bottom-1.5 right-2 border-2 border-gray-950 dark:border-gray-200 md:bottom-3 md:right-3 bg-default min-w-8 w-8 h-8 rounded-large"
                    >
                        <SquareIcon className="h-3 w-3" />
                    </Button>
                ) : (
                    <Button
                        isIconOnly
                        onClick={onSubmit}
                        disabled={Boolean(error)}
                        className="absolute cursor-pointer bottom-1.5 right-2 border disabled:text-gray-400 disabled:opacity-10 md:bottom-3 md:right-3 bg-default min-w-8 w-8 h-8 rounded-large"
                    >
                        <ArrowUpIcon className="text-white" />
                    </Button>
                )}
            </div>
        </div>
    );
};

export { Prompt };
