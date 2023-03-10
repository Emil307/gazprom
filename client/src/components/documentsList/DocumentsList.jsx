import React, { useState } from 'react';
import { useDocuments } from '../../hooks/useDocuments';

const DocumentsList = () => {
  const { documents, loading } = useDocuments();

  // console.log(documents);

  return (
    <>
      {loading && <div>loading...</div>}

    </>
  )
}

export default DocumentsList