import "dotenv/config"
import express, { Application, Request, Response, NextFunction } from "express" // eslint-disable-line
import createServer from "@src/server"

const startServer = () => {
  const app = createServer()
  const port: number = parseInt(<string>process.env.PORT, 10)

  app.listen(port, () => {
    // console.log("Server running on port %d", port)
    if (process.env.NODE_ENV === "production") {
      console.clear()
      console.log("api - Production environment")
    } else console.log("- - - LOCAL ENVIRONMENT - - -")

    console.log("api -", `Server running on port ${port}`)
  })
}

startServer()
