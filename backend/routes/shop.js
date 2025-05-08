const express = require("express");
const users = require("../data/MOCK_DATA.json");

const router = express.Router();

router.get("/", (req, res) => {
	res.json(users);
});

// router.get("/", (req, res) => {
// 	res.json({
// 		heading: "Your Local Family Dentist in Aspley",
// 		content: `We are proud to have been your local Aspley Dentist for over two decades, with our clinic centrally located for all Brisbane northside residents on Gympie Road beside the Aspley Hypermarket. We understand what it means to live in Aspley with its tranquil, hilly streets and what makes it the ideal family-friendly suburb in North Brisbane.
// 			At Aspley Elite Dental Clinic, we're more than just your local dentist, we’re your partner in ensuring lifelong oral health. Our dedicated team provides detailed dental check-ups and cleanings designed to protect and enhance your oral health. Whether you need routine fillings or are looking for advanced crowns, our commitment is to maintain your smile’s brilliance, ensuring it lights up every room you enter.
// 			We’ve equipped our dental clinic with state-of-the-art technology and amenities! We offer comfortable, clean, friendly, efficient, and effective care, plus twenty-five years of experience. Our goal is to educate our patients, provide high-quality and efficient dental care, and create a comfortable environment. We’re here to support you as your trusted dentist.`,
// 	});
// });

module.exports = router;
