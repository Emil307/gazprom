import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function useDocuments() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getDocuments() {
    try {
      setLoading(true);
      const response = await axios.get("http://127.0.0.1:8000/api/v1/getchecks");
      setDocuments(response.data.wells);
      setLoading(false);
    } catch(e) {
      setLoading(false);
    }
  }

  useEffect(() => {
    getDocuments()
  }, [])

  return { documents, loading }
}
