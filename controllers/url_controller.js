import URL from "../models/urlModel.js";
export const urlShortener = async (req, res) => {
    
  try {
    const { url } = req.body;

    const currentDomain = req.get("host");
    console.log("Current Domain:", currentDomain);
    const id = Date.now();

    let shortUrl = `${currentDomain}/shortenurl/${id}`;
    if (
      currentDomain.startsWith("localhost") ||
      currentDomain.startsWith("127.0.0.1")
    ) {
      shortUrl = "http://" + shortUrl;
    } else {
      shortUrl = "https://" + shortUrl;
    }

    const newUrl = await URL.create({
      orgUrl: url,
      shortUrl,
      shortId: id,
    });

    console.log("URL created Successfully!", newUrl);

    return res.status(200).json({ newUrl });
  } catch (error) {
    console.error("Error accessing parent domain:", error);
    return res.status(400).json({ error: "Error Creating Shorten Url" });
  }

  // generating random Id
};

export const redirectFunc = async (req, res) => {
  try {
    const id = req.params.id;
    let newUrl = await URL.findOne({ shortId: id });
    if (newUrl) {
      console.log("Respective URL Found!", newUrl);
      console.log("Redirecting to Orginal Link:", newUrl.orgUrl);

      return res.redirect(newUrl.orgUrl);
    }
  } catch (error) {
    return res.status(404).json({ error: "Link Expired or Invalid!" });
  }
};
