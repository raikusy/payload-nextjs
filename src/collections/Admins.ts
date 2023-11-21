import { CollectionConfig } from "payload/types";

export const Admins: CollectionConfig = {
  slug: "admins",
  auth: {
    tokenExpiration: 7200, // How many seconds to keep the user logged in
    verify: true, // Require email verification before being allowed to authenticate
    maxLoginAttempts: 5, // Automatically lock a user out after X amount of failed logins
    lockTime: 600 * 1000, // Time period to allow the max login attempts
    // More options are available
  },
  fields: [
    {
      name: "role",
      type: "select",
      required: true,
      options: ["user", "admin", "editor", "developer"],
    },
  ],
};
