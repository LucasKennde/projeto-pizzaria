import prismaClient from "../../prisma";

export class CreateCategoryService {
  async execute(name: string) {
    if (name.trim() == "") {
      throw new Error("Name is required");
    }
    const categoryAlreadyExists = await prismaClient.category.findFirst({
      where: {
        name,
      },
    });
    if (categoryAlreadyExists) {
      throw new Error("Category already exists");
    }
    const category = await prismaClient.category.create({
      data: {
        name: name,
      },
      select: {
        id: true,
        name: true,
      },
    });

    return category;
  }
}
