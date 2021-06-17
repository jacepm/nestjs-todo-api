import { Service } from "@mayajs/core";

interface ITodos {
  _id?: string;
  title: string;
  completed?: boolean;
}

@Service()
export class TodosServices {
  constructor() {}
}
