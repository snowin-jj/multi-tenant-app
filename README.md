# Multi-Tenant B2B Application with Stytch

This repository provides a streamlined implementation of user authentication for your multi-tenant B2B application, leveraging the robust capabilities of Stytch.

## Key Features:

- **Multi-Tenant Support:** Stytch's data model seamlessly handles multi-tenancy, allowing organizations to manage their user access independently with features like:
  - Per-organization settings for customization.
  - Membership management for controlling access within organizations.
  - Flexible onboarding options, including self-serve signups and enterprise integration.
- **Secure Authentication:** Stytch offers a variety of secure authentication methods to suit your application's needs:
  - Magic Links: Send secure one-time login links via email for a seamless sign-in experience.
  - Social Login: Integrate with popular social providers for convenient user login.
- **Role-Based Access Control (RBAC):** Define granular access controls within organizations, ensuring that users only have the permissions required for their roles.
- **Easy Integration:** Stytch provides well-documented SDKs and APIs for both frontend and backend integration, simplifying the authentication process.

## Getting Started

1. **Prerequisites:**

   - A Stytch account ([https://stytch.com/](https://stytch.com/))
   - Node.js and npm (or yarn) installed on your development machine

2. **Clone this Repository:**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

3. **Install Dependencies:**

   ```bash
   npm install (or yarn install)
   ```

4. **Configure Stytch Credentials:**

   - **Get API keys**

     - Create a Stytch project and obtain your project ID and secret.
     - Create a `.env` file in the project root directory (ignore this file in version control) and add the following environment variables, replacing the placeholders with your actual values:

     ```
     VITE_STYTCH_PROJECT_ENV=test
     VITE_STYTCH_PUBLIC_TOKEN=your_project_secret
     ```

     The above values may be found in your Stytch Dashboard: https://stytch.com/dashboard/api-keys

   - **Front SDK**

     - Add your local development domain to the `Front SDK` which found: https://stytch.com/dashboard/sdk-configuration.
     - If you scroll down a bit, you will find a section called `Authentication products`. Enable the authentication mechanisms that are needed.

   - **Redirect URLs**

     - Add the redirect URL (https://stytch.com/dashboard/redirect-urls). In this project it is `http://localhost:5173/authenticate`

   - **OAuth**
     - Finally, add the Oauth credentials for the Google Provider. (https://stytch.com/dashboard/oauth)

5. **Run the Application:**

   ```bash
   npm start (or yarn start)
   ```

   This will typically start a development server, allowing you to access the application in your browser (usually at http://localhost:5173 or a similar address).

**Additional Notes:**

- This README provides a general overview. Refer to the Stytch documentation ([https://stytch.com/docs/](https://stytch.com/docs/)) for detailed instructions on configuration, using specific features, and advanced customization.
- Consider security best practices throughout development.
- Feel free to adapt and extend this codebase to suit your specific application requirements.

## Ref:

- https://stytch.com
- https://stytch.com/docs/b2b
- https://console.cloud.google.com/apis/credentials
- https://www.youtube.com/watch?v=u1weV_oPZFo
