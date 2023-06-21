"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
app.use((0, cors_1.default)());
app.get("/ping", (req, res) => {
    console.log("alguien ha dado pin!!");
    res.setHeader("Content-Type", "application/json");
    res.send("body");
});
app.get("/hola/:nombre/:apellido", (req, res) => {
    console.log("alguien ha dado pin!!");
    res.setHeader("Content-Type", "application/json");
    const nombre = req.params.nombre;
    const apellido = req.params.apellido;
    console.log("alguien ha ingresado su nombre");
    res.send({ nombre, apellido });
});
app.listen(PORT, () => {
    console.log(`running application ${PORT}`);
});
