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
import { useLocation } from "react-router-dom";
import { getAIResponse } from "../../backend/chat";

function createData(competitor, description, link) {
  return { competitor, description, link };
}


function FeasibilityPage() {
  const location = useLocation();
  const { userData } = location.state || {}; 
  const [activeTab, setActiveTab] = useState("overview");
  const [message, setMessage] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const user_details = `
        1. What is your business idea?
          I want to create a mobile laundry pickup and delivery service in Cebu City. Customers can book via an app, and we’ll pick up, wash, and return clothes within 24–48 hours.
        2. Who are your target customers?
          Busy professionals and working students living in apartments or condos in Cebu. They don’t have time or space to do laundry.
        3. What makes you or your team capable of running this business?
          I have a logistics background, and my cousin owns a laundromat we can partner with. I also have some experience working on mobile app development projects.
        4. How much are you willing to spend to start, and how will you make money?
          I can invest around ₱100,000 initially. I plan to charge ₱150 per load, with optional express service for an extra ₱50. I expect around 10–20 orders per day once we’re up and running.
        5. Is there anything else the AI should consider?
          I want this to be eco-friendly by using biodegradable laundry products. I’m also hoping it creates job opportunities for riders.
  `;

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

  /*
  const result = {
              "businessName": "EcoWash Mobile Laundry",
              "location": "Cebu City",
              "date": "2023-10-04",
              "summary": {
                  "overallRating": 7.50,
                  "verdict": "Moderately Feasible",
                  "overview": [
                      {
                          "category": "Products/Service",
                          "rating": 8.0,
                          "summary": "Innovative and eco-friendly laundry service catering to busy professionals and students."
                      },
                      {
                          "category": "Market",
                          "rating": 7.0,
                          "summary": "Target market is well-defined, but competitive landscape in Cebu City needs to be assessed."
                      },
                      {
                          "category": "Organization",
                          "rating": 7.5,
                          "summary": "Strong logistics and laundromat partnership. Mobile app development experience is a plus."
                      },
                      {
                          "category": "Finance",
                          "rating": 7.5,
                          "summary": "Initial capital is modest; pricing strategy seems feasible for the target market."
                      }
                  ],
                  "keyFindings": "The mobile laundry service is a promising venture with a strong focus on eco-friendliness and convenience. Financial projections and market competition analysis are recommended for further validation."
              },
              "category": {
                  "productService": {
                      "rating": 8.0,
                      "summary": "Mobile laundry service focusing on eco-friendly practices and convenience.",
                      "verdict": "Highly Feasible",
                      "strengths": ["Eco-friendly approach", "Convenience of pickup and delivery", "Partnership with established laundromat"],
                      "risks": ["Dependency on mobile app functionality", "High operational logistics cost"],
                      "suggestions": ["Develop a strong marketing plan", "Ensure high-quality app functionality"]
                  },
                  "market": {
                      "rating": 7.0,
                      "summary": "Defined target market with growth potential, but competitive analysis is lacking.",
                      "verdict": "Moderately Feasible",
                      "competitors": [
                          {
                              "name": "Local Laundromats",
                              "shortDescription": "Traditional laundromats without pickup/delivery.",
                              "link": "n/a"
                          },
                          {
                              "name": "Existing Laundry Apps",
                              "shortDescription": "Apps that might offer similar services.",
                              "link": "n/a"
                          }
                      ],
                      "suggestions": ["Conduct a detailed competitor analysis", "Identify unique selling propositions"]
                  },
                  "organizational": {
                      "rating": 7.5,
                      "summary": "Good foundation with relevant expertise and partnerships.",
                      "verdict": "Moderately Feasible",
                      "strengths": ["Logistics experience", "Laundromat partnership", "Mobile app development experience"],
                      "risks": ["Dependence on a few key individuals", "Scaling challenges"],
                      "suggestions": ["Expand the team with diverse skills", "Plan for scaling operations in advance"]
                  },
                  "financial": {
                      "rating": 7.5,
                      "summary": "Initial investment aligns with business requirements, but detailed financial projections are needed.",
                      "startupCapital": 100000,
                      "monthlyRevenueRange": [45000, 90000],
                      "breakevenMonths": [12, 24],
                      "suggestions": ["Prepare detailed financial projections", "Explore additional funding options for scaling"]
                  }
              }
          } */

  
  const handleSubmit = async (e) => {
    setMessage(userData);
    console.log("hi");
    console.log(userData);
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const reply = await getAIResponse(message);
      setResult(reply);
      console.log(reply);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };  



  return (
    <>
      <div className="flex justify-center items-center h-[100vh] w-full">
        <div className="flex flex-col bg-stroke-100 h-[47rem] w-[25rem] md:w-[40rem] rounded-3xl shadow-lg">
          <div className=" flex items-center bg-primary-pink w-full h-[85px] rounded-t-3xl px-8">
            <div className="bg-secondary-pink w-[2.5rem] h-[2.5rem] rounded-lg"></div>
            <div className="flex flex-col justify-center w-full h-full px-4">
              <h1 className="font-inria text-xl text-tint-pink font-bold">
                {result?.businessName || "Loading..."}
              </h1>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faLocationDot} className="text-secondary-pink"></FontAwesomeIcon>
                <h2 className="font-inria text-l ml-1 text-secondary-pink">
                  {result?.location || "Loading..."}
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
                <Score title={"Overall Feasibility Score"} score={result?.summary.overallRating || "Loading..."} description={result?.summary.verdict || "Loading..."}></Score>
                <div className="flex flex-wrap gap-3">
                  <SubScore score={result?.summary.overview[0].rating || "Loading..."} category={"Product/Service"} summary={result?.summary.overview[0].summary || "Loading..."} bgSecondaryColor={"bg-secondary-green"} bdPrimaryColor={"border-primary-green"} txPrimaryColor={"text-primary-green"}></SubScore>
                  <SubScore score={result?.summary.overview[1].rating || "Loading..."}  category={"Market"} summary={result?.summary.overview[1].summary || "Loading..."}   bgSecondaryColor={"bg-secondary-orange"} bdPrimaryColor={"border-primary-orange"} txPrimaryColor={"text-primary-orange"}></SubScore>
                </div>
                <div className="flex flex-wrap gap-3">
                  <SubScore score={result?.summary.overview[2].rating || "Loading..."}  category={"Organization"} summary={result?.summary.overview[2].summary || "Loading..."}   bgSecondaryColor={"bg-secondary-pink"} bdPrimaryColor={"border-primary-pink"} txPrimaryColor={"text-primary-pink"}></SubScore>
                  <SubScore score={result?.summary.overview[3].rating || "Loading..."}  category={"Finance"} summary={result?.summary.overview[3].summary || "Loading..."}   bgSecondaryColor={"bg-secondary-blue"} bdPrimaryColor={"border-primary-blue"} txPrimaryColor={"text-primary-blue"}></SubScore>
                </div>
                <Feedback title={"Key Findings"} icon={faLightbulb} results={result?.summary.keyFindings || ["Loading..."]} bgPrimaryColor={"bg-primary-green"} bgSecondaryColor={"bg-secondary-green"} txIconColor={"text-secondary-green"} txPrimaryColor={"text-primary-green"}></Feedback>
              </div> 
            } 
             
            {/** product/service tab */}
            {activeTab === "product" && 
              <div className="flex-1 overflow-y-auto overflow-x-hidden p-2 flex flex-col">
                <div className="flex flex-wrap gap-2">
                    <Score title={"Category Feasibility Score"} score={result?.category.productService.rating || "Loading..."} description={result?.category.productService.verdict || "Loading..."}></Score>
                    <Feedback title={"Summary"} icon={faLightbulb} results={[result?.category.productService.summary] || ["Loading..."]} bgPrimaryColor={"bg-primary-green"} bgSecondaryColor={"bg-secondary-green"} txIconColor={"text-secondary-green"} txPrimaryColor={"text-primary-green"}></Feedback>
                </div>
                <div className="size-auto">
                  <Feedback title={"Strengths"} icon={faDumbbell} results={result?.category.productService.strengths || ["Loading..."]} bgPrimaryColor={"bg-primary-blue"} bgSecondaryColor={"bg-secondary-blue"} txIconColor={"text-secondary-blue"} txPrimaryColor={"text-primary-blue"}></Feedback>
                  <Feedback title={"Risk"} icon={faTriangleExclamation} results={result?.category.productService.risks || ["Loading..."]}  bgPrimaryColor={"bg-primary-red"} bgSecondaryColor={"bg-secondary-red"} txIconColor={"text-secondary-red"} txPrimaryColor={"text-primary-red"}></Feedback>
                  <Feedback title={"Suggestions"} icon={faPenNib} results={result?.category.productService.suggestions || ["Loading..."]}  bgPrimaryColor={"bg-primary-yellow"} bgSecondaryColor={"bg-secondary-yellow"} txIconColor={"text-secondary-yellow"} txPrimaryColor={"text-primary-yellow"}></Feedback>
                </div>
              </div>
            }

            {/** Market tab */}
            {activeTab === "market" && 
              <div className="flex-1 overflow-y-auto overflow-x-hidden p-2 flex flex-col">
                <div className="flex flex-wrap gap-2">
                    <Score title={"Category Feasibility Score"} score={result?.category.market.rating || "Loading..."} description={result?.category.market.verdict || "Loading..."}></Score>
                    <Feedback title={"Summary"} icon={faLightbulb} results={[result?.category.market.summary] || ["Loading..."]} bgPrimaryColor={"bg-primary-green"} bgSecondaryColor={"bg-secondary-green"} txIconColor={"text-secondary-green"} txPrimaryColor={"text-primary-green"}></Feedback>
                </div>
                <TableComp rows={result?.category.market.competitors || ["Loading..."]}></TableComp>
                <Feedback title={"Suggestions"} icon={faPenNib} results={result?.category.market.suggestions || ["Loading..."]} bgPrimaryColor={"bg-primary-yellow"} bgSecondaryColor={"bg-secondary-yellow"} txIconColor={"text-secondary-yellow"} txPrimaryColor={"text-primary-yellow"}></Feedback>
              </div>
            }

            {/** organization tab */}
            {activeTab === "organization" && 
              <div className="flex-1 overflow-y-auto overflow-x-hidden p-2 flex flex-col">
                <div className="flex flex-wrap gap-2">
                    <Score title={"Category Feasibility Score"} score={result?.category.organizational.rating || "Loading..."} description={result?.category.organizational.verdict || "Loading..."}></Score>
                    <Feedback title={"Summary"} icon={faLightbulb} results={[result?.category.organizational.summary] || ["Loading..."]} bgPrimaryColor={"bg-primary-green"} bgSecondaryColor={"bg-secondary-green"} txIconColor={"text-secondary-green"} txPrimaryColor={"text-primary-green"}></Feedback>
                </div>
                <div className="size-auto">
                  <Feedback title={"Strengths"} icon={faDumbbell} results={result?.category.organizational.strengths || ["Loading..."]} bgPrimaryColor={"bg-primary-blue"} bgSecondaryColor={"bg-secondary-blue"} txIconColor={"text-secondary-blue"} txPrimaryColor={"text-primary-blue"}></Feedback>
                  <Feedback title={"Risk"} icon={faTriangleExclamation} results={result?.category.organizational.risks || ["Loading..."]}  bgPrimaryColor={"bg-primary-red"} bgSecondaryColor={"bg-secondary-red"} txIconColor={"text-secondary-red"} txPrimaryColor={"text-primary-red"}></Feedback>
                  <Feedback title={"Suggestions"} icon={faPenNib} results={result?.category.organizational.suggestions || ["Loading..."]}  bgPrimaryColor={"bg-primary-yellow"} bgSecondaryColor={"bg-secondary-yellow"} txIconColor={"text-secondary-yellow"} txPrimaryColor={"text-primary-yellow"}></Feedback>
                </div>
              </div>
            }

            {/** finance tab */}
            {activeTab === "finance" && 
              <div className="flex-1 overflow-y-auto overflow-x-hidden p-2 flex flex-col">
                <div className="flex flex-wrap gap-2">
                    <Score title={"Category Feasibility Score"} score={result?.category.financial.rating || "Loading..."} description={result?.category.financial.verdict || "Loading..."}></Score>
                    <Feedback title={"Summary"} icon={faLightbulb} results={[result?.category.financial.summary] || ["Loading..."]} bgPrimaryColor={"bg-primary-green"} bgSecondaryColor={"bg-secondary-green"} txIconColor={"text-secondary-green"} txPrimaryColor={"text-primary-green"}></Feedback>
                </div>
                <div className="flex flex-wrap gap-3">
                  <FinanceDetail title={"Startup Capital"} value={result?.category?.financial ? `${result?.category.financial.startupCapital}` : "Loading..."} icon={faMoneyBill} bgSecondaryColor={"bg-secondary-red"} bdPrimaryColor={"border-primary-red"} txPrimaryColor={"text-primary-red"}></FinanceDetail>
                  <FinanceDetail title={"Monthly Revenue"} value={result?.category?.financial ? `${result?.category.financial.monthlyRevenueRange[0]} - ${result?.category.financial.monthlyRevenueRange[1]}` : "Loading..."} icon={faChartSimple} bgSecondaryColor={"bg-secondary-orange"} bdPrimaryColor={"border-primary-orange"} txPrimaryColor={"text-primary-orange"}></FinanceDetail>
                  <FinanceDetail title={"Breakeven"} value={result?.category?.financial ? `${result?.category.financial.breakevenMonths[0]} - ${result?.category.financial.breakevenMonths[1]} months` : "Loading..."} icon={faScaleBalanced} bgSecondaryColor={"bg-secondary-blue"} bdPrimaryColor={"border-primary-blue"} txPrimaryColor={"text-primary-blue"}></FinanceDetail>
                  <Feedback title={"Suggestions"} icon={faPenNib} results={result?.category.financial.suggestions || ["Loading..."]} bgPrimaryColor={"bg-primary-yellow"} bgSecondaryColor={"bg-secondary-yellow"} txIconColor={"text-secondary-yellow"} txPrimaryColor={"text-primary-yellow"}></Feedback>
                </div>
              </div>
            }

            <div className="border-t-stroke-200 border-t-[2px] p-4 mx-2 font-istok flex justify-end">
              <button className="bg-stroke-100 border-t-stroke-200 border-[2px] py-1 px-3 mr-2 rounded-xl shadow-s" onClick={handleSubmit}>Retry Analysis <FontAwesomeIcon icon={faRotateRight} className="text-primary-pink"></FontAwesomeIcon></button>
              <button className="bg-primary-pink text-primary-white py-1 px-3 rounded-xl shadow-lg" onClick={() => navigate('/home')}>Generate Business Plan <FontAwesomeIcon icon={faCheckToSlot} className="text-primary-white"></FontAwesomeIcon></button>
            </div>


  

          </div>
        </div>
      </div>
    </>
  );
}

export default FeasibilityPage;
