# React Test App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Purpose

This project demonstrates how to configure a React application to read from a `config.json` file after being built using the `npm run build` command.

## Methods and Findings

By placing the `config.json` file in the `public` folder, it is included in the `build` folder during the build process. This allows the application to access the configuration data from `build/config.json`.

This approach enables the codebase to be built once and the `config.json` file to be replaced on a client-by-client basis, providing flexibility in configuration for different deployments.

## Usage

1. **Place `config.json` in the `public` folder**:
   
   Ensure that the `config.json` file is located in the `public` directory of the project.

2. **Build the project**:

   ```bash
   npm run build
   ```

   This will generate the production-ready files in the `build` directory, including the `config.json` file.

3. **Serve the build**:

   Use a server to serve the build files. For example, you can use `apache` or `nginx`:

4. **Replace `config.json` as needed**:

   You can replace the `config.json` file in the `build` directory to customize the configuration for different clients without rebuilding the entire application.

## Conclusion

By following this method, we can build the React application once and easily update its configuration by replacing the `config.json` file, making it flexible and adaptable for various deployment scenarios.