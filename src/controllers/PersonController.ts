import { Request, Response } from "express";
import { AppDataSource } from "../dataSource";
import { Person } from "../entities/Person";

import { AppError } from "../errors/appError";
import { personsRepository } from "../repositories/personsRepository";

export class PersonController {
  async create(request: Request, response: Response) {
    const { name, birth_date } = request.body;

    if (!name && !birth_date) {
      throw new AppError("Name and birth date is necessary!");
    }

    const personAlreadyExists = await personsRepository.findOneBy({ name });

    if (personAlreadyExists) {
      throw new AppError("Person already exists!");
    }

    const newPerson = personsRepository.create({ name, birth_date });

    await personsRepository.save(newPerson);

    return response.status(201).json(newPerson);
  }

  async update(request: Request, response: Response) {
    const { id, name, birth_date } = request.body;

    const person = await personsRepository.findOneBy({ id });

    if (!person) {
      throw new AppError("Person not found!");
    }

    person.name = name;
    person.birth_date = birth_date;

    await personsRepository.save(person);

    return response.status(200).json(person);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    console.log(id);

    const person = await personsRepository.findOneBy({ id });
    console.log(person);
    if (!person) {
      throw new AppError("Person not found!");
    }

    await personsRepository.remove(person);

    return response.status(201).json({ message: "Person deleted!" });
  }

  async getAllPersons(request: Request, response: Response) {
    const allPersons = await AppDataSource.manager.find(Person);

    return response.status(201).json(allPersons);
  }
}
