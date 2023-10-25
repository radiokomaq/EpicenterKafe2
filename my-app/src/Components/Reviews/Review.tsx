import React, { FC, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import CreateReview from './ReviewComponent/CreateReview';
import DisplayReview from './ReviewComponent/DisplayReview';
import axios from 'axios';
import ReviewStore from '../../Store/ReviewStore';

const Review: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/getReview')
      .then((response) => {
        setIsLoading(false);
        ReviewStore.setResponceReview(response.data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }


  return (
    <div className="w-full h-full  px-[10%]">
      <CreateReview />
      <div className='relative grid grid-cols-4 gap-10'>
        {ReviewStore.responceReview.map((review, index) => (
          <DisplayReview key={index} review={review} />
        ))}
      </div>
    </div>
  );
};

export default observer(Review);