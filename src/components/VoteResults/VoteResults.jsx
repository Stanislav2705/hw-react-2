import React from "react";

export default function VoteResults({good,neutral,bad,total,goodPercent}) {
  return (
    <div>
      <div>
          <ul>
            <li>Good:{good}</li>
            <li>Neutral:{neutral}</li>
            <li>Bad:{bad}</li>
          </ul>
        </div>
        <div>
          <ul>
          <li>Total: {total}</li>
            <li>Positive feedback:{goodPercent}%</li>
          </ul>
        </div>
    </div>
  )
}
