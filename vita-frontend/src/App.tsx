import { FormEvent, useEffect, useState } from "react";
import "./App.css";
import { CustomForm, Property } from "./types";
import { Form } from "./components/Form/Form";
import { PropertyCard } from "./components/PropertyCard/PropertyCard";
import { getProperties, postProperty } from "./api";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function App() {
  const [properties, setProperties] = useState<Property[]>([]);

  const fetchProperties = async () => {
    const propertiesResponse = await getProperties();
    setProperties(propertiesResponse);
  };

  const createProperty = async (event: FormEvent<CustomForm>) => {
    event.preventDefault();
    const target = event.currentTarget.elements;

    const propertyResponse = await postProperty({
      name: target.name.value,
      address: target.address.value,
      price: target.price.value,
      description: target.description.value,
      image: target?.image?.files && target.image.files[0],
    });

    //  return updated list of properties after creating a new one and set current value to updated value.
    setProperties(propertyResponse);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div className="App">
      <div className="Column">
        <Form createProperty={createProperty} />
      </div>
      <div className="Right-Column">
        <Box style={{ maxHeight: "100vh", overflow: "auto" }}>
          <Grid container spacing={2}>
            {properties.map((property) => (
              <Grid item xs={12} md={6} key={property.uuid}>
                <PropertyCard property={property} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default App;
