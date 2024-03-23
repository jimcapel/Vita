import { Property } from "../../types";
import "./PropertyCard.css";

type PropertyCardProps = {
  property: Property;
};

export const PropertyCard = (props: PropertyCardProps) => {
  const { property } = props;

  return (
    <div className="Container" key={property.uuid}>
      <img
        src={`http://localhost:5000/uploads/${property.fileName}`}
        style={{ width: 240, height: 240 }}
      />
      <div className="Information">
        <p className="Property-Text">£{Number(property.price).toFixed(2)}</p>
        <p className="Property-Name">{property.name}</p>
        <p className="Property-Text">{property.address}</p>
        <p className="Description">{property.description}</p>
      </div>
    </div>
  );
};
