import dotenv from 'dotenv';
dotenv.config();

import OpenAI from 'openai';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Root route to confirm server is running
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// POST /business-plan route for generating a business plan
app.post('/business-plan', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Missing `message` in request body' });
    }

    // Strong prompt to force GPT to return only JSON matching the business plan template
    const prompt = `You are an API. Return ONLY a valid JSON object with this structure. Do NOT include any text or code fences outside the JSON.

    The JSON must follow this template, with descriptive keys and realistic data based on the user message:

    {
      "executiveSummary": {
        "businessName": "string",
        "businessType": "string",
        "location": "string",
        "founded": "YYYY-MM-DD",
        "summary": "string"
      },
      "businessDescription": {
        "missionStatement": "string",
        "visionStatement": "string",
        "companyOverview": "string",
        "businessStructure": "string",
        "productsAndServices": ["string"],
        "targetMarket": "string",
        "competitiveAdvantage": "string"
      },
      "marketAnalysis": {
        "industryOverview": "string",
        "targetMarketAnalysis": "string",
        "marketSegment1": {"name": "string", "description": "string"},
        "marketSegment2": {"name": "string", "description": "string"},
        "marketTrends": ["string"],
        "marketSizeAndGrowthPotential": "string"
      },
      "marketingAndSalesStrategy": {
        "brandingAndPositioning": "string",
        "pricingStrategy": "string",
        "distributionChannels": ["string"],
        "promotionalActivities": ["string"],
        "salesForecast": {"year1": number, "year2": number, "year3": number}
      },
      "organizationalStructureAndManagement": {
        "ownershipAndLegalStructure": "string",
        "keyPersonnel": [{"name": "string", "role": "string", "background": "string"}],
        "rolesAndResponsibilities": {"CEO": "string", "CTO": "string", "COO": "string"},
        "advisoryBoardAndConsultants": ["string"]
      },
      "productDevelopmentAndOperations": {
        "productDevelopmentProcess": "string",
        "supplyChainManagement": "string",
        "productionServiceDeliveryProcess": "string",
        "qualityControl": "string",
        "intellectualProperty": "string"
      },
      "financialProjections": {
        "salesForecast": {"year1": number, "year2": number, "year3": number},
        "projectedExpenses": {"year1": number, "year2": number, "year3": number},
        "profitAndLossStatement": {"year1": number, "year2": number, "year3": number},
        "cashFlowStatement": {"year1": number, "year2": number, "year3": number},
        "breakEvenAnalysis": {"breakEvenMonth": number, "breakEvenRevenue": number},
        "keyFinancialRatios": {"grossMargin": "string", "netMargin": "string", "currentRatio": "string"}
      },
      "fundingRequest": {
        "fundingNeedsAndPurpose": "string",
        "repaymentPlan": "string",
        "proposedFundingSources": ["string"]
      },
      "implementationPlan": {
        "milestonesAndTimelines": [{"milestone": "string", "timeline": "string"}],
        "resourceAllocation": {"development": "string", "marketing": "string", "operations": "string"},
        "riskAssessmentAndMitigation": [{"risk": "string", "mitigation": "string"}],
        "exitStrategy": "string"
      },
      "appendix": {
        "supportingDocuments": ["string"],
        "marketResearchData": ["string"],
        "legalDocuments": ["string"],
        "resumesOfKeyPersonnel": ["string"],
        "financialStatements": ["string"],
        "otherRelevantInformation": ["string"]
      }
    }

    Fill each section with realistic data based on the user message. Keys must closely follow the section titles. Do NOT include any text outside the JSON. Here is the user message:
    "${message}"`

    const chatResponse = await openai.chat.completions.create({
      model: 'gpt-4-0125-preview', 
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
    });

    const raw = chatResponse.choices[0].message.content;
    console.log("Raw GPT response (business plan):", raw);

    let response = raw.trim();
    if (response.startsWith("```json")) {
      response = response.replace(/^```json/, "").replace(/```$/, "").trim();
    }

    const parsed = JSON.parse(response);
    res.json({ reply: parsed });

  } catch (error) {
    console.error('OpenAI API error (business plan):', error);

    if (error instanceof SyntaxError) {
      res.status(500).json({ error: 'Invalid JSON format in AI response.' });
    } else {
      res.status(500).json({ error: 'Something went wrong with the AI request.' });
    }
  }
});

// POST /chat route for prompting feasibility analysis
app.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Missing `message` in request body' });
    }

    // Strong prompt to force GPT to return only JSON
    const prompt = `You are an API. Return ONLY a valid JSON object with this structure. Do NOT include any text or code fences outside the JSON:
                        {
                            "businessName": "string",
                            "location": "string",
                            "date": "YYYY-MM-DD",

                            "summary": {
                                "overallRating": number,
                                "verdict": "string",
                                "overview": [
                                {
                                    "category": "Products/Service",
                                    "rating": number,
                                    "summary": "string"
                                },
                                {
                                    "category": "Market",
                                    "rating": number,
                                    "summary": "string"
                                },
                                {
                                    "category": "Organization",
                                    "rating": number,
                                    "summary": "string"
                                },
                                {
                                    "category": "Finance",
                                    "rating": number,
                                    "summary": "string"
                                }
                                ],
                                "keyFindings": ["string"]
                            },

                            "category": {
                                "productService": {
                                "rating": number,
                                "summary": "string",
                                "verdict": "string",
                                "strengths": ["string"],
                                "risks": ["string"],
                                "suggestions": ["string"]
                                },
                                "market": {
                                "rating": number,
                                "summary": "string",
                                "verdict": "string",
                                "competitors": [
                                    {
                                    "name": "string",
                                    "shortDescription": "string",
                                    "link": "string"
                                    }
                                ],
                                "suggestions": ["string"]
                                },
                                "organizational": {
                                "rating": number,
                                "summary": "string",
                                "verdict": "string",
                                "strengths": ["string"],
                                "risks": ["string"],
                                "suggestions": ["string"]
                                },
                                "financial": {
                                "rating": number,
                                "summary": "string",
                                "verdict": "string",
                                "startupCapital": "string-number",
                                "monthlyRevenueRange": ["string-number", "string-number"],
                                "breakevenMonths": ["string-number", "string-number"],
                                "suggestions": ["string"]
                                }
                            },
                        }

                        Ratings should be only x.xx/10 .
                        Verdicts are ["Less Feasible", "Moderately Feasible", "Highly Feasible"].
                        When dealing with large numbers, format with comma when necessary.
                        For key findings, strenghts, risk, and summaries under the category, be very detailed.

                        Do NOT include any text outside the JSON. Here is the user message:
                        "${message}"`;

    const chatResponse = await openai.chat.completions.create({
      model: 'gpt-4-0125-preview', 
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
    });

    const raw = chatResponse.choices[0].message.content;
    console.log("Raw GPT response:", raw);
    
    let response = raw.trim();
    if (response.startsWith("```json")) {
      response = response.replace(/^```json/, "").replace(/```$/, "").trim();
    }

    const parsed = JSON.parse(response);
    res.json({ reply: parsed });

  } catch (error) {
    console.error('OpenAI API error:', error);

    if (error instanceof SyntaxError) {
      res.status(500).json({ error: 'Invalid JSON format in AI response.' });
    } else {
      res.status(500).json({ error: 'Something went wrong with the AI request.' });
    }
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
