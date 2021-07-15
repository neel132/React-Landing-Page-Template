const navigationLabel = [
  {
    label: 'Home',
    href: "#page-top",
  },
  {
    label: 'About us',
    href: "#about",
  },
  {
    label: 'Services',
    href: "#services",
  },
  {
    label: 'Contact',
    href: "#contact",
  },
  {
    label: 'Book',
    href: "#book",
  },

];
const brandName = "Healing Hath";

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>

          <div className='navbar-brand-logo page-scroll' href='#page-top' />
          <a className='navbar-brand page-scroll' href='#page-top'>
            {brandName}
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            {
              navigationLabel.map(v => (
                <li>
                  <a href={v.href} className='page-scroll'>
                    {v.label}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}
