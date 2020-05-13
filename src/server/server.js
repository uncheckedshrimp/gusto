import menuJson from './menuData.json'
import { Server } from "miragejs"

// Mirage simulates using a server, intercepting requests and returning what is in the database,
// In this case, the json menu data.
export function makeServer() {
  let server = new Server({
    routes() {
      this.namespace = "/api"
      this.get("/menu", () => menuJson.MenuSections);
    },
  })

  return server
}