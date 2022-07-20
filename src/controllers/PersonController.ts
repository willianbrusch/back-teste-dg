import { Request, Response } from "express";

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
}
