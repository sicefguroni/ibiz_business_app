import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckToSlot, faLightbulb, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import Score from "../../components/Score"; 
import Feedback from "../../components/Feedback";
import SubScore from "../../components/SubScore";
import TableComp from "../../components/Table";
import FinanceDetail from "../../components/FinanceDetail";
import { useNavigate } from "react-router-dom";

function createData(competitor, description, link) {
  return { competitor, description, link };
}


function FeasibilityPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();
  const results = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar nisi id massa sodales efficitur. Nulla at sollicitudin mauris. Vestibulum luctus, magna at semper vehicula, augue erat ornare tellus, quis venenatis augue augue sit amet velit. ",
    "Morbi facilisis ipsum in dapibus luctus. Nullam urna tellus, porttitor in justo vitae, ornare fermentum quam. Aliquam erat volutpat. Ut consectetur mollis nulla nec consectetur.",
    "Mauris eleifend nec elit at congue. Quisque interdum diam eget efficitur ornare. Fusce placerat dapibus augue id interdum."
  ];

  const summary = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar nisi id massa sodales efficitur. Nulla at sollicitudin mauris. Vestibulum luctus, magna at semper vehicula, augue erat ornare tellus, quis venenatis augue augue sit amet velit."]

  const data = [
    createData('Speedwash PH', 'A car wash no pay service', 'https://react.dev/'),
    createData('Quicklean', 'Automated Service', 'https://react.dev/' ),
    createData('LaundryBox Cebu', 'Man power heavy car wash', 'https://react.dev/'),
  ];



  return (
    <>
      <div className="flex justify-center items-center h-full w-full">
        <div className="flex flex-col bg-stroke-100 h-[47rem] w-[25rem] md:w-[40rem] rounded-3xl shadow-lg">
          <div className=" flex items-center bg-primary-pink w-full h-[85px] rounded-t-3xl px-8">
            <div className="bg-secondary-pink w-[2.5rem] h-[2.5rem] rounded-lg"></div>
            <div className="flex flex-col justify-center w-full h-full px-4">
              <h1 className="font-inria text-xl text-tint-pink font-bold">
                Sissy Clothing Store
              </h1>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faLocationDot} className="text-secondary-pink"></FontAwesomeIcon>
                <h2 className="font-inria text-l ml-1 text-secondary-pink">
                  Talamban, Cebu City
                </h2>
              </div>
            </div>
          </div>
          <div className="flex w-full h-[8%] p-2">
            <div className="bg-primary-white flex-1 rounded-xl p-2 flex justify-between">
              <button className={`w-[18%] h-full rounded-lg ${activeTab == "overview" ? "bg-secondary-pink font-istok text-sm text-primary-pink" : "bg-primary-white font-istok text-sm text-secondary-pink"}`} onClick={() => setActiveTab("overview")}>Overview</button>
              <button className={`w-[18%] h-full rounded-lg ${activeTab == "product" ? "bg-secondary-pink font-istok text-sm text-primary-pink" : "bg-primary-white font-istok text-sm text-secondary-pink"}`} onClick={() => setActiveTab("product")}>Product/Service</button>
              <button className={`w-[18%] h-full rounded-lg ${activeTab == "market" ? "bg-secondary-pink font-istok text-sm text-primary-pink" : "bg-primary-white font-istok text-sm text-secondary-pink"}`} onClick={() => setActiveTab("market")}>Market</button>
              <button className={`w-[18%] h-full rounded-lg ${activeTab == "organization" ? "bg-secondary-pink font-istok text-sm text-primary-pink" : "bg-primary-white font-istok text-sm text-secondary-pink"}`} onClick={() => setActiveTab("organization")}>Organization</button>
              <button className={`w-[18%] h-full rounded-lg ${activeTab == "finance" ? "bg-secondary-pink font-istok text-sm text-primary-pink" : "bg-primary-white font-istok text-sm text-secondary-pink"}`} onClick={() => setActiveTab("finance")}>Finance</button>
            </div>
          </div>
          <div className="h-[80%] bg-primary-white rounded-b-3xl flex flex-col p-4 font-istok">
            {/* When using components, make sure to wrap them around a flex container since its size is dependent on the parent size*/}
            
            <h1 className="mb-2">Business Feasibility Analysis</h1>
            {/* overview tab */}
            {activeTab === "overview" &&  
              <div className="flex-1 overflow-y-auto overflow-x-hidden p-2 flex flex-col">
                <Score title={"Overall Feasibility Score"} score={7.8} description={"Highly Feasible"}></Score>
                <div className="flex flex-wrap gap-3">
                  <SubScore score={8.1} category={"Product/Service"} summary={"Clear value, strong relevance, eco-friendly edge"} bgSecondaryColor={"bg-secondary-green"} bdPrimaryColor={"border-primary-green"} txPrimaryColor={"text-primary-green"}></SubScore>
                  <SubScore score={7.6} category={"Market"} summary={"Well-defined niche with solid local demand; moderate competition"}  bgSecondaryColor={"bg-secondary-orange"} bdPrimaryColor={"border-primary-orange"} txPrimaryColor={"text-primary-orange"}></SubScore>
                </div>
                <div className="flex flex-wrap gap-3">
                  <SubScore score={7.3} category={"Organization"} summary={"Good logistics base, partner laundromat; small gaps in tech team"}  bgSecondaryColor={"bg-secondary-pink"} bdPrimaryColor={"border-primary-pink"} txPrimaryColor={"text-primary-pink"}></SubScore>
                  <SubScore score={8.5} category={"Finance"} summary={"Reasonable startup cost, fast breakeven, room for scalability"}  bgSecondaryColor={"bg-secondary-blue"} bdPrimaryColor={"border-primary-blue"} txPrimaryColor={"text-primary-blue"}></SubScore>
                </div>
                <Feedback title={"Key Findings"} icon={faLightbulb} results={results} bgPrimaryColor={"bg-primary-green"} bgSecondaryColor={"bg-secondary-green"} txIconColor={"text-secondary-green"} txPrimaryColor={"text-primary-green"}></Feedback>
              </div> 
            } 
             
            {/** product/service tab */}
            {activeTab === "product" && 
              <div className="flex-1 overflow-y-auto overflow-x-hidden p-2 flex flex-col">
                <div className="flex flex-wrap gap-2">
                    <Score title={"Category Feasibility Score"} score={5.6} description={"Moderately Feasible"}></Score>
                    <Feedback title={"Summary"} icon={faLightbulb} results={summary} bgPrimaryColor={"bg-primary-green"} bgSecondaryColor={"bg-secondary-green"} txIconColor={"text-secondary-green"} txPrimaryColor={"text-primary-green"}></Feedback>
                </div>
                <div className="size-auto">
                  <Feedback title={"Strengths"} icon={faDumbbell} results={summary} bgPrimaryColor={"bg-primary-blue"} bgSecondaryColor={"bg-secondary-blue"} txIconColor={"text-secondary-blue"} txPrimaryColor={"text-primary-blue"}></Feedback>
                  <Feedback title={"Risk"} icon={faTriangleExclamation} results={summary} bgPrimaryColor={"bg-primary-red"} bgSecondaryColor={"bg-secondary-red"} txIconColor={"text-secondary-red"} txPrimaryColor={"text-primary-red"}></Feedback>
                  <Feedback title={"Suggestions"} icon={faPenNib} results={summary} bgPrimaryColor={"bg-primary-yellow"} bgSecondaryColor={"bg-secondary-yellow"} txIconColor={"text-secondary-yellow"} txPrimaryColor={"text-primary-yellow"}></Feedback>
                </div>
              </div>
            }

            {/** Market tab */}
            {activeTab === "market" && 
              <div className="flex-1 overflow-y-auto overflow-x-hidden p-2 flex flex-col">
                <div className="flex flex-wrap gap-2">
                    <Score title={"Category Feasibility Score"} score={5.6} description={"Moderately Feasible"}></Score>
                    <Feedback title={"Summary"} icon={faLightbulb} results={summary} bgPrimaryColor={"bg-primary-green"} bgSecondaryColor={"bg-secondary-green"} txIconColor={"text-secondary-green"} txPrimaryColor={"text-primary-green"}></Feedback>
                </div>
                <TableComp rows={data}></TableComp>
                <Feedback title={"Suggestions"} icon={faPenNib} results={summary} bgPrimaryColor={"bg-primary-yellow"} bgSecondaryColor={"bg-secondary-yellow"} txIconColor={"text-secondary-yellow"} txPrimaryColor={"text-primary-yellow"}></Feedback>
              </div>
            }

            {/** organization tab */}
            {activeTab === "organization" && 
              <div className="flex-1 overflow-y-auto overflow-x-hidden p-2 flex flex-col">
                <div className="flex flex-wrap gap-2">
                    <Score title={"Category Feasibility Score"} score={5.6} description={"Moderately Feasible"}></Score>
                    <Feedback title={"Summary"} icon={faLightbulb} results={summary} bgPrimaryColor={"bg-primary-green"} bgSecondaryColor={"bg-secondary-green"} txIconColor={"text-secondary-green"} txPrimaryColor={"text-primary-green"}></Feedback>
                </div>
                <div className="size-auto">
                  <Feedback title={"Strengths"} icon={faDumbbell} results={summary} bgPrimaryColor={"bg-primary-blue"} bgSecondaryColor={"bg-secondary-blue"} txIconColor={"text-secondary-blue"} txPrimaryColor={"text-primary-blue"}></Feedback>
                  <Feedback title={"Risk"} icon={faTriangleExclamation} results={summary} bgPrimaryColor={"bg-primary-red"} bgSecondaryColor={"bg-secondary-red"} txIconColor={"text-secondary-red"} txPrimaryColor={"text-primary-red"}></Feedback>
                  <Feedback title={"Suggestions"} icon={faPenNib} results={summary} bgPrimaryColor={"bg-primary-yellow"} bgSecondaryColor={"bg-secondary-yellow"} txIconColor={"text-secondary-yellow"} txPrimaryColor={"text-primary-yellow"}></Feedback>
                </div>
              </div>
            }

            {/** finance tab */}
            {activeTab === "finance" && 
              <div className="flex-1 overflow-y-auto overflow-x-hidden p-2 flex flex-col">
                <div className="flex flex-wrap gap-2">
                    <Score title={"Category Feasibility Score"} score={5.6} description={"Moderately Feasible"}></Score>
                    <Feedback title={"Summary"} icon={faLightbulb} results={summary} bgPrimaryColor={"bg-primary-green"} bgSecondaryColor={"bg-secondary-green"} txIconColor={"text-secondary-green"} txPrimaryColor={"text-primary-green"}></Feedback>
                </div>
                <div className="flex flex-wrap gap-3">
                  <FinanceDetail title={"Startup Capital"} value={"P100,000.00"} icon={faMoneyBill} bgSecondaryColor={"bg-secondary-red"} bdPrimaryColor={"border-primary-red"} txPrimaryColor={"text-primary-red"}></FinanceDetail>
                  <FinanceDetail title={"Monthly Revenue"} value={"₱45,000–₱90,000"} icon={faChartSimple} bgSecondaryColor={"bg-secondary-orange"} bdPrimaryColor={"border-primary-orange"} txPrimaryColor={"text-primary-orange"}></FinanceDetail>
                  <FinanceDetail title={"Breakeven"} value={"3-5 months"} icon={faScaleBalanced} bgSecondaryColor={"bg-secondary-blue"} bdPrimaryColor={"border-primary-blue"} txPrimaryColor={"text-primary-blue"}></FinanceDetail>
                  <Feedback title={"Suggestions"} icon={faPenNib} results={summary} bgPrimaryColor={"bg-primary-yellow"} bgSecondaryColor={"bg-secondary-yellow"} txIconColor={"text-secondary-yellow"} txPrimaryColor={"text-primary-yellow"}></Feedback>
                </div>
              </div>
            }

            <div className="border-t-stroke-200 border-t-[2px] p-4 mx-2 font-istok flex justify-end">
              <button className="bg-stroke-100 border-t-stroke-200 border-[2px] py-1 px-3 mr-2 rounded-xl shadow-s">Retry Analysis <FontAwesomeIcon icon={faRotateRight} className="text-primary-pink"></FontAwesomeIcon></button>
              <button className="bg-primary-pink text-primary-white py-1 px-3 rounded-xl shadow-lg" onClick={() => navigate('/home')}>Generate Business Plan <FontAwesomeIcon icon={faCheckToSlot} className="text-primary-white"></FontAwesomeIcon></button>
            </div>


  

          </div>
        </div>
      </div>
    </>
  );
}

export default FeasibilityPage;
