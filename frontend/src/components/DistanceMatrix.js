import React, { useState } from 'react';
import { DistanceMatrixService, GoogleMapProvider  } from '@react-google-maps/api';

const DistanceMatrix = () => {
  const [response, setResponse] = useState(null);

  const handleDistanceMatrixResponse = (response) => {
    setResponse(response);
    // Process the distance matrix response here
  };

  return (
    <DistanceMatrixService
      options={{
        destinations: ['Paroisse Saint Louis en Thelle', 'Domaine de la Muette, l\'Ormeteau'],
        origins: ['Mairie de Mesnil-enthelle'],
        travelMode: 'DRIVING',
      }}
      callback={handleDistanceMatrixResponse}
    />
  );
};

export default DistanceMatrix;