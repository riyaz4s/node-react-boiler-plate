import React from 'react';
import PropTypes from 'prop-types';
export const ImageContext = React.createContext();

const ImageProvider= ({source,children})=>{
  return (
    <ImageContext.Provider value={source}>
      <div className='image-provider'>
        {children}
      </div>
    </ImageContext.Provider>
  );
};

ImageProvider.propTypes = {
  source: PropTypes.string,
  children: PropTypes.node
};

export default ImageProvider;
