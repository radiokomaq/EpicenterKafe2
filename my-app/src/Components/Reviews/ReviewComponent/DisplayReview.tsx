import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { FaStar, FaUser } from 'react-icons/fa';

interface DisplayReviewProps {
  review: any;
}

const DisplayReview: FC<DisplayReviewProps> = ({ review }) => {
  return (
    <div className="flex flex-col gap-4 bg-gray-100 p-4 rounded-md">
      <div className="flex items-center">
        <FaUser className="text-gray-500 mr-2" />
        <h1 className="text-lg font-bold">{review.name_person}</h1>
      </div>
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((value) => (
          <FaStar
            key={value}
            className={`cursor-pointer ${value <= review.rating ? 'text-yellow-500' : 'text-gray-400'
              }`}
          />
        ))}
      </div>
      <p className="text-gray-700">{review.bodymessage}</p>
    </div>
  );
};

export default observer(DisplayReview);