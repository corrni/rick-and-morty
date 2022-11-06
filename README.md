# Rick & Morty Characters

This app is a simple listing of Rick and Morty characters.

## Running the application

### Development server

To run the development server:
1. Start by running `yarn install` on your terminal to install all dependencies
2. In the root directory, create a file for environment variables by running `cp .env.sample .env.local`
3. Open the newly-created `.env.local` file, and ensure that the `GRAPHQL_ENDPOINT` environment variable points to the Rick & Morty GraphQL API (https://rickandmortyapi.com/graphql)
4. Generate GraphQL types by running `yarn codegen`
5. Run `yarn dev` to start the app

After following the instructions above, simply open `http://localhost:3000` in your browser.

### Production Build

To run a production build, please follow steps 1-4 above, and then:
5. Build the app by running `yarn build`
6. Start the server by running `yarn start`

Just as with the dev server, you should then be able to open the app in your browser (http://localhost:3000)
