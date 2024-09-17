import React, { useEffect } from 'react';

const Footer = () => {

    return (
        <div className="flex text-center justify-center gap-2 py-2 font-light text-gray-800">
           <p>{new Date().getFullYear()}</p>
           <p>© All rights reserved</p>
           <p>-</p>
           <p className="lowercase font-medium">Gloovoo</p>
        </div>
    );
};

export default Footer;