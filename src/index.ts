import { configServer } from "@mayajs/core";
import cors from "cors";
import parser from "body-parser";
import { AppModule } from "./app.module";

const plugins = [cors(), parser.urlencoded({ extended: false }), parser.json()];
configServer(3333).usePlugins(plugins).bootstrapModule(AppModule);
