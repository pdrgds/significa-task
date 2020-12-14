function findBusyTimes(intervals) {
  const sortedIntervals = [...intervals].sort(({ begin: a }, { begin: b }) => a - b);
  const firstInterval = sortedIntervals[0];
  const subsequentIntervals = sortedIntervals.slice(1);

  return subsequentIntervals.reduce(
    (busyTimes, currentInterval) => {
      const lastBusyTime = busyTimes[busyTimes.length - 1];

      if (currentInterval.begin > lastBusyTime.end) {
        busyTimes.push(currentInterval);
      } else if (currentInterval.end > lastBusyTime.end) {
        lastBusyTime.end = currentInterval.end;
      }

      return busyTimes;
    },
    [firstInterval]
  );
}

module.exports = { findBusyTimes };
