import { Router } from "express";
import { CreateUserController } from "./controllers/user/createUserController";
import { AuthUserController } from "./controllers/user/authUserController";
import { DetailUserController } from "./controllers/user/datailsUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/createCategoryController";
import { ListCategoryController } from "./controllers/category/listCategoryController";
import { DeleteCategoryController } from "./controllers/category/deleteCategoryController";

const router = Router();

//-- ROTAS DE USERS
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);

//-- ROTAS DE SERVIÇO
router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);
router.get("/categories", isAuthenticated, new ListCategoryController().handle);
router.delete(
  "/category",
  isAuthenticated,
  new DeleteCategoryController().handle
);
export { router };
