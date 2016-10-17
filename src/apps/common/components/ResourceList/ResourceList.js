import React, { PropTypes } from 'react';
import ResourceBox from 'common/components/ResourceBox/ResourceBox';

const ResourceList = ({
  resources,
  category
}) => {
  return (
    <div>
      {
        resources.map(r => (
          <ResourceBox key={r.id} category={category} {...r} />
        ))
      }
    </div>
  );
};

ResourceList.propTypes = {
  resources: PropTypes.array.isRequired,
};

export default ResourceList;
