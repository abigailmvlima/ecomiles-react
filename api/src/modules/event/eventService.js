import Event from "./eventModel";

export async function createEvent(eventData) {
  try {
    const newEvent = new Event(eventData);
    return await newEvent.save();
  } catch (error) {
    throw error;
  }
}

export async function getAllEvents() {
  try {
    return await Event.find({});
  } catch (error) {
    throw error;
  }
}

export async function getEventById(eventId) {
  try {
    const event = await Event.findById(eventId);
    if (!event) {
      throw new Error("Evento não encontrado");
    }
    return event;
  } catch (error) {
    throw error;
  }
}

export async function updateEvent(eventId, updateData) {
  try {
    const event = await Event.findByIdAndUpdate(eventId, updateData, {
      new: true,
    });
    if (!event) {
      throw new Error("Evento não encontrado para atualizar");
    }
    return event;
  } catch (error) {
    throw error;
  }
}

export async function deleteEvent(eventId) {
  try {
    const event = await Event.findByIdAndDelete(eventId);
    if (!event) {
      throw new Error("Evento não encontrado para deletar");
    }
    return event;
  } catch (error) {
    throw error;
  }
}
