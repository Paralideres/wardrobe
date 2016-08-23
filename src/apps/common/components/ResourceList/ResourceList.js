import React, { PropTypes } from 'react';
import ResourceBox from 'common/components/ResourceBox/ResourceBox';

const ResourceList = ({
  resources,
}) => {
  return (
    <div>
      {
        resources.map(r => (
          <ResourceBox resource={r} />
        ))
      }
    </div>
  );
};

ResourceList.propTypes = {
  resources: PropTypes.array.isRequired,
};

export default ResourceList;
