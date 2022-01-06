import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BsCheckCircleFill } from 'react-icons/bs';
import Header from '../../share/Header';

// 詳細画面 TodoDataを表示するだけ
const TodoDetail = () => {
  const { state } = useLocation();
  const { todoData } = state;
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="w-96 ml-auto mr-auto mt-10 shadow-lg border-solid ">
        <div className="inline-block">タイトル: {todoData.title}</div>
        <div className={`flex ${todoData.completed ? 'visible' : 'invisible'}`}>
          完了 :
          <BsCheckCircleFill style={{ fontSize: '24px', color: 'green' }} />
        </div>

        <div className=" inline-block">
          コメント : {todoData.comment || 'No Data'}
        </div>

        <br />

        <div className="inline-block">
          登録日 : {todoData.registeredDate || 'No Data'}
        </div>

        <br />

        <div className="inline-block">
          更新日 : {todoData.updatedDate || 'No Data'}
        </div>

        <br />

        <button type="button" onClick={() => navigate(-1)}>
          戻る
        </button>
      </div>
    </>
  );
};

export default TodoDetail;
