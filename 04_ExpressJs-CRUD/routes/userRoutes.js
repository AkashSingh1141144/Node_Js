const express = require("express");

const {
  home,
  createUser,
  getUsers,
  deleteUser,
  updateUser,
} = require("../controllers/userControler.js");

const router = express.Router();
router.get("/", home);
router.post("/createuser", createUser);
router.get("/getusers", getUsers);
router.delete("/deleteuser/:id", deleteUser);
router.put("/updateuser/:id", updateUser);

module.exports = router;

// TODO:
// Assignment

// what the deff between put() and patch()

/*

PUT Method
Purpose: The PUT method is used to update an existing resource or create a new resource if it does not exist.
Behavior: When using PUT, you typically send the entire resource in the request body. The server is expected to replace the existing resource with the one provided in the request.
Idempotency: PUT requests are idempotent, meaning that making multiple identical requests should have the same effect as making a single request.
Usage Example: If you have a user resource and you want to update the user's details, you would send the entire user object in the request body.


PATCH Method
Purpose: The PATCH method is used to apply partial updates to an existing resource.
Behavior: When using PATCH, you send only the fields that you want to update in the request body. The server is expected to merge these changes with the existing resource.
Idempotency: PATCH requests can also be idempotent, but this depends on how the server handles the updates. Generally, applying the same PATCH request multiple times should have the same effect as applying it once.
Usage Example: If you want to update only the email address of a user, you would send just the email field in the request body.

Key Differences
Scope of Update:

PUT: Replaces the entire resource.
PATCH: Applies partial modifications to the resource.
Request Body:

PUT: Requires the complete representation of the resource.
PATCH: Requires only the fields that need to be updated.
Idempotency:

Both are idempotent in theory, but PUT is more consistently idempotent because it always sends the entire resource. PATCH can be idempotent depending on how the server processes partial updates.


When to Use Which?
Use PUT: When you want to replace the entire resource or create the resource if it does not exist.
Use PATCH: When you want to make partial updates to an existing resource and only need to send the modified fields.
*/
