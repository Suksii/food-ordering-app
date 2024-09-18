import React from 'react';

const Footer = () => {

    return (
        <div className="flex text-center justify-center gap-2 py-2 font-light text-gray-800">
           <p className="font-inria">{new Date().getFullYear()} © All rights reserved</p>
           <p>-</p>
           <p className="lowercase font-sofadi">Gloovoo</p>
        </div>
    );
};

export default Footer;