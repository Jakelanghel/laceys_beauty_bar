import { nanoid } from "nanoid";

export const renderServiceElements = (arr) => {
  return arr.services.map((s) => (
    <div key={nanoid()} className="container-service">
      <h2 className="service-title">{s.title}</h2>
      <p className="description">{s.description}</p>
      <p className="price">{s.price}</p>
    </div>
  ));
};
