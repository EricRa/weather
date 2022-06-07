exports.handler = async (event, context) => {

    //const apiKey = process.env.OPENWEATHER_API;

    return {
        statusCode: 200,
        //body: `${apiKey}`,
        body: JSON.stringify({ key: process.env.OPENWEATHER_API }),
    };
}
