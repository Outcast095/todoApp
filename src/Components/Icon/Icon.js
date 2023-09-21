import React from 'react';

import style from './Icon.module.css'


const Icon = ({
  variant,
  className,
  width,
  height,
  onClick,
   icon
}) =>
  onClick ? (
    <button
      onClick={onClick}
      className={"item" ? style.IconTodoItem : style.IconTodoEnter}
      style={{ width, height }}
    >
      <img
          src={icon}
        alt={variant}
        layout={'fill'}
      />
    </button>
  ) : (
    <div
      className={style.iconWrapper2}
      style={{ width, height }}
    >
      <img
        src={icon}
        alt={variant}
        layout={'fill'}
      />
    </div>
  )

export default Icon
