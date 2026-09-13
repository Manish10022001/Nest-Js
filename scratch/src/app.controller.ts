import { Controller, Get } from "@nestjs/common";

@Controller("/app") //we give parent route
export class AppController {
  @Get() //child route of parent (/app/)
  getRootRoute() {
    return "Hi there!!";
  }

  @Get("/bye") //app/bye
  getByeThere() {
    return "Bye There !!";
  }
}
