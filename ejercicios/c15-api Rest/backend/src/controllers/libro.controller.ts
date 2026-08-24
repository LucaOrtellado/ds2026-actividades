import { Request, Response } from 'express';
import * as libroService from '../services/libro.service';

export function getAll(req: Request, res: Response): void {
  const { genero } = req.query;
  const filtroGenero = typeof genero === 'string' ? genero : undefined;
  res.json(libroService.findAll(filtroGenero));
}

export function getById(req: Request, res: Response): void {
  const id = Number(req.params.id);
  const libro = libroService.findById(id);

  if (!libro) {
    res.status(404).json({ error: 'Libro no encontrado' });
    return;
  }

  res.json(libro);
}

export function create(req: Request, res: Response): void {
  const nuevo = libroService.create(req.body);
  res.status(201).json(nuevo);
}

export function update(req: Request, res: Response): void {
  const id = Number(req.params.id);
  const actualizado = libroService.update(id, req.body);

  if (!actualizado) {
    res.status(404).json({ error: 'Libro no encontrado' });
    return;
  }

  res.json(actualizado);
}

export function remove(req: Request, res: Response): void {
  const id = Number(req.params.id);
  const ok = libroService.remove(id);

  if (!ok) {
    res.status(404).json({ error: 'Libro no encontrado' });
    return;
  }

  res.status(204).send();
}