import prismaClient from "../../prisma";
export class ListCategoryService {
  async execute() {
    const category = prismaClient.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return category;
  }
}
