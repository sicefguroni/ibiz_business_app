import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FinanceDetail({title, value, icon, bgSecondaryColor, bdPrimaryColor, txPrimaryColor}) {
  return (
    <>
      <div className={`hover:scale-105 transform transition-transform duration-300 animate-in fade-in slide-in-from-bottom duration-500 flex-1 ${bgSecondaryColor} p-4 rounded-xl flex font-istok border-2 ${bdPrimaryColor} my-2min-w-[10rem]`}>
        <div className="flex-1 size-auto p-2  flex flex-col justify-around items-center">
            <p className={`leading-none px-1 font-bold mb-1 ${txPrimaryColor} text-center`}>
                {title}
            </p>
            <FontAwesomeIcon
              icon={icon}
              className={txPrimaryColor}
            ></FontAwesomeIcon>
          <p className="leading-none mt-2">{value}</p>
            
        </div>
      </div>
    </>
  );
}


export default FinanceDetail;
