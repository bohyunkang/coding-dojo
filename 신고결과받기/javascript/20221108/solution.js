function solution(id_list, report, k) {
  const reports = [...new Set(report)].map((v) => v.split(' '));
  const reportCounts = new Map();
  const mailCounts = new Map();

  reports.forEach((report) => {
    reportCounts.set(report[1], reportCounts.get(report[1]) + 1 || 1);
  });

  reports.forEach((report) => {
    if (reportCounts.get(report[1]) >= k) {
      mailCounts.set(report[0], mailCounts.get(report[0]) + 1 || 1);
    }
  });

  return id_list.map((v) => mailCounts.get(v) || 0);
}
