import URL from "../models/urlModel.js";
import passport from "passport";
export const urlShortener = async (req, res) => {

    // Checking request authorization
    if(!req.isAuthenticated()){
    return res.status(401).json({success: false, message: "Not Authorized!" });
    }

    try {
        const { url } = req.body;

        const activeUrl = req.get("host");

        const existingUrl = await URL.findOne({orgUrl: url})
        if(existingUrl){
            return res.status(409).json({success:false, message: "Shorten Url Alreadey Exists!", "Shorten Url": existingUrl.shortUrl})
        }
        // Creating URL In DB
        const newUrl = await URL.create({
            orgUrl: url
        })

        // Creating Short URL
        let shortUrl = `${activeUrl}/shorty/`;
        // Will generate url based on the doain, No need to change it manually
        if (
            activeUrl.startsWith("localhost") ||
            activeUrl.startsWith("127.0.0.1")
        ) {
            shortUrl = "http://" + shortUrl;
        } else {
            shortUrl = "https://" + shortUrl;
        }

        if(newUrl){
            shortUrl = shortUrl + newUrl._id;
            newUrl.shortUrl = shortUrl;
            await newUrl.save();
        }

        return res.status(200).json({ "Orginal URL:": newUrl.orgUrl, "Shorten Url:": newUrl.shortUrl });
    } catch (error) {
        return res.status(400).json({success:false, error: "Error Creating Shorten Url" });
    }
};


// Redirection Functionality
export const redirectFunc = async (req, res) => {
    try {
        const id = req.params.id;
        
        let url = await URL.findById(id)

        if (url) {
            return res.redirect(url.orgUrl);
        }
    } catch (error) {
        return res.status(404).json({success:false, error: "Link Expired or Invalid!" });
    }
};
