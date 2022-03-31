import { useEffect, useState } from "react";
import { usePapaParse } from "react-papaparse";

import ScoreCard from "./ScoreCard";

export const Scores = () => {
  const { readRemoteFile } = usePapaParse();
  const [data, setData] = useState({});

  useEffect(() => {
    readRemoteFile(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSePTJ7SstmU0TZLOA3KSbdsKSOLhoAEg_V2sf9B8fOPnkOfIev2xKZh5kPqN9lVVIB6vMDXN_0MbJk/pub?gid=0&single=true&output=csv",
      {
        header: true,
        complete: (results) => {
          setData(results.data);
        },
      }
    );
  }, []);

  const scores = Array.from(data);

  return (
    <ul>
      {scores.length &&
        scores.map((score, index) => (
          <ScoreCard
            key={index}
            team1={score["Team 1"] || ""}
            score1={score["Skor 1"] || ""}
            team2={score["Team 2"] || ""}
            score2={score["Skor 2"] || ""}
            time={score["Time"] || ""}
            stage={score["Stage"] || ""}
            status={score["Status"] || ""}
          />
        ))}
    </ul>
  );
};
