import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import sequelize from '../config/database.js';
import { DataTypes } from 'sequelize';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = {};

// Lê todos os arquivos de model exceto index.js
const files = fs.readdirSync(__dirname).filter(file =>
  file !== 'index.js' && file.endsWith('.js')
);

// Importa e registra os models
for (const file of files) {
  const modelPath = path.join(__dirname, file);
  const { default: modelFn } = await import(pathToFileURL(modelPath).href);
  const model = modelFn(sequelize, DataTypes);
  db[model.name] = model;
}

// Associa os relacionamentos
for (const modelName of Object.keys(db)) {
  if (typeof db[modelName].associate === 'function') {
    db[modelName].associate(db);
  }
}

db.sequelize = sequelize;

export default db;
