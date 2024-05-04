# Multi-Tenant B2B Application with Stytch (AI-Generated)

This repository provides a streamlined implementation of user authentication for your multi-tenant B2B application, leveraging the robust capabilities of Stytch.

## Key Features:

- **Multi-Tenant Support (Future Implementation):** Stytch's data model seamlessly accommodates multi-tenancy, allowing organizations to manage user access independently. This functionality is not currently implemented but can be integrated in the future with features like:
  - Per-organization settings for customization.
  - Membership management for controlling access within organizations.
  - Flexible onboarding options, including self-serve signups and enterprise integration.
- **Secure Authentication:** Stytch offers a variety of secure authentication methods you can explore and integrate into your application:
  - **Email Authentication (Implemented):** Send secure one-time login links via email for a seamless sign-in experience. (Currently implemented)
  - **Social Login (OAuth with Google Implemented):** Integrate with Google's OAuth service for convenient user login. (Google OAuth is implemented)
- **Role-Based Access Control (RBAC) (Future Implementation):** Define granular access controls within organizations, ensuring users only have the permissions required for their roles. This functionality can be added later.
- **Easy Integration:** Stytch provides well-documented SDKs and APIs for both frontend and backend integration, simplifying the authentication process.

## Getting Started

1. **Prerequisites:**

   - A Stytch account ([https://stytch.com/](https://stytch.com/))
   - Node.js and pnpm installed on your development machine

2. **Clone this Repository:**

   ```bash
   git clone https://github.com/snowin-jj/multi-tenant-app
   cd multi-tenant-app
   ```

3. **Install Dependencies:**

   ```bash
   pnpm install
   ```

4. **Configure Stytch Credentials:**

   - **Get API Keys**

     - Create a Stytch project and obtain your project ID and secret.
     - Create a `.env` file in the project root directory (ignore this file in version control) and add the following environment variables, replacing the placeholders with your actual values:

     ```
     VITE_STYTCH_PROJECT_ENV=test
     VITE_STYTCH_PUBLIC_TOKEN=your_stytch_public_token
     ```

     These values can be found in your Stytch Dashboard: [https://stytch.com/docs/guides/dashboard/api-keys](https://stytch.com/docs/guides/dashboard/api-keys)

   - **Front SDK**

     - Add your local development domain to the `Front SDK` settings in your Stytch Dashboard: [https://stytch.com/docs/guides/passwords/sdk](https://stytch.com/docs/guides/passwords/sdk).
     - Enable the appropriate authentication mechanisms in the `Authentication products` section.

   - **Redirect URLs**

     - Add the redirect URL ([https://stytch.com/dashboard/redirect-urls](https://stytch.com/dashboard/redirect-urls)). In this project it is `http://localhost:5173/authenticate`

   - **OAuth (Google Implemented)**
     - If you plan to use social login, add the OAuth credentials for Google in your Stytch Dashboard: [https://stytch.com/products/oauth](https://stytch.com/products/oauth). (Currently implemented for Google)

5. **Run the Application:**

   ```bash
   pnpm dev
   ```

   This will typically start a development server, allowing you to access the application in your browser (usually at http://localhost:5173 or a similar address).

**Additional Notes:**

- This README provides a general overview. Refer to the Stytch documentation ([https://stytch.com/docs/api](https://stytch.com/docs/api)) for detailed instructions on configuration, using specific features, and advanced customization.
- Consider security best practices throughout development.
- Feel free to adapt and extend this codebase to suit your specific application requirements.

**Please note:** This project is currently a demonstration of email authentication and Google OAuth. Multi-tenant features and RBAC are not yet implemented but can be integrated in the future.
