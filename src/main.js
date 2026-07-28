import bootstrap from "./app.controller.js"
import express from "express"


const app = express()
await bootstrap(app)

export default app


