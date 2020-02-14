import React from 'react';

const UserDetail = props => {
  const { email, jobTitle, avatar } = props.detail;
  return (
    <div>
      <img
        className='right floated mini ui image'
        src={avatar}
        alt='User Avatar'
      />
      <div className='header'>{email}</div>
      <div className='meta'>{jobTitle}</div>
    </div>
  );
};

export default UserDetail;
