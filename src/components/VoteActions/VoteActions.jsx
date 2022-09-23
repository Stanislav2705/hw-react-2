import React from "react";

export default function VoteActions({leaveVote}) {
  return (
    <>
      <div>
        <button onClick={() => leaveVote("good")}>Good</button>
      </div>
      <div>
        <button onClick={() => leaveVote("neutral")}>Neutral</button>
      </div>
      <div>
        <button onClick={() => leaveVote("bad")}>Bad</button>
      </div>
    </>
  )
}
