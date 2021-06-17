import { Get, Patch, Post, Delete, Put } from "@mayajs/common";
import { MayaJsContext } from "@mayajs/router";
import { Controller } from "@mayajs/core";
import { TodosServices } from "./todos.service";

interface IRouteRequest {
  message: string;
  data: any;
}

@Controller()
export class TodosController {
  constructor(private services: TodosServices) {}

  @Post()
  async create({ body }: MayaJsContext): Promise<IRouteRequest> {
    const data = await this.services.create(body);
    return { message: "Successfully added a todo.", data: [data] };
  }

  @Get()
  async get(): Promise<IRouteRequest> {
    const data = await this.services.get();
    return { message: "Successfully get all todo(s).", data };
  }

  @Get("/:id")
  async getById({ params }: MayaJsContext): Promise<IRouteRequest> {
    const data = {};
    return { message: "Successfully get a todo by id.", data: [data] };
  }

  @Put("/:id")
  async replace({ body, params }: MayaJsContext): Promise<IRouteRequest> {
    const data = {};
    return { message: "Successfully replaced a todo by id.", data: [data] };
  }

  @Patch("/:id")
  async update({ body, params }: MayaJsContext): Promise<IRouteRequest> {
    const data = {};
    return { message: "Successfully updated a todo by id.", data: [data] };
  }

  @Delete("/:id")
  async delete({ params }: MayaJsContext): Promise<IRouteRequest> {
    const data = {};
    return { message: "Successfully deleted a todo by id.", data: [data] };
  }
}
