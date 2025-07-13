import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Feasibility from "../../components/Feasibility/Feasibility";


function FeasibilityPage() {
  const location = useLocation();
  const { userData } = location.state || {}; 
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(false);
  const [result, setResult] = useState({
    businessName: "",
    location: "",
    businessDescription: "",
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
      businessDescription: "",
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
    }, 400);

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
        { !loading ? (<Feasibility result={result} ForDisplay={false} handleSubmit={handleSubmit}></Feasibility>) : (
          <div className="relative bg-primary-white h-auto w-[25rem] md:w-[40rem] rounded-3xl shadow-lg">
            { !error ?
            (<div><video className="relative" src="src/assets/two.mp4" autoPlay={true} loop={true} muted={true}></video>
            <div className=" absolute bottom-[15%] left-[15%] font-istok font-bold text-3xl md:left-[30%] text-primary-pink"><p>Analyzing Feasibility</p></div>
            <div className="h-[6rem] w-full rounded-b-3xl flex justify-center items-center">
              <div className="h-[20px] w-[90%] bg-stroke-200 rounded-3xl">
                <div className="h-[20px] w-auto bg-primary-pink transition-all duration-200 rounded-3xl"
              style={{ width: `${progress}%` }}></div>
              </div>
            </div></div>) : (<div className="animate-shake"><video className="relative" src="src/assets/error.mp4" autoPlay={true} loop={true} muted={true}></video>
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
