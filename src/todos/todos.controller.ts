import { Get, Patch, Post, Delete, Put } from "@mayajs/common";
import { MayaJsContext } from "@mayajs/router";
import { Controller } from "@mayajs/core";
import { TodosServices } from "./todos.service";

@Controller()
export class TodosController {
  constructor(private services: TodosServices) {}

  @Post()
  async create({ body }: MayaJsContext): Promise<any> {
    return { message: "From TodosController POST route", body };
  }

  @Get()
  async get(): Promise<any> {
    return { message: "From TodosController GET route" };
  }

  @Get("/:id")
  async getById({ params }: MayaJsContext): Promise<any> {
    return { message: "From TodosController GET route with params ID", params };
  }

  @Put("/:id")
  async replace({ body, params }: MayaJsContext): Promise<any> {
    return { message: "From TodosController PUT route", body, params };
  }

  @Patch("/:id")
  async update({ body, params }: MayaJsContext): Promise<any> {
    return { message: "From TodosController PATCH route", body, params };
  }

  @Delete("/:id")
  async delete({ params }: MayaJsContext): Promise<any> {
    return { message: "From TodosController DELETE route", params };
  }
}
