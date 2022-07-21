import { AppDataSource } from "../dataSource";
import { Person } from "../entities/Person";

export const personsRepository = AppDataSource.getRepository(Person);
