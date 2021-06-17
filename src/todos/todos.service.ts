import { Service } from "@mayajs/core";

interface ITodos {
  _id?: string;
  title: string;
  completed?: boolean;
}

@Service()
export class TodosServices {
  constructor() {}

  create(body: ITodos) {}

  get() {}

  getById(id: string) {}

  replace(id: string, body: ITodos) {}

  update(id: string, body: ITodos) {}

  delete(id: string) {}
}
