import { nanoid } from "nanoid";

export const renderDetailElements = (arr) => {
  return arr.details.map((d) => (
    <p key={nanoid()} className="detail">
      {d}
    </p>
  ));
};
