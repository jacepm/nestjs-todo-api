import { Module } from "@mayajs/core";
import { RouterModule } from "@mayajs/router";
import { MongoDbModule } from "@mayajs/mongo";
import { routes } from "./app.routing.module";
import { AppController } from "./app.controller";

export const mongoOptions = {
  connectionString: "mongodb://127.0.0.1:27017",
  name: "test",
  options: { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false },
  schemas: [],
};

@Module({
  declarations: [AppController],
  imports: [RouterModule.forRoot(routes), MongoDbModule.forRoot(mongoOptions)],
  providers: [],
  bootstrap: AppController,
})
export class AppModule {}
