import express from "express"
import bootstrap from "./startup/bootstrap.js"
const app = express()

await bootstrap(app)
