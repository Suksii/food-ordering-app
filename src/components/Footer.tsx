import React from 'react';

const Footer = () => {

    return (
        <div className="flex text-center items-center justify-center gap-2 py-6 mt-10 border-t border-gray-200 font-light text-gray-600">
           <p className="lowercase font-sofadi text-lg text-gray-800">Gloovoo</p>
           <p>·</p>
           <p className="font-inria">{new Date().getFullYear()} © All rights reserved</p>
        </div>
    );
};

export default Footer;
