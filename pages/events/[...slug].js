import { Fragment } from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/results-title/results-title";

function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  //get values from the array
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  //transfor received string data to numbers
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  //check that the year is a number
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <div>
        <h1>Invalid filter. Please adjust your values!</h1>
      </div>
    );
  }

  //get filtered Events
  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  //Check if filtered events are falsy or empty array
  if (!filteredEvents || filteredEvents.length == 0) {
    return <p>No events found for the chosen filter :/</p>;
  }

  //Date passed to result title
  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEventsPage;
