import { Module } from "@mayajs/core";
import { RouterModule } from "@mayajs/router";
import { MongoDbModule, MongoDbServices } from "@mayajs/mongo";
import { routes } from "./app.routing.module";
import { AppController } from "./app.controller";
import { TodosController } from "./todos/todos.controller";
import { TodosServices } from "./todos/todos.service";
import todos from "./todos/todos.model";

export const mongoOptions = {
  connectionString: "mongodb://127.0.0.1:27017",
  name: "test",
  options: { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false },
  schemas: [todos],
};

@Module({
  declarations: [AppController, TodosController],
  imports: [RouterModule.forRoot(routes), MongoDbModule.forRoot(mongoOptions)],
  providers: [MongoDbServices, TodosServices],
  bootstrap: AppController,
})
export class AppModule {}
