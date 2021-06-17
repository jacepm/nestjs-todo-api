import { Document } from "mongoose";

export interface ITodos {
  title: string;
  completed?: boolean;
}

export interface IDateStamps {
  createdAt: string;
  updatedAt: string;
}

export interface IRouteRequest {
  message: string;
  data: any[];
}

export interface ITodosModel extends ITodos, IDateStamps, Document {}
