const express = require("express");
const route = express();
const bcrypt = require("bcrypt");
const Joi = require("joi");
const { User } = require("./../Models/Users");
const auth = require("../middleware/auth");

route.use(express.json());

route.get("/me", auth, async (req, res) => {
  const data = req.user;

  const user = await User.find({ _id: data.id }).select("-password");
  res.send(user);
});

route.post("/", async (req, res) => {
  const body = await req.body;

  const { error } = validate(body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: body.email });
  if (user) return res.status(400).send("Email already exists");

  user = User(body);

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();
  res.send(user);
});

function validate(body) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .min(6)
      .max(30),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .min(6)
      .max(30)
      .required(),
  });

  return schema.validate(body);
}

module.exports = route;
