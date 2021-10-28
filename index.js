require("dotenv").config();

const mongoose = require("mongoose");

const env = process.env;

const DB_DRIVER = env.DB_DRIVER || "mongodb";
const DB_PORT = env.DB_PORT;
const DB_HOST = env.DB_HOST;
const DB_NAME = env.DB_NAME;
const DB_URL = `${DB_DRIVER}://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const InitDatabase = (
	{ uri: DB_URL, message = "MongoDB Connected" },
	option = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
		replicaSet: "rs",
	}
) =>
	mongoose
		.connect(DB_URL, option)
		.then(() => console.log(message))
		.catch((err) => console.log(err));

module.exports = InitDatabase;
