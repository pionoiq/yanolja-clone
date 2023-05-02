import React from 'react';
const Dropdown = (props) => {
  const [visibilityAnimation, setVisibilityAnimation] = React.useState(false);
  const [repeat, setRepeat] = React.useState(null);

  React.useEffect(() => {
    if (props.visibility) {
      clearTimeout(repeat);
      setRepeat(null);
      setVisibilityAnimation(true);
    } else {
      setRepeat(
        setTimeout(() => {
          setVisibilityAnimation(false);
        }, 100)
      );
    }
  }, [props.visibility]);

  return (
    <div
      className={`footer__siteListBox ${
        props.visibility ? 'footer__siteListBox' : 'footer__siteListBox--open'
      }`}
    >
      {visibilityAnimation && props.children}
    </div>
  );
};

export default Dropdown;
