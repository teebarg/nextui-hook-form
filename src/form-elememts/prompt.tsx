import { useId } from "react";
import * as React from "react";
import { FieldProps, Rules } from "src/types";
import { Button } from "@nextui-org/react";
import { ArrowUpIcon, SquareIcon } from "react-icons";

const Prompt: React.FC<FieldProps> = ({ name, required, error, rules, register, loading, ...props }) => {
    const id = useId();

    // eslint-disable-next-line no-undef
    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px";
    };
    const formRules: Rules = {};

    if (required) {
        formRules["required"] = typeof required === "boolean" ? `Textfield is required` : required;
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
                <textarea
                    onInput={handleInput}
                    className="m-0 w-full resize-none border-0 bg-transparent outline-none py-[10px] pr-10 md:py-3.5 md:pr-12 max-h-52 placeholder-black/50 dark:placeholder:text-white pl-3 md:pl-4 h-14 overflow-y-auto"
                    {...inputProps}
                ></textarea>
                {loading ? (
                    <Button
                        isIconOnly
                        className="bottom-1.5 right-2 p-1 rounded-full border-2 border-gray-950 dark:border-gray-200 md:bottom-3 md:right-3"
                    >
                        <SquareIcon className="h-3 w-3" />
                    </Button>
                ) : (
                    <Button
                        onClick={() => console.log("Handling click......")}
                        disabled={Boolean(error)}
                        className="bottom-1.5 right-2 p-0.5 rounded-lg border border-black transition-colors enabled:bg-black disabled:text-gray-400 disabled:opacity-10 md:bottom-3 md:right-3"
                    >
                        <ArrowUpIcon className="text-white" />
                    </Button>
                )}
            </div>
        </div>
    );
};

export { Prompt };
