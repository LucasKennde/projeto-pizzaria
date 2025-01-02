import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/categories/createCategoryService";
export class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;
    const createCategoryService = new CreateCategoryService();
    const category = await createCategoryService.execute(name);
    return res.status(201).json(category);
  }
}
