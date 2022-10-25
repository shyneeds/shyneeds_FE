import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { useState } from 'react';

const ReviewReply = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    // formState: { errors }, 추후 required 사용 예정
  } = useForm();
  const onSubmit = (formData: any) => {
    console.log(formData);
  };
  const [modify , setModify] = useState(false);
  const [emojiClick, setEmojiClick] = useState(false);
  const isEmojiClick = () => {
    emojiClick === false ? setEmojiClick(true) : setEmojiClick(false);
  };
  const onClick = (emojiData: EmojiClickData, event: MouseEvent) => {
    setValue('reply', getValues('reply') + emojiData.emoji);
    setEmojiClick(false);
  };
  const onModifyClick = (emojiData: EmojiClickData, event: MouseEvent) => {
    setValue('modifyReply', getValues('modifyReply') + emojiData.emoji);
    setEmojiClick(false);
  };
  const toggleModify = () =>{
    setModify(!modify);
  }
  return (
    <>
      {!modify&&
      <NewReplyWrap>
      <NewReply>
        <NewReplyAuthorWrap>
          <NewReplyAuthor>권영민</NewReplyAuthor>
          <NewReplyDate>2022.10.21</NewReplyDate>
        </NewReplyAuthorWrap>
        <NewReplyContent>안녕하세요 반갑습니다.</NewReplyContent>
        <NewReplyButtonWrap>
          <button>댓글</button> <p>/</p>
          <button onClick={()=>toggleModify()}>수정</button> <p>/</p>
          <button>삭제</button>
        </NewReplyButtonWrap>
      </NewReply>
      </NewReplyWrap>
      }
      {!modify&&<NewReply>
        <NewReplyAuthorWrap>
          <NewReplyAuthor>권영민</NewReplyAuthor>
          <NewReplyDate>2022.10.21</NewReplyDate>
        </NewReplyAuthorWrap>
        <NewReplyContent>안녕하세요 반갑습니다.</NewReplyContent>
        <NewReplyButtonWrap>
          <button>댓글</button> <p>/</p>
          <button onClick={()=>toggleModify()}>수정</button> <p>/</p>
          <button>삭제</button>
        </NewReplyButtonWrap>
      </NewReply>}
      {modify && <ModifyReplyWrap>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ReplyContent
            placeholder="수정사항을 남겨주세요."
            {...register('modifyReply')}
          ></ReplyContent>
          <ReplySubmitWrap>
            <img
              src={process.env.PUBLIC_URL + '/icons/smile.svg'}
              alt="EmptyLoveIcon"
              onClick={() => isEmojiClick()}
            />
            <ModifyReplySubmitWrap>
              <ReplyCancelButton onClick={()=>toggleModify()}>취소</ReplyCancelButton>
              <ReplyModiftyButton onClick={()=>toggleModify()}>등록</ReplyModiftyButton>
            </ModifyReplySubmitWrap>
          </ReplySubmitWrap>
          {emojiClick && (
            <EmojiPicker
              height={350}
              width="40%"
              autoFocusSearch={false}
              onEmojiClick={onModifyClick}
            />
          )}
        </form>
      </ModifyReplyWrap>}

      {!modify&&<ReplyWrap>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ReplyContent
            placeholder="댓글을 남겨주세요."
            {...register('reply')}
          ></ReplyContent>
          <ReplySubmitWrap>
            <img
              src={process.env.PUBLIC_URL + '/icons/smile.svg'}
              alt="EmptyLoveIcon"
              onClick={() => isEmojiClick()}
            />
            <ReplySubmitButton>등록</ReplySubmitButton>
          </ReplySubmitWrap>
          {emojiClick && (
            <EmojiPicker
              height={350}
              width="40%"
              autoFocusSearch={false}
              onEmojiClick={onClick}
            />
          )}
        </form>
      </ReplyWrap>}
    </>
  );
};

export default ReviewReply;

const ReplyWrap = styled.div`
  width: 1000px;
  height: 200px;
  margin: 0 auto;
  border: 1px solid #cccccc;
  margin-top: 40px;
  padding: 20px 30px 20px 40px;
`;

const ReplyContent = styled.textarea`
  height: 90px;
  width: 100%;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  border-radius: 8px;
  margin-bottom: 10px;
  border: none;
  &:focus {
    outline: none;
  }
  resize: none;
`;

const ReplySubmitWrap = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    cursor: pointer;
    margin-top: 4px;
    width: 34px;
    height: 34px;
  }
`;
const ReplySubmitButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #4286f4;
  color: white;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  border-radius: 6px;
  margin-right : 30px;
  cursor: pointer;
  transition: box-shadow 400ms ease;
  &:hover {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
`;
const ReplyCancelButton = styled.button`
  width: 100px;
  height: 40px;
  background: #ffffff;
  color: black;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #aaaaaa;
  border-radius: 6px;
  margin-right: 10px;
  cursor: pointer;
  transition: box-shadow 400ms ease;
  &:hover {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
`;
const NewReplyWrap =styled.div`
  margin-top: 40px;
`

const NewReply = styled.div`
  width: 1000px;
  height: 148px;
  border-top: 1px solid #cccccc;
`;

const NewReplyButtonWrap = styled.div`
  display: flex;
  width: 140px;
  height: 24px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-left: 40px;
  button {
    cursor: pointer;
    color: #aaaaaa;
    padding: 0px;
    margin-right: 2px;
    margin-left: 2px;
    :nth-child(1) {
      margin-left: 0px;
    }
  }
  p {
    line-height: 24px;
    color: #aaaaaa;
  }
`;

const NewReplyAuthorWrap = styled.div`
  display: flex;
  width: 1000px;
  height: 24px;
  margin-left: 40px;
  margin-top: 30px;
  margin-bottom: 10px;
`;
const NewReplyAuthor = styled.p`
  height: 24px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #333333;
`;
const NewReplyDate = styled.p`
  height: 24px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #666666;
  margin-left: 10px;
`;

const NewReplyContent = styled.p`
  width: 928px;
  margin-left: 40px;
  margin-bottom: 6px;
`;

const ModifyReplyWrap = styled.div`
  width: 1000px;
  height: 200px;
  margin: 0 auto;
  border: 1px solid #cccccc;
  margin-top: 40px;
  padding: 20px 30px 20px 40px;
`;

const ModifyReplySubmitWrap = styled.div`
  width: 230px;
`;

const ReplyModiftyButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #4286f4;
  color: white;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  border-radius: 6px;
  margin-right : 20px;
  cursor: pointer;
  transition: box-shadow 400ms ease;
  &:hover {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
`