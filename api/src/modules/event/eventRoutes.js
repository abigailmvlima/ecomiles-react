import express from 'express';
import { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent } from './eventService';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const event = await createEvent(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const events = await getAllEvents();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const event = await getEventById(req.params.id);
    res.status(200).json(event);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const event = await updateEvent(req.params.id, req.body);
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const event = await deleteEvent(req.params.id);
    res.status(200).json({ message: 'Evento deletado com sucesso', event });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
