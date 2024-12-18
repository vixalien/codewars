function solution(text, markers) {
  const escapedMarkers = markers
    .map(marker => "\\" + marker)
    .join("");

  return text
    .split("\n")
    .map(line => line.replace(new RegExp(`[${escapedMarkers}].*`), "").trimEnd())
    .join("\n");
}
