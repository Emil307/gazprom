import React, { useState } from 'react';
import { useTeam } from '../../hooks/useTeam';

const TeamList = () => {
  const { team, loading } = useTeam();

  // console.log(team);

  return (
    <>
      {loading && <div>loading...</div>}

    </>
  )
}

export default TeamList