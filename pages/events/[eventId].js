import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import { Fragment } from "react";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/button";

function EventDetailPage() {
  const router = useRouter(); //use router object
  const eventId = router.query.eventId; //access to query in key "eventId"

  const event = getEventById(eventId); //get event

  if (!event) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No event found :(</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/">All Events Page</Button>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;
