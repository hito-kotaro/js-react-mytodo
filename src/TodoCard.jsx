import React from 'react';
import { TiEdit } from 'react-icons/ti';
import { RiCloseCircleLine } from 'react-icons/ri';
import { BiUserCircle } from 'react-icons/bi';
import { BsCheckCircleFill } from 'react-icons/bs';

const TodoCard = () => {
  const userId = '土肥さん';
  const todoTitle = 'お風呂に入る';
  const visible = 'invisible';
  return (
    <div className="m-1 bg-green-100 shadow-lg">
      <div className="h-20 bg-red-200">
        <div className="flex bg-blue-100">
          <BiUserCircle style={{ fontSize: '24px' }} />
          {userId}
          <div className={`bg-red-300 ml-auto ${visible}`}>
            <BsCheckCircleFill style={{ fontSize: '24px', color: 'green' }} />
          </div>
        </div>
        <div>{todoTitle}</div>
      </div>
      <div className="bg-green-300 flex justify-end ">
        <div className="inline-flex bg-red-300 ">
          <TiEdit style={{ fontSize: '32px' }} />
          <RiCloseCircleLine style={{ fontSize: '32px' }} />
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
