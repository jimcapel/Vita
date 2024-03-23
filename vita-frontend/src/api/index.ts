import { PropertyBase, PropertyForm } from "../types";

export const getProperties = async () => {
  const response = await fetch("http://localhost:5000/properties");

  const responseJSON = await response.json();

  return responseJSON;
};

export const postProperty = async (property: PropertyForm) => {
  const formData = new FormData();

  formData.append("name", property.name);
  formData.append("address", property.address);
  if (property.image) formData.append("image", property.image);
  formData.append("price", property.price);
  formData.append("description", property.description);

  const response = await fetch("http://localhost:5000/properties", {
    method: "POST",
    body: formData,
  });

  const responseJSON = await response.json();

  return responseJSON;
};
