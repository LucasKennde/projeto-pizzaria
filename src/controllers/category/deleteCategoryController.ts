import { Request, Response } from "express";
import { DeleteCategoryService } from "../../services/categories/deleteCategoryService";

export class DeleteCategoryController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;
    const deleteCategoryService = new DeleteCategoryService();
    const result = await deleteCategoryService.execute(id);
    return res.status(200).json(result);
  }
}
