![louie](./icon.svg)

# Blox R.A.T. Proxy

A simple little API proxy for me to test Vercel, and for you to get whatever render you need of your Roblox avatar via Roblox's own API.

*<sub>R.A.T. stands for Roblox Avatar Thumbnail.</sub>*

 ## Image Example (Default)

`https://bloxratp.vercel.app/api/avatar-thumbnail?userId=154248006&type=avatar-headshot&size=150&isCircular=false&responseType=image`

![image example](https://bloxratp.vercel.app/api/avatar-thumbnail?userId=154248006&type=avatar-headshot&size=150&isCircular=false&responseType=image)

 ## JSON Example

`https://bloxratp.vercel.app/api/avatar-thumbnail?userId=154248006&type=avatar-headshot&size=150&isCircular=false&responseType=json`

```json
{
  "userId": 154248006,
  "username": "kayos155",
  "displayName": "KiCKTheBucket",
  "avatarThumbnail": {
    "imageUrl": "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-9D92EA3EB8F953FBDC822282AB21FB2B-Png/150/150/AvatarHeadshot/Png/noFilter",
    "type": "avatar-headshot",
    "size": "150",
    "format": "Png",
    "isCircular": "false"
  }
}
```

## Parameters

### `userId` (String):

The Roblox user's ID. This can be found in the profile's URL.

<code><span>https://</span>www.roblox.com/users/<u>154248006</u>/profile</code>

---

### `type` (String):

Sets what type of thumbnail is returned.

Options: `avatar` (default), `avatar-bust`, `avatar-headshot`.

---

### `isCircular` (Boolean):

Does what it says on the tin: Sets whether or not the returned image is circular.

Options: `true`, `false` (default)

---

### `size` (Integer):

Sets what size the returned thumbnail is.

Options: `48`, `100`, `180`, `420` (default) 

Note: To get a full list of supported sizes, make sure to check the official API docs, linked below.

---

### `format` (String):

Sets what image format the returned thumbnail is.

Options: `png` (default), `webp`, `jpeg`

Note: `jpeg` format is not supported for `avatar-bust` thumbnails.

---

### `responseType` (String):

Sets whether to return an image or JSON.

Options: `image` (default), `json`

---

For more detailed information on the different parameters and such, check out the official Roblox avatar thumbnail v1 docs:
https://create.roblox.com/docs/cloud/features/avatars#/default/get_v1_users_avatar