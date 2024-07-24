# NextUI Hook Form

Beautiful form elements built with NextUi and React Hook Form

## Installation

You can install the package from the GitHub repository using npm or yarn:

```bash
npm install nextui-hook-form
yarn add nextui-hook-form
```

## Usage

Import the element you need from the package:

Using with register

```jsx
import { Input } from "nextui-hook-form";
```

```jsx
function App() {
    const {
        register,
        formState: { errors },
    } = useForm < Inputs > {};

    return (
        <div>
            <Input
                name="name"
                label="Name"
                placeholder="Ex. John Doe"
                register={register}
                error={errors?.name}
                required
                classNames={"text-gray-500"}
            />
        </div>
    );
}
```

Using with control

```jsx
import { CheckBox } from "nextui-hook-form";
```

```jsx
function App() {
    const {
        control,
        formState: { errors },
    } = useForm < Inputs > {};

    return (
        <div>
            <Select name="country" label="Country" control={control} options={[]} error={errors?.country} selectionMode="multiple" />
        </div>
    );
}
```

## Development

To develop and build the package locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/teebarg/nextui-hook-form.git
```

2. Install dependencies:

```bash
npm install
```

3. Build the package:

```bash
npm run build
```

This will compile the TypeScript code into the `dist` directory.

## Contributing

Contributions are welcome! If you find any issues or want to add new icons, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
