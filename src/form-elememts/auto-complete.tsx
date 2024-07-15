import * as React from "react";
import { Controller } from "react-hook-form";
import { FieldProps } from "src/types";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { useAsyncList } from "@react-stately/data";

type Item = {
    id: number | string;
    name: string;
    value: string;
    label: string;
    description: string;
};

const AutoComplete: React.FC<FieldProps & { url: string }> = ({ url, name, label, required, error, control, ...props }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const list = useAsyncList<any>({
        async load({ signal, filterText }) {
            const res = await fetch(`${url}?search=${filterText}`, { signal });
            const json = await res.json();

            return {
                items: json.results,
            };
        },
    });
    const inputProps = {
        name,
        label,
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
                <Autocomplete
                    {...inputProps}
                    inputValue={list.filterText}
                    isLoading={list.isLoading}
                    items={list.items}
                    defaultInputValue={value}
                    onSelectionChange={onChange}
                    onInputChange={list.setFilterText}
                >
                    {(item: Item) => <AutocompleteItem key={item.value || item.id || item.name}>{item.name || item.label}</AutocompleteItem>}
                </Autocomplete>
            )}
        />
    );
};

export { AutoComplete };
