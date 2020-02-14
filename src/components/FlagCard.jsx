import React from 'react';

const FlagCard = props => {
  const { countryCode, content } = props.detail;
  const countryFlag = `https://www.countryflags.io/${countryCode}/flat/64.png`;

  return (
    <div className='ui cards'>
      <div className='card'>
        <div className='content'>{props.children}</div>
        <div className='extra content'>
          <div className='ui comments'>
            <div className='comment'>
              <div className='avatar'>
                <img src={countryFlag} alt='Country Flag' />
              </div>
              <div className='content'>
                <div className='text'>{content}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlagCard;
