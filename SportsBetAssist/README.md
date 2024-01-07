# SportsBetAssist

SportsBetAssist is a sophisticated web application designed to assist sports bettors by leveraging advanced artificial intelligence. It offers real-time odds monitoring, betting pattern analysis, and personalized betting recommendations, ensuring an enhanced betting experience for users.

## Features

- **Live Odds Monitoring**: Fetch and display live betting odds from multiple sources.
- **Pattern Detection and Analysis**: Utilize AI, such as Mixtral-8x-7b or GPT-4, to analyze betting patterns.
- **Personalized Betting Recommendations**: Generate risk-assessed betting advice based on user history and preferences.
- **User Dashboard**: A convenient dashboard for users to track their betting history and performance.
- **Regulatory Compliance**: Ensure strict adherence to data protection laws.

## Technology Stack

- **Node.js**: A JavaScript runtime built on Chrome's V8 engine for the server-side.
- **ReactJS**: A JavaScript library for building user interfaces.
- **MongoDB**: A NoSQL database for storing application data.
- **Socket.io**: A JavaScript library for realtime web applications.
- **Playwright**: A Node library for browser automation.
- **GPT-4**: An AI language model for generating insights and advice.
- **Cronjob**: Used for scheduling tasks (like web scraping).
- **Bootstrap**: For styling and responsive design.
- **HTML/CSS3**: Markup and styling languages for web pages.
- **AWS**: Cloud platform for hosting and deploying the application.

## Installation

To get started with SportsBetAssist, follow these instructions:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/yourrepository/SportsBetAssist.git
```

2. Navigate to the repository folder and install server dependencies:

```bash
npm install
```

3. Navigate to the client directory and install client dependencies:

```bash
cd client
npm install
```

4. Set up your environment variables in the `.env` file:

```env
PORT=8000
MONGO_URI=yourMongoDBUri
OPENAI_API_KEY=yourOpenAIKey
```

5. To start the development server, use:

```bash
npm start
```

6. To run the Playwright scraper with a cron job, use:

```bash
npm run start-cron
```

7. To start the client application, run:

```bash
cd client
npm start
```

## Usage

Once the application is up and running, you can access the live odds data, manage your betting preferences, and request AI-powered betting advice. Document any additional steps or use cases here.

## Contributing

If you wish to contribute to SportsBetAssist, please read `CONTRIBUTING.md` and follow the instructions.

## Versioning

We use [SemVer](http://semver.org/) for version control. For the versions available, see the tags on this repository.

## Authors

- **Your Name** - Initial work - [YourProfile](https://github.com/YourProfile)

See also the list of [contributors](https://github.com/yourrepository/SportsBetAssist/contributors) who have participated in this project.

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc
