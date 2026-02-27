(() => {
  // ns-hugo-params:<stdin>
  var data = { "2022-09-23": 2, "2022-09-24": 2, "2022-09-25": 1, "2023-03-18": 4, "2023-03-19": 1, "2023-03-20": 1, "2023-09-16": 2, "2023-09-17": 1, "2023-12-02": 5, "2023-12-05": 1, "2023-12-06": 3, "2023-12-08": 1, "2024-01-20": 1, "2024-01-22": 1, "2024-06-03": 2, "2024-08-30": 1, "2024-08-31": 1, "2024-12-01": 1, "2024-12-02": 1, "2024-12-03": 1, "2024-12-05": 1, "2024-12-07": 3, "2025-05-04": 1, "2025-06-14": 2, "2025-07-22": 1, "2026-01-18": 5, "2026-01-19": 2, "2026-01-20": 1 };

  // <stdin>
  if (data) {
    const calData = Object.keys(data).map((date) => ({
      date,
      total: data[date],
      details: [],
      summary: []
    }));
    const div_id = "calendar";
    const label = "Photos";
    const color = "#cd2327";
    const overview = "global";
    const handler = function(val) {
      console.log(val);
      window.location = "/about";
    };
    calendarHeatmap.init(calData, div_id, color, overview, handler, label);
  }
})();
