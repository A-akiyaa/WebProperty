
import React from "react";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import properties from "../properties.json";
import "./PropertyDetails.css";

function PropertyDetails() {
  const { id } = useParams(); // Get the property ID from the URL
  const property = properties.find((prop) => String(prop.id) === id); // Match property by ID

  if (!property) {
    return <div className="message">Property not found!</div>; // Handle invalid property ID
  }

  return (
    <div className="property-container">
      {/* Property Title */}
      <h1 className="property-title">{property.shortDescription}</h1>

      {/* Property Main Details */}
      <div className="property-main">
        
        <img
          className="property-image"
          src={property.images[0]}
          alt={property.shortDescription}
        />
      </div>

      {/* React Tabs */}
      <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Floor Plan</Tab>
          <Tab>Location</Tab>
          <Tab>Gallery</Tab>
        </TabList>

        {/* Overview Tab */}
        <TabPanel>
          <h3>Overview</h3>
          <div className="property-info">
          <p className="property-description">{property.longDescription}</p>
          <ul className="property-stats">
            <li><strong>Bedrooms:</strong> {property.bedrooms}</li>
            <li><strong>Bathrooms:</strong> {property.bathrooms}</li>
            <li><strong>Type:</strong> {property.type}</li>
            <li><strong>Location:</strong> {property.location}</li>
          </ul>
        </div>
        </TabPanel>

        {/* Floor Plan Tab */}
        <TabPanel>
          <h3>Floor Plan</h3>
          <img src={property.floorPlan} alt="Floor plan" style={{ width: "100%", borderRadius: "8px" }} />
        </TabPanel>

        {/* Location Tab */}
        <TabPanel>
          <h3>Location</h3>
          <p>{property.location}</p>
          <iframe
            src={property.map}
            title="Map"
            width="100%"
            height="300px"
            frameBorder="0"
            style={{ borderRadius: "8px" }}
            allowFullScreen
          ></iframe>
        </TabPanel>

        {/* Gallery Tab */}
        <TabPanel>
          <h3>Gallery</h3>
          <div className="gallery-grid">
            {property.images.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image} alt={`Gallery image ${index + 1}`} />
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default PropertyDetails;