
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function Score({title, score, description}) {
    return (
        <>
        <div className="animate-in slide-in-from-left duration-500 flex-1 bg-primary-green rounded-xl flex flex-col justify-center items-center p-4 my-2 min-w-[14rem]">
            <p className="text-white font-istok font-thin text-xs my-1">{title}</p>
            <p className="text-white font-istok font-thin my-2"><span className="text-white font-istok font-bold text-3xl">{score}</span>/10</p>
            <div className="bg-overlay-green w-full flex justify-center p-1 rounded-2xl">
            <p className="text-white text-sm font-medium font-istok">{description}</p>
            </div>
            <div className="w-full bg-overlay-green flex justify-start rounded-lg my-3">
            <div  style={{ width: `${(score / 10) * 100}%` }} className={`bg-primary-white py-0.5 rounded-lg`}></div>
            </div>
        </div>
        </>
    );
}

export default Score;