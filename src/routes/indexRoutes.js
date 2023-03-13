import { Router } from "express";
import { agregarCelular, deleteCelular,  listarCelular,  renderCelular,  statusCelular,  traerCelular,  updateCelular } from "../controllers/celularController";
import Celular from "../models/Celular";

const router = Router();

// Celular
router.get("/index", renderCelular);

router.get("/celular/agregar", async (req, res) => {
  const celular = await Celular.find().lean();
  res.render("agregarCelular", { celular: celular });
});

router.post("/celular/agregar", agregarCelular);

router.get("/celular/agregar", listarCelular);

router.get("/update/:id", traerCelular);

router.post("/update/:id", updateCelular);

router.get("/delete/:id", deleteCelular);

router.get("/status/:id", statusCelular);

export default router;
