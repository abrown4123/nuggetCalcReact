import React from 'react';

const NuggetList = (props) => {
  let nuggetPics = [];
  for (let i=0; i < props.nuggets; i++){
    nuggetPics.push(<img src="../../images/nugget.png" key={i} />);
  }

  return (
    <div>
      {nuggetPics}
    </div>
  );
}

export default NuggetList
