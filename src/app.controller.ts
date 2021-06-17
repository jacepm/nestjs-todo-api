import { Get, Patch, Post, Delete, Put } from "@mayajs/common";
import { MayaJsContext } from "@mayajs/router";
import { Controller } from "@mayajs/core";

@Controller()
export class AppController {
  @Post()
  async create({ body }: MayaJsContext): Promise<any> {
    return { message: "From AppController POST route", body };
  }

  @Get()
  async read(): Promise<any> {
    return { message: "From AppController GET route" };
  }

  @Get("/:id")
  async readById({ params }: MayaJsContext): Promise<any> {
    return { message: "From AppController GET route with params ID", params };
  }

  @Put("/:id")
  async replace({ body, params }: MayaJsContext): Promise<any> {
    return { message: "From AppController PUT route", body, params };
  }

  @Patch("/:id")
  async update({ body, params }: MayaJsContext): Promise<any> {
    return { message: "From AppController PATCH route", body, params };
  }

  @Delete("/:id")
  async delete({ params }: MayaJsContext): Promise<any> {
    return { message: "From AppController DELETE route", params };
  }
}
