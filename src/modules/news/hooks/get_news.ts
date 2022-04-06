import { useState, useEffect } from 'react';
import {fetchNewsApi } from'../services/news_service'
import React from 'react';
import { newsModel } from '../interfaces/news_data';





export  function useGetAllNews() {
  const refreshing:boolean=false
  const [data, setData] = useState(<newsModel[]>[]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  const getData =  async function () {
      setLoading(true);
      try {
        const responseData = await fetchNewsApi()
        setData(responseData);
      } catch (err) {
        setData([]);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    useEffect(() => { getData()}, []);
    useEffect(() => { 
      if(refreshing)
        getData()
      }, [refreshing]);





  // return [data, error, loading];
  return {data, error, loading,getData};

}
