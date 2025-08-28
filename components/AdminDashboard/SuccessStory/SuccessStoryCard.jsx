import React, { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

const IMAGE_BB_API_KEY = "23a138a6c5d51c6d71a87f91af3d9fe1";

const SuccessStoryCard = ({ story, onEdit }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img
        src={story.image}
        alt={story.name}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-xl font-bold mt-3">{story.name}</h3>
      <p className="text-gray-600">{story.description}</p>
      {story.totalBand && (
        <div className="mt-3 p-3 bg-gray-100 rounded-lg">
          <h4 className="font-semibold">Band Scores</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <p>Listening: {story.listeningBand}</p>
            <p>Reading: {story.readingBand}</p>
            <p>Speaking: {story.speakingBand}</p>
            <p>Writing: {story.writingBand}</p>
            <p className="col-span-2 text-center font-bold">
              Overall: {story.totalBand}
            </p>
          </div>
        </div>
      )}
      <button
        onClick={() => onEdit(story)}
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Edit
      </button>
    </div>
  );
};

export default SuccessStoryCard;
