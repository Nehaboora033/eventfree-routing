import React from 'react'
import { Link, matchPath, useLocation } from 'react-router-dom';

const BreadCrumbs = {
    '/': 'Home',
    '/events': 'events',
    '/feed': 'feed',
    '/username': 'username'
};

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);
    const generatePath = (index) => `/${pathnames.slice(0, index + 1).join('/')}`;
    const EventsPage = location.pathname === '/events';

    
    console.log(generatePath)
    return (
        <div className="text-sm py-2">
            <Link to="/" className="text-[#666666] hover:underline">Home</Link>
            {pathnames.map((_, index) => {
                const path = generatePath(index);

                const matchKey = Object.keys(BreadCrumbs).find((key) =>
                    matchPath({ path: key, end: true }, path)
                );

                const name = BreadCrumbs[matchKey] || pathnames[index];

                return (
                    <span key={path}>
                        <span className={'text-[#666666]'}>{' >  '}</span>
                        {index !== pathnames.length - 1 ? (
                            <Link to={path} className="text-blue-500 hover:underline">
                                {name}
                            </Link>
                        ) : (
                                <span className={`text-black ${EventsPage?'text-white':'text-black'}`}>{name}</span>
                        )}
                    </span>
                );
            })}
        </div>
    );
}

export default Breadcrumbs