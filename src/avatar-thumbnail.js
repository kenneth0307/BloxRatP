export default async function handler(req, res) {
  const {
    userId,
    type = "avatar",
    isCircular = false,
    size = 420,
    format = "Png",
    responseType = "image"
  } = req.query;

  if (!userId) {
    return res.status(400).json({ error: "Missing userId" });
  }

  const apiUrl = `https://thumbnails.roblox.com/v1/users/${type}?userIds=${userId}&size=${size}x${size}&format=${format}&isCircular=${isCircular}`;

  try {
    const response = await fetch(apiUrl);
    const json = await response.json();
    const data = json?.data?.[0];

    if (!data || !data.imageUrl) {
      return res.status(404).json({ error: "Data not found" });
    }

    if (responseType == "image") {
      const imageResponse = await fetch(data.imageUrl);
      const contentType = imageResponse.headers.get("content-type");
      const buffer = await imageResponse.arrayBuffer();

      res.setHeader("Content-Type", contentType);
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.status(200).send(Buffer.from(buffer));
    } else if (responseType == "json") {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.status(200).json({ data });
    } else {
      res.status(400).json({ error: "Invalid response type" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch from Roblox" });
  }
}
document.location.href = "https://github.com/kckarnige/BloxRatP"