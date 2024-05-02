/* eslint-disable @typescript-eslint/no-explicit-any */

interface EmptyProps{
  resource:any
}

function Empty({ resource }:EmptyProps) {
  return <p>No {resource} could be found.</p>;
}

export default Empty;
