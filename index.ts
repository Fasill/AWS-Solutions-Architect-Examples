import { APIGatewayProxyEvent, Handler } from "aws-lambda";

export const handler: Handler = async(event: APIGatewayProxyEvent) => {
    // TODO implement
    const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda! 123'),
    };
    return response;
  };
  