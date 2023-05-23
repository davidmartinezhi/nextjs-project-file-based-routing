export async function getAllEvents() {
  const response = await fetch(
    "https://next-js-course-3b06b-default-rtdb.firebaseio.com/events.json"
  );

  const data = await response.json();

  const transformedEvents = [];

  for (const key in data) {
    transformedEvents.push({
      id: key,
      ...data[key],
    });
  }

  return transformedEvents;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = getAllEvents();
  return (await allEvents).find((event) => event.id === id);
}
