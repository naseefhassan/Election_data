import React, { useEffect } from "react";
import axiosInstance from '../api/axios'

function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/api/user/getuser')
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData()
  }, []);
  return (
    <div>
      <div className="bg-gray-400 h-20 flex items-center justify-around">
        <h1 className="text-2xl font-bold">Union</h1>
        <div className="flex gap-10 items-center">
          <button>Update</button>
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
