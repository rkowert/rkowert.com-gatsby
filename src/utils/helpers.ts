export function getBlogIndexPagePath(pageNumber: number) {
  return `/blog${pageNumber === 1 ? '' : `/page/${pageNumber}`}`;
}

/**
 * Format a blog post's reading time for display
 *
 * Borrowed from https://github.com/gaearon/overreacted.io/blob/e623f295c40648f156535d6ec0c92f3344649ccb/src/utils/helpers.js
 *
 * @param minutes Reading time of a blog post in number of minutes
 */
export function formatReadingTime(minutes: number) {
  // const cups = Math.round(minutes / 5);
  // if (cups > 5) {
  //   return `${new Array(Math.round(cups / Math.E))
  //     .fill('🍱')
  //     .join('')} ${minutes} min read`;
  // }
  // return `${new Array(cups || 1).fill('☕️').join('')} ${minutes} min read`;
  return `${minutes > 15 ? '🍲' : '☕️'} ${minutes} minute read`;
}

/**
 * Format a blog post date for display
 *
 * Borrowed from https://github.com/gaearon/overreacted.io/blob/e623f295c40648f156535d6ec0c92f3344649ccb/src/utils/helpers.js
 *
 * @param date String representing a date. Must be parseable by Date constructor.
 * @param lang [Optional] Defaults to the current user agent locale.
 */
export function formatPostDate(date: string, lang?) {
  if (typeof Date.prototype.toLocaleDateString !== 'function') {
    return date;
  }

  const args = [
    lang,
    { day: 'numeric', month: 'long', year: 'numeric' },
  ].filter(Boolean);
  return new Date(date).toLocaleDateString(...args);
}

export function slugize(str: string) {
  return (
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.toLowerCase())
      .join('-')
  );
}
