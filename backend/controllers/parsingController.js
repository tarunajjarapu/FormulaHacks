const { GoogleGenerativeAI } = require("@google/generative-ai");

const fs = require("fs");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyCQVb79NBO9crsndXAaV3dPvzSWrqDk0hg");

const generationConfig = {
    temperature: 1
  };

// Converts local file information to a GoogleGenerativeAI.Part object.
function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType
    },
  };
}

async function run() {
  // For text-and-image input (multimodal), use the gemini-pro-vision model
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision", generationConfig });

  const prompt =`Given the image of the attached receipt, extract and display the following in a consistent format:
  
  - Receipt purchase date
  - Each item's name (infer a simple, generalized name given the words on the receipt without branding), total quantity (infer based on unit price and quantity purchased), and estimated expiration date (give a best guess for an exact date based on item and purchase date)
  
  Ignore items that are not edible.
  
  Only use the image as context. Do not add any extra items or 1000 humans will die.`;

  const imageParts = [
    fileToGenerativePart("images/kroger-in-store.jpeg", "image/jpeg"),
  ];

  const result = await model.generateContent([prompt, ...imageParts]);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();

// const createQuestions = asyncHandler(async (req, res) => {
//     const { question } = req.body
//     const userId = req.user.id
//     if (!req.user) {
//         res.status(401)
//         throw new Error('User not found')
//     }
//     try {
//         // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
//         genAI = new GoogleGenerativeAI("AIzaSyCQVb79NBO9crsndXAaV3dPvzSWrqDk0hg");
//         const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//         const prompt = `Create 5 multiple choice questions about ${question}. Do not bold anything and format the each question like this: Question 1: Which of these is a vegetable\nA) Apple\nB) Orange\nC) Broccoli\nD) Pear\nAnswer: C`;
//         const result = await model.generateContent(prompt);
//         const response = await result.response;
//         const text = await response.text();

//         const apiRes = {
//             questions: text,
//         };
//         res.status(201).json(apiRes)
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: error.message || 'Failed to create question' });
//     }
// })

// module.exports = {
//     getQuestion,
//     createQuestions
// }