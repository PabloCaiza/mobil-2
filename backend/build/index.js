"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const uuid_1 = require("uuid");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
app.use((0, cors_1.default)());
let names = [
    {
        id: (0, uuid_1.v4)(),
        firstName: 'Pablo',
        lastName: 'Caiza'
    },
    {
        id: (0, uuid_1.v4)(),
        firstName: 'Lea',
        lastName: 'Rolfes'
    }
];
app.get("/ping", (req, res) => {
    console.log("alguien ha dado pin!!");
    res.setHeader("Content-Type", "application/json");
    res.send("pong");
});
app.get("/hola/:nombre/:apellido", (req, res) => {
    console.log("alguien ha dado pin!!");
    res.setHeader("Content-Type", "application/json");
    const nombre = req.params.nombre;
    const apellido = req.params.apellido;
    console.log("alguien ha ingresado su nombre");
    res.send({ nombre, apellido });
});
app.get('/nombres', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(names);
});
app.post('/nombres', (req, res) => {
    names.push(Object.assign(Object.assign({}, req.body), { id: (0, uuid_1.v4)() }));
    res.status(201).end();
});
app.delete('/nombres/:id', (req, res) => {
    names = names.filter(n => n.id !== req.params.id);
    res.status(204).end();
});
app.get('/nombres/:id', (req, res) => {
    const searchedName = names.find(n => n.id === req.params.id);
    console.log(searchedName);
    if (!searchedName)
        res.status(404).end();
    res.send(searchedName);
});
app.listen(PORT, () => {
    console.log(`running application ${PORT}`);
});
