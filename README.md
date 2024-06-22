# NextUI Hook Form

Beautiful form elements built with NextUi and React Hook Form

## Installation

You can install the package from the GitHub repository using npm or yarn:

```bash
npm install github:teebarg/nextui-hook-form
yarn add github:teebarg/nextui-hook-form
```

## Usage

Import the element you need from the package:

```jsx
import { CheckBox } from "nextui-hook-form";
```

Then, use the icons as React components in your application:

```jsx
function App() {
    return (
        <div>
            <CheckBox />
        </div>
    );
}
```

### Props

The icon components accept the following props:

-   size (number, optional): The size of the icon in pixels. If not provided, the default size of 36 will be used.
-   width (number, optional): The width of the icon in pixels.
-   height (number, optional): The height of the icon in pixels.
-   Any other valid SVG props (e.g., fill, stroke, className, etc.).

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
