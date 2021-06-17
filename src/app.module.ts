import { Module } from "@mayajs/core";
import { RouterModule } from "@mayajs/router";
import { routes } from "./app.routing.module";
import { AppController } from "./app.controller";

@Module({
  declarations: [AppController],
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: AppController,
})
export class AppModule {}
