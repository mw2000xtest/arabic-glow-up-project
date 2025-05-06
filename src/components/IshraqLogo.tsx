
import React from 'react';

const IshraqLogo = ({ className = "h-16 w-auto" }: { className?: string }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <img 
        src="/lovable-uploads/0a9c5014-aa0e-43ae-b462-bdd5ca96d7e4.png" 
        alt="شعار إشراق" 
        className="h-auto w-1/5 max-w-[20%]"
      />
      <div className="text-center mt-1">
        <div className="text-white text-lg font-bold">إشراق</div>
        <div className="text-white text-xs">للرعاية الطبية</div>
      </div>
    </div>
  );
};

export default IshraqLogo;
