export default async function handler(req, res) {
  const { userId } = req.query;
  if (!userId) {
    return res.status(400).json({ error: "Missing userId" });
  }

  const apiUrl = `https://thumbnails.roblox.com/v1/users/avatar-bust?userIds=${userId}&size=420x420&format=Png&isCircular=false`;

  try {
    const response = await fetch(apiUrl);
    const json = await response.json();
    const imageUrl = json?.data?.[0]?.imageUrl;

    if (!imageUrl) {
      return res.status(404).json({ error: "Image not found" });
    }

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json({ imageUrl });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch from Roblox" });
  }
}
