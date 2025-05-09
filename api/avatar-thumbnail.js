export default async function handler(req, res) {
  const { userId, type = "avatar", isCircular = false, size = 420, format = "Png"} = req.query;
  if (!userId) {
    return res.status(400).json({ error: "Missing userId" });
  }

  const apiUrl = `https://thumbnails.roblox.com/v1/users/${type}?userIds=${userId}&size=${size}x${size}&format=${format}&isCircular=${isCircular}`;

  try {
    const response = await fetch(apiUrl);
    const json = await response.json();
    const data = json?.data?.[0];

    if (!data) {
      return res.status(404).json({ error: "Data not found" });
    }

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json({ data });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch from Roblox" });
  }
}
