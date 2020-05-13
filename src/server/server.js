import menuJson from './menuData.json'
import { Server } from "miragejs"

export function makeServer() {
  let server = new Server({
    routes() {
      this.namespace = "/api"
      this.get("/menu", () => menuJson.MenuSections);
    },
  })

  return server
}