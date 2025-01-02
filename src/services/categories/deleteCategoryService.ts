import prismaClient from "../../prisma";

export class DeleteCategoryService {
  async execute(id: string) {
    try {
      const category = await prismaClient.category.delete({
        where: {
          id: id,
        },
      });
    } catch (err) {
      throw new Error("Category not exists ");
    }
  }
}
