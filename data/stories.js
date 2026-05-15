// ─────────────────────────────────────────────────────────────────
// Alternate Tomorrows — catalog metadata
// Add a new entry here when publishing a story or vignette.
// Stories: include `file` pointing to stories/{slug}.html
// Vignettes: include `file` pointing to vignettes/{slug}.html
// ─────────────────────────────────────────────────────────────────

const STORIES = [
  { no: "0021", title: "The Quiet After",          premise: "In the cities that adapted, the loudest thing left was birds.",          date: "Apr 18, 2026", year: 2026, tags: ["Climate", "Culture"],          file: "stories/0021-the-quiet-after.html" },
  { no: "0020", title: "Orbit, Domestic",          premise: "Three hundred kilometers up, someone is folding laundry.",                date: "Apr 02, 2026", year: 2026, tags: ["Space", "Work"],              file: null },
  { no: "0019", title: "The Long Repair",          premise: "Infrastructure is easy. Trust is the hard part.",                         date: "Mar 21, 2026", year: 2026, tags: ["Governance", "Energy", "Work"], file: null },
  { no: "0018", title: "Children of the Signal",   premise: "They grew up with more bandwidth than borders.",                           date: "Mar 04, 2026", year: 2026, tags: ["Identity", "Technology"],      file: null },
  { no: "0017", title: "Grafted",                  premise: "The tree remembers what its donor forgot.",                                date: "Feb 17, 2026", year: 2026, tags: ["Biotech", "Memory", "Climate"], file: null },
  { no: "0016", title: "The Memory Keepers",       premise: "Some libraries don't store books.",                                        date: "Feb 02, 2026", year: 2026, tags: ["Memory", "Culture"],           file: null },
  { no: "0015", title: "Before the Flood Maps",    premise: "We argued about predictions. They built anyway.",                          date: "Jan 19, 2026", year: 2026, tags: ["Climate", "Governance"],       file: null },
  { no: "0014", title: "Left to the Algorithms",   premise: "A fable about convenience and surrender.",                                 date: "Jan 05, 2026", year: 2026, tags: ["AI", "Identity"],              file: null },
  { no: "0013", title: "Night Shift, Grid Edge",   premise: "Two operators, one storm, an inheritance of cables.",                      date: "Dec 14, 2025", year: 2025, tags: ["Energy", "Work", "Climate"],   file: null },
  { no: "0012", title: "The Slow Network",         premise: "On the year we agreed to wait.",                                           date: "Nov 30, 2025", year: 2025, tags: ["Technology", "Culture"],       file: null },
  { no: "0011", title: "Houses That Listened",     premise: "A neighborhood learns when to look away.",                                 date: "Nov 12, 2025", year: 2025, tags: ["Technology", "Identity"],      file: null },
  { no: "0010", title: "Last Train to Antwerp",    premise: "What a continent does when it agrees, finally, to slow down.",             date: "Oct 27, 2025", year: 2025, tags: ["Mobility", "Climate"],         file: null },
  { no: "0009", title: "The Inheritance",          premise: "What a model leaves behind when no one renews the lease.",                 date: "Oct 09, 2025", year: 2025, tags: ["AI", "Memory"],               file: null },
  { no: "0008", title: "Saltwater Schools",        premise: "Teaching arithmetic in a tide-shifted classroom.",                         date: "Sep 22, 2025", year: 2025, tags: ["Education", "Climate"],        file: null },
  { no: "0007", title: "Open Source Country",      premise: "A small republic publishes its operating manual. Anyone can fork.",        date: "Sep 04, 2025", year: 2025, tags: ["Governance", "Technology"],    file: null },
  { no: "0006", title: "Lichen, Inc.",             premise: "The corporation, miniature and slow, with a forty-year roadmap.",          date: "Aug 18, 2025", year: 2025, tags: ["Biotech", "Work"],             file: null },
  { no: "0005", title: "Pilgrim Routes",           premise: "Old maps for new walks, post-engine.",                                     date: "Jul 30, 2025", year: 2025, tags: ["Mobility", "Culture"],         file: null },
  { no: "0004", title: "The Quiet Office",         premise: "Six people, a kettle, and the end of metrics.",                            date: "Jul 12, 2025", year: 2025, tags: ["Work", "Culture"],             file: null },
  { no: "0003", title: "Songs for the In-Between", premise: "What music does to a city without rush hours.",                            date: "Jun 21, 2025", year: 2025, tags: ["Culture", "Mobility"],         file: null },
  { no: "0002", title: "The Last Commute",         premise: "One driver. One morning. One last route.",                                 date: "May 09, 2025", year: 2025, tags: ["Work", "Mobility"],            file: null },
  { no: "0001", title: "Mirrors of the Republic",  premise: "Government by reflection, not representation.",                            date: "Apr 14, 2025", year: 2025, tags: ["Governance", "Identity"],       file: null },
];

const VIGNETTES = [
  { no: "0010", title: "The Last Name We Kept",      tags: ["Identity", "Memory"],      file: null },
  { no: "0009", title: "Legacy Mode",                tags: ["Technology", "Memory"],    file: null },
  { no: "0008", title: "A Day Without Metrics",      tags: ["Work"],                    file: null },
  { no: "0007", title: "The Local Treaty",           tags: ["Governance"],              file: null },
  { no: "0006", title: "Prime Meridian Drift",       tags: ["Climate", "Governance"],   file: null },
  { no: "0005", title: "Songs for the In-Between",   tags: ["Culture"],                 file: null },
  { no: "0004", title: "What the Lake Remembered",   tags: ["Memory", "Climate"],       file: null },
  { no: "0003", title: "Sourdough, Inheritance",     tags: ["Biotech", "Culture"],      file: null },
  { no: "0002", title: "Two A.M., the Substation",   tags: ["Energy", "Work"],          file: null },
  { no: "0001", title: "Postcards from Low Orbit",   tags: ["Space"],                   file: null },
];

const TAGS = [
  "All",
  "AI", "Climate", "Governance", "Identity", "Technology",
  "Work", "Culture", "Biotech", "Memory", "Energy",
  "Mobility", "Space", "Education",
];
