import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Feedback({ title, icon, results, bgPrimaryColor, bgSecondaryColor, txIconColor, txPrimaryColor}) {
  return (
    <>
      <div className={`shadow hover:shadow-lg transition-shadow duration-300 animate-in fade-in slide-in-from-bottom duration-500 ${bgPrimaryColor} pl-[3px] rounded-xl flex justify-end flex-1 min-w-[20rem] my-2`}>
        <div className={`h-auto w-auto p-4 ${bgSecondaryColor} rounded-xl`}>
          <div className="flex justify-start items-center mb-4">
            <div className={`w-[1.5rem] h-[1.5rem] ${bgPrimaryColor} rounded-md flex justify-center items-center`}>
              <FontAwesomeIcon icon={icon} size="xs" className={`${txIconColor}`} />
            </div>
            <p className={`font-bold text-sm ${txPrimaryColor} ml-2`}>
              {title}
            </p>
          </div>
          {results.map((result, index) => {
            return (
              <div className="flex justify-start">
                <div className="w-[5%] h-[1rem] flex justify-center items-end">
                  <FontAwesomeIcon icon={faCheck} size="xs" />
                </div>
                <div className="flex-1 text-wrap text-justify px-1">
                  <p className="text-sm">{result}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Feedback;
