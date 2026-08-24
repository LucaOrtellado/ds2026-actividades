import { Request, Response } from 'express';
import * as autorService from '../services/autor.service';

export function getAll(req: Request, res: Response): void {
  const { nacionalidad } = req.query;
  const filtroNacionalidad = typeof nacionalidad === 'string' ? nacionalidad : undefined;
  res.json(autorService.findAll(filtroNacionalidad));
}

export function getById(req: Request, res: Response): void {
  const id = Number(req.params.id);
  const autor = autorService.findById(id);

  if (!autor) {
    res.status(404).json({ error: 'Autor no encontrado' });
    return;
  }

  res.json(autor);
}

export function create(req: Request, res: Response): void {
  const nuevo = autorService.create(req.body);
  res.status(201).json(nuevo);
}

export function update(req: Request, res: Response): void {
  const id = Number(req.params.id);
  const actualizado = autorService.update(id, req.body);

  if (!actualizado) {
    res.status(404).json({ error: 'Autor no encontrado' });
    return;
  }

  res.json(actualizado);
}

export function remove(req: Request, res: Response): void {
  const id = Number(req.params.id);
  const ok = autorService.remove(id);

  if (!ok) {
    res.status(404).json({ error: 'Autor no encontrado' });
    return;
  }

  res.status(204).send();
}