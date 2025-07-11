import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

function SubScore({category, summary, score, bgSecondaryColor, bdPrimaryColor, txPrimaryColor}) {
  return (
    <>
      <div className={`hover:scale-105 transform transition-transform duration-300 animate-in fade-in slide-in-from-bottom duration-500 flex-1 ${bgSecondaryColor} p-4 rounded-xl flex font-istok border-2 ${bdPrimaryColor} my-2 min-w-[14rem]`}>
        <div className="w-[25%] p-2  flex flex-col justify-center items-center">
          <div>
            <FontAwesomeIcon
              icon={faStar}
              className={txPrimaryColor}
            ></FontAwesomeIcon>
          </div>
          <p className="leading-none mt-2">{score}</p>
        </div>
        <div className="w-[75%] flex flex-col items-start justify-center">
          <p className={`leading-none px-1 font-bold mb-1 ${txPrimaryColor}`}>
            {category}
          </p>
          <div className="flex-1 text-wrap text-justify px-1 mt-1">
            <p className="text-sm">
              {summary}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}


export default SubScore;
