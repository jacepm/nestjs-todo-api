import { Service } from "@mayajs/core";
import { MongoDbServices } from "@mayajs/mongo";
import { PaginateModel } from "mongoose";
import { ITodos, ITodosModel } from "../interfaces";

@Service()
export class TodosServices {
  constructor(private mongo: MongoDbServices) {}

  get model(): PaginateModel<ITodosModel> {
    const db = this.mongo.database("test");
    return <any>db.instance.model("Todos");
  }

  async create(body: ITodos): Promise<ITodosModel> {
    const result = await this.model.create(body);
    return result;
  }

  async get(): Promise<ITodosModel[]> {
    const result = await this.model.find();
    return result;
  }

  async getById(id: string): Promise<ITodosModel | null> {
    const result = await this.model.findById(id);
    return result;
  }

  async replace(id: string, body: ITodos): Promise<ITodosModel | null> {
    const result = await this.model.findByIdAndUpdate(id, body, { new: true });
    return result;
  }

  async update(id: string, body: ITodos): Promise<ITodosModel | null> {
    const result = await this.model.findByIdAndUpdate(id, body, { new: true });
    return result;
  }

  async delete(id: string): Promise<ITodosModel | null> {
    const result = await this.model.findByIdAndDelete(id);
    return result;
  }
}
