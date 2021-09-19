import React from 'react';

export const Loader = () => {

  const style = {backgroundColor: 'yellow', color: 'black', fontWeight: 600}
  return (
    <div>
      <span className="loader" style={{style}}>Загрузка...</span>
    </div>
  )
}