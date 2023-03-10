import React, { useState } from 'react';
import styled from 'styled-components';
import { useWells } from '../../hooks/useWells';
import Well from '../Well';

const WellsList = () => {
  const { wells, loading } = useWells();
  // console.log(wells);

  return (
      <>
        {loading && <div>loading...</div>}
        {wells && wells.map(well =>
          <Well well={well} key={well.id}/>
        )}
      </>
  )
}

export default WellsList;