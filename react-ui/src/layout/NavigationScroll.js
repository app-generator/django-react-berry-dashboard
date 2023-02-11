import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

//-----------------------|| NAVIGATION SCROLL TO TOP ||-----------------------//

const NavigationScroll = ({ children, location: { pathname } }) => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [pathname]);

    return children || null;
};

NavigationScroll.propTypes = {
    children: PropTypes.node,
    location: PropTypes.object
};

export default withRouter(NavigationScroll);
