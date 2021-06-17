import { configServer } from "@mayajs/core";
import cors from "cors";
import { AppModule } from "./app.module";

configServer(3333).usePlugins([cors()]).bootstrapModule(AppModule);
