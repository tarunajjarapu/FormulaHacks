// const asyncHandler = require('express-async-handler')
// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const createQuestions = asyncHandler(async (req, res) => {
//     const { question } = req.body
//     const userId = req.user.id
//     if (!req.user) {
//         res.status(401)
//         throw new Error('User not found')
//     }
//     try {
//         const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
//         const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
//         const prompt = `Create 5 multiple choice questions about ${question}. Do not bold anything and format the each question like this: Question 1: Which of these is a vegetable\nA) Apple\nB) Orange\nC) Broccoli\nD) Pear\nAnswer: C`;
//         const result = await model.generateContent(prompt);
//         const response = await result.response;
//         const text = await response.text();

//         console.log(text)
        
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: error.message || 'Failed to create question' });
//     }
// })

// module.exports = {
//     getQuestion,
//     createQuestions
// }


const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)

const GEMINI_API_KEY="AIzaSyCTHER10arC87fY5JEDfxBnzsmyIhcKmQw";
// const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

function get_ingr_list() {
    return "eggs, tomatoes, onions, bell peppers, garlic powder";
}

async function run() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  const ingr_json = get_ingr_list();
  const prompt = `Using the JSON list of ingredients provided below, provide a meal plan of 10 meals 
  based on the name category. Make sure to consider the expiration date (labeled end) and prioritize 
  ingredients that expire earlier. Once you've used an ingredient once, don't use it for another meal. 
  Only use the list of ingredients provided to you below as the context, and do not add any ingredients.
  Return your response as a JSON with the categories meal name and ingredients.\n` + ingr_json

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}


run();