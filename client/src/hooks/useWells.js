import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function useWells() {
  const [wells, setWells] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getWells() {
    try {
      setLoading(true);
      const response = await axios.get("http://127.0.0.1:8000/api/v1/getwells");
      setWells(response.data.wells);
      setLoading(false);
    } catch(e) {
      setLoading(false);
    }
  }

  useEffect(() => {
    getWells()
  }, [])

  return { wells, loading }
}

