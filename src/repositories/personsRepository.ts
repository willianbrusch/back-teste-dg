import { AppDataSource } from "../data-source";
import { Person } from "../entities/Person";

export const personsRepository = AppDataSource.getRepository(Person);
