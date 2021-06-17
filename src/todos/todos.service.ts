import { Service } from "@mayajs/core";
import { MongoDbServices } from "@mayajs/mongo";
import { Document, PaginateModel } from "mongoose";

interface ITodos {
  title: string;
  completed?: boolean;
}

interface IDateStamps {
  createdAt: string;
  updatedAt: string;
}

interface ITodosModel extends ITodos, IDateStamps, Document {}

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

  async getById(id: string): Promise<ITodosModel> {
    const result: any = await this.model.findById(id);
    return result;
  }

  replace(id: string, body: ITodos) {}

  update(id: string, body: ITodos) {}

  delete(id: string) {}
}
