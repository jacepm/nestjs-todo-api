import { Service } from "@mayajs/core";
import { MongoDbServices } from "@mayajs/mongo";
import { Document, PaginateModel } from "mongoose";

interface ITodos {
  title: string;
  completed?: boolean;
}

interface IDateStamps {
  DateCreated: string;
  DateUpdated: string;
}

interface ITodosModel extends ITodos, IDateStamps, Document {}

@Service()
export class TodosServices {
  constructor(private mongo: MongoDbServices) {}

  get model(): PaginateModel<ITodosModel> {
    const db = this.mongo.database("test");
    return <any>db.instance.model("todos");
  }

  create(body: ITodos) {}

  get() {}

  getById(id: string) {}

  replace(id: string, body: ITodos) {}

  update(id: string, body: ITodos) {}

  delete(id: string) {}
}
