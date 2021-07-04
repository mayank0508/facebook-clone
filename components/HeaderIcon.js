import React from 'react';

function HeaderIcon({ Icon }) {
  return (
    <div className="flex items-center cursor-pointer md:px-10 sm: h-14 md:hover:bg-gray-100 rounded-xl active:border-b-4 active: border-blue-600 group">
      {' '}
      {/* here we are using the tailwind css to add the prop to the icons in the header components and styleing it on the way */}
      <Icon className="h-5 text-center sm: h-7 mx-group-hover:text-blue-600" />
      {/* here the code of group-hover is used to change the color of the icons when we hover throught it */}
    </div>
  );
}

export default HeaderIcon;
