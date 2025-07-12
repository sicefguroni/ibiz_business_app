import { useEffect, useState } from "react";
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


function FeasibilityPage() {
  const location = useLocation();
  const { userData } = location.state || {}; 
  const [activeTab, setActiveTab] = useState("overview");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(false);
  const [result, setResult] = useState({
    businessName: "",
    location: "",
    summary: {
      overallRating: "",
      verdict: "",
      overview: [
        { category: "", rating: "", summary: "" },
        { category: "", rating: "", summary: "" },
        { category: "", rating: "", summary: "" },
        { category: "", rating: "", summary: "" }
      ],
      keyFindings: [""]
    },
    category: {
      productService: {
        rating: "",
        summary: "",
        verdict: "",
        strengths: [""],
        risks: [""],
        suggestions: [""]
      },
      market: {
        rating: "",
        summary: "",
        verdict: "",
        competitors: [{ name: "", shortDescription: "", link: "" }],
        suggestions: [""]
      },
      organizational: {
        rating: "",
        summary: "",
        verdict: "",
        strengths: [""],
        risks: [""],
        suggestions: [""]
      },
      financial: {
        rating: "",
        summary: "",
        verdict: "",
        startupCapital: "",
        monthlyRevenueRange: ["", ""],
        breakevenMonths: ["", ""],
        suggestions: [""]
      }
    }
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
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

 
  
  

  
  const handleSubmit = async (e) => {
    if (e?.preventDefault) e.preventDefault();
    setResult({
      businessName: "",
      location: "",
      summary: {
        overallRating: "",
        verdict: "",
        overview: [
          { category: "", rating: "", summary: "" },
          { category: "", rating: "", summary: "" },
          { category: "", rating: "", summary: "" },
          { category: "", rating: "", summary: "" }
        ],
        keyFindings: [""]
      },
      category: {
        productService: {
          rating: "",
          summary: "",
          verdict: "",
          strengths: [""],
          risks: [""],
          suggestions: [""]
        },
        market: {
          rating: "",
          summary: "",
          verdict: "",
          competitors: [{ name: "", shortDescription: "", link: "" }],
          suggestions: [""]
        },
        organizational: {
          rating: "",
          summary: "",
          verdict: "",
          strengths: [""],
          risks: [""],
          suggestions: [""]
        },
        financial: {
          rating: "",
          summary: "",
          verdict: "",
          startupCapital: "",
          monthlyRevenueRange: ["", ""],
          breakevenMonths: ["", ""],
          suggestions: [""]
        }
      }
    });
    setError(false);
    setLoading(true);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 90) return prev + 1;
        else return prev;
      });
    }, 200);

    console.log(userData);

    try {
    const response = await fetch('http://localhost:3000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userData }),
    })

    if (!response.ok) {
      setError(true);
      throw new Error('Failed to get AI response');
    } 



    const data = await response.json();
    setResult(data.reply);
    console.log(data.reply);  

    clearInterval(interval);
      setProgress(100);

      setTimeout(() => {
        setLoading(false); // Hide bar after a short pause
        setProgress(0);    // Reset progress if needed
      }, 1000);

    

    } catch (err) {
      console.error(err);
      clearInterval(interval);
      setProgress(0);
      setError(true);
    }

    
      
  };

  
  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center h-[100vh] w-full  animate-fade-in">
        { !loading ? (<div className="flex flex-col bg-stroke-100 h-[47rem] w-[25rem] md:w-[40rem] rounded-3xl shadow-lg">
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
        </div>) : (
          <div className="relative bg-primary-white h-auto w-[25rem] md:w-[40rem] rounded-3xl shadow-lg">
            { !error ?
            (<div><video className="relative" src="src\assets\two.mp4" autoPlay={true} loop={true} muted={true}></video>
            <div className=" absolute bottom-[15%] left-[15%] font-istok font-bold text-3xl md:left-[30%] text-primary-pink"><p>Analyzing Feasibility</p></div>
            <div className="h-[6rem] w-full rounded-b-3xl flex justify-center items-center">
              <div className="h-[20px] w-[90%] bg-stroke-200 rounded-3xl">
                <div className="h-[20px] w-auto bg-primary-pink transition-all duration-200 rounded-3xl"
              style={{ width: `${progress}%` }}></div>
              </div>
            </div></div>) : (<div className="animate-shake"><video className="relative" src="src\assets\error.mp4" autoPlay={true} loop={true} muted={true}></video>
            <div className=" absolute bottom-[20%] left-[15%] font-istok font-bold text-3xl md:left-[23%] text-primary-pink"><p>There seems a problem...</p></div>
            <div className="h-[6rem] w-full rounded-b-3xl flex justify-center items-center">
              <button className="px-6 py-2 bg-primary-pink rounded-xl font-istok text-primary-white font-medium text-xl mx-2 mb-12" onClick={() => navigate('/onboarding', {state: {userData: userData}})}>Go Back</button>
              <button className="px-6 py-2 bg-primary-pink rounded-xl font-istok text-primary-white font-medium text-xl mx-2 mb-12" onClick={handleSubmit}>Retry</button>
            </div></div>)}
          </div>
        )}
        
      </div>
    </>
  );
}

export default FeasibilityPage;
